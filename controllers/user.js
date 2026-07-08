const User = require('../model/user');
const bcrypt = require('bcrypt');
const { setCookie }  = require('../services/auth')
function signUp(req, res){
    return res.render('signUp', {error : ''});
};

async function handleSignUp(req, res){
    console.log(req.body);
    const {name, email, password} =req.body;
    const bpass = await bcrypt.hash(password, 10);
    console.log(bpass);
    const result = await User.create({
        name : name,
        email : email,
        password : bpass
    });
    if(result){
        return res.render('login', {error : ''});
    } else {
        return res.render('signUp', {error : 'Incomplete Field! Please Try Again!'});
    }
};

function login(req,res){
    return res.render('login', {error : ''});
}

async function handleLogin(req, res){
    const body = req.body;
    console.log(body);
    const userEmail = body.email;
    const user = await User.findOne({email : userEmail});
    console.log(user);
    if (user){
        const password = await bcrypt.compare(body.password, user.password);
        if (password){
            console.log('password matched and user found')
            const token = setCookie(user);
            console.log('Token Created!')
            res.cookie("tokenID", token);
            console.log('token id saved to the cookie')
            return res.render('home', {
                url : '',
                error : ''});
        } else {
            return res.render('login', {error : 'Wrong Password! Please Try Again!'});
        };
    }else {
        return res.render('login', {error : 'Wrong Email! Please Try Again!'});
    };
};

module.exports = {
    signUp, handleSignUp, login , handleLogin 
}
