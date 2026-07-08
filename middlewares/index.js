/**
 * ==========================================================
 * Authentication Middleware
 * ==========================================================
 *
 * Purpose:
 * This middleware protects routes that should only be accessible
 * to authenticated (logged-in) users.
 *
 * Why was this middleware created?
 * Without this middleware, any user could directly access protected
 * routes (e.g., /home, /history, /createURL) simply by typing the URL
 * into the browser, even without logging in.
 *
 * This middleware acts as a security checkpoint before the request
 * reaches the controller.
 *
 * Responsibilities:
 * 1. Read the JWT token stored in the browser's cookies.
 * 2. Verify whether the token is valid.
 * 3. If valid:
 *      - Decode the user's information from the token.
 *      - Attach it to req.user so downstream controllers can use it.
 *      - Call next() to continue the request.
 * 4. If invalid or missing:
 *      - Stop the request.
 *      - Redirect/render the login page with an appropriate error.
 *
 * Request Flow:
 *
 * Browser Request
 *       │
 *       ▼
 * Authentication Middleware
 *       │
 *       ├── No Cookie
 *       │      ↓
 *       │   Render Login Page
 *       │
 *       ├── Invalid Token
 *       │      ↓
 *       │   Render Login Page
 *       │
 *       └── Valid Token
 *              ↓
 *        req.user = decoded JWT payload
 *              ↓
 *            next()
 *              ↓
 *         Requested Controller (handlePostURLs)
 */
const { getCookie } = require('../services/auth');
async function handleSession(req,res,next){
    const tokenID = req?.cookies?.tokenID;
    console.log(tokenID);
    console.log(`cookies : ${req}`)
    if (!tokenID){
        return res.render('login', {error : 'Login Required!'});
    } else {
        const user = getCookie(tokenID);
        if (user){
            req.user = user;
            next();
        } else {
            return res.render('login' , {error : 'Invalid Token! Token Expired, Please Login Again!'});
        }
    }
}

module.exports = {
    handleSession
}