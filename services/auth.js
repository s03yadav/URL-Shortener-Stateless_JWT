/**
 * ==========================================================
 * Authentication Service (JWT Utility)
 * ==========================================================
 *
 * Purpose:
 * This file is responsible for handling JSON Web Token (JWT)
 * operations for the application.
 *
 * Why was this file created?
 * Instead of writing JWT logic inside controllers or middleware,
 * all authentication-related functions are kept in one place.
 * This follows the Separation of Concerns principle, making the
 * code cleaner, reusable, and easier to maintain.
 *
 * Responsibilities:
 * 1. Generate a JWT token after a successful login.
 * 2. Verify and decode a JWT token received from the client.
 *
 * Workflow:
 *
 * Login:
 * User Logs In
 *      ↓
 * setCookie(user)
 *      ↓
 * JWT Token Generated
 *      ↓
 * Token Sent to Browser as Cookie
 *
 * Protected Route:
 * Browser Sends Cookie
 *      ↓
 * Middleware Reads Cookie
 *      ↓
 * getCookie(token)
 *      ↓
 * JWT Verified
 *      ↓
 * User Information Returned
 */
const jwt = require('jsonwebtoken');
const secret = 'BiniBaka@13$';

function setCookie(user){
    const payload = {
        id : user._id,
        email : user.email
    }
    return jwt.sign(payload, secret);
}

function getCookie(token){
    if (!token){
        return null;
    }
    return jwt.verify(token, secret)
}

module.exports = {
    setCookie,
    getCookie
}
