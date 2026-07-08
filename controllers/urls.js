const URLS = require('../model/url');
const Users = require('../model/user');
const {nanoid} = require('nanoid');

function home(req,res){
    return res.render('home', {
        error : '',
        url : ''});
};

async function handlePostURLs (req, res) {
    
    const redirectURLS = req.body.url;
    const sId = nanoid(8);
    
    if (!redirectURLS){
        return res.render('home',{ 
            error : 'Please Add A URL !',
            url : ''})
    }
    
    if (!sId){
        console.log('Error Creating ShortURL via NanoID lib')
        return res.status(500)
    }
    
    const userEmail = req.user.email;
    const user = await Users.findOne({email : userEmail});
    console.log(`User found in handlePostURLS : ${user}`);
    console.log(`short id created : ${sId}`);
    console.log(redirectURLS)
    const result = await URLS.create({
        shortUrl : sId,
        redirectUrl : redirectURLS,
        user : user._id
    })
    console.log(result)
    console.log(`ShortURL : ${sId}`);
    return res.render('home', {error : '', url : `http://localhost:8001/home/${sId}`});
}

async function handleRedirectURLs (req,res){
    console.log(req);
    const sId = req.params.sId;
    console.log(sId)
    const url = await URLS.findOneAndUpdate({shortUrl : sId}, {$inc : {visitedHistory : +1} });
    console.log(url);
    return res.redirect(url.redirectUrl);
}

async function handleHistory(req,res){
    const userEmail = req.user.email
    const user = await Users.findOne({email : userEmail});
    if(!user){
        return res.status(500).json({error : 'No User Email found via request Object'});
    }
    console.log(user);
    const userId = user._id;
    if(!userId){
        return res.status(500).json({error : 'No Matching userId'});
    }
    const urls = await URLS.find({
        user : userId
    });
    console.log(`urls : ${urls}`);
    if (!urls){
        return res.render('home', {url : ''}, {error : 'No History Found! Please Create a ShortURL first!'});
    }
    return res.render('history', {urls : urls})
}

module.exports = {
    home , handlePostURLs, handleRedirectURLs, handleHistory
}
