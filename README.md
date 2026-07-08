# SnapURL - URL Shortener with Stateless Authentication

> A practice project built while learning **Node.js** and **Express.js**, implementing a URL Shortener with **JWT-based Stateless Authentication**, **MongoDB**, and **Cookie Authentication**.

---

# About The Project

**SnapURL** is my **first Node.js backend learning project**, created to understand how real-world web applications work behind the scenes.

Instead of only following tutorials, I challenged myself to implement the concepts on my own, debugging errors and understanding how backend applications are built using Express.js and MongoDB.

This project helped me gain hands-on experience with:

- Express.js
- MongoDB & Mongoose
- MVC Architecture
- JWT Authentication
- Cookie-based Authentication
- Password Hashing using bcrypt
- Protected Routes using Middleware

---

# Features

-  User Registration
-  User Login
-  Stateless Authentication using JWT
-  Cookie-based Authentication
-  URL Shortening
-  Click Analytics
-  URL History
-  Protected Routes
-  Password Hashing with bcrypt

---

#  Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- cookie-parser
- EJS

---

#  Project Structure

```text
SnapURL/
│
├── controllers/
│   ├── urls.js
│   └── user.js
│
├── middleware/
│   └── index.js
│
├── models/
│   ├── url.js
│   └── user.js
│
├── routes/
│   ├── urls.js
│   └── user.js
│
├── services/
│   └── auth.js
│
├── views/
│   ├── home.ejs
│   ├── history.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── connection.js
├── index.js
└── package.json
```

---

# Authentication Flow

```text
User Login
      │
      ▼
Controller validates credentials
      │
      ▼
Password verified using bcrypt
      │
      ▼
JWT Token Created
      │
      ▼
Token Stored Inside Browser Cookie
      │
      ▼
User Requests Protected Route
      │
      ▼
Authentication Middleware
      │
      ▼
JWT Verified
      │
      ▼
req.user populated
      │
      ▼
Requested Controller Executes
```

---

# Project Screenshots

## Home Page

Displays the URL Shortener dashboard where authenticated users can shorten long URLs.

```md
![Home Page](images/home.png)
```

---

## URL History

Displays all shortened URLs created by the logged-in user along with total clicks.

```md
![History](images/history.png)
```

---

## Login Page

User authentication page.

```md
![Login](images/login.png)
```

---

## Signup Page

Create a new account before logging in.

```md
![Signup](images/signup.png)
```

---

## JWT Token Verification

The generated JWT token was verified using the JWT Debugger to ensure it is correctly signed and contains the expected payload.

Decoded Payload:

```json
{
  "id": "6a4e3184fefeb20e32667c9c",
  "email": "user@example.com",
  "iat": 1783510804
}
```

```md
![JWT Verification](images/jwt-debugger.png)
```

---

# Security

This project implements **Stateless Authentication** using **JSON Web Tokens (JWT)**.

Authentication Flow:

- User logs in.
- Password is verified using bcrypt.
- JWT is generated.
- JWT is stored inside browser cookies.
- Every protected request verifies the JWT before allowing access.

---

# Privacy & Security Awareness

> **Never expose your secret keys or authentication tokens publicly.**

### Never commit the following to GitHub:

- `.env`
- JWT Secret Key
- Database Credentials
- Authentication Tokens
- Cookies
- API Keys

If someone gains access to your **JWT Secret**, they can generate valid authentication tokens and impersonate users.

If someone gains access to your **JWT Token**, they may be able to access your account until the token expires.

### Best Practices

- Store secrets inside `.env`
- Add `.env` to `.gitignore`
- Use strong secret keys
- Set JWT expiration (`expiresIn`)
- Use HTTPS in production
- Never hardcode secrets in production

> **Note:** This project hardcodes the JWT secret **only for learning purposes**. In production applications, secrets should always be stored securely using environment variables.

---

# What I Learned

This project helped me understand:

- Express.js Routing
- MVC Architecture
- Middleware
- MongoDB CRUD Operations
- Mongoose Models
- bcrypt Password Hashing
- JWT Authentication
- Cookie-based Authentication
- Protected Routes
- Separation of Concerns
- Backend Debugging
- Authentication Flow

---

# Future Improvements

- JWT Expiration
- Refresh Tokens
- Logout Functionality
- Email Verification
- Forgot Password
- User Profile
- Rate Limiting
- URL Expiration
- Custom Short URLs
- Deployment

---

# Personal Note

This is my **first backend project built while learning Node.js and Express.js**.

Rather than simply following tutorials, I took the time to understand the concepts and implement them on my own. Throughout development, I encountered and solved many real-world debugging challenges involving Express routing, middleware, MongoDB, Mongoose, bcrypt, JWT, cookies, and authentication.

This project represents an important milestone in my backend development journey and serves as a strong foundation for building more advanced backend applications.

---

## If you found this project interesting, feel free to fork it, explore the code, or leave feedback!
