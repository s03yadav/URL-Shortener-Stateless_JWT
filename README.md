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
<img width="1919" height="1006" alt="Screenshot 2026-07-08 175108" src="https://github.com/user-attachments/assets/a42a106f-f0fd-4b2b-a643-0fa3c02879b7" />
```

---

## URL History

Displays all shortened URLs created by the logged-in user along with total clicks.

```md
<img width="1917" height="1012" alt="Screenshot 2026-07-08 174804" src="https://github.com/user-attachments/assets/2d0ff5ab-7bbd-4368-a832-c1c67b1f70b0" />
```

---

## Login Page

User authentication page.

```md
<img width="1919" height="1007" alt="Screenshot 2026-07-08 175014" src="https://github.com/user-attachments/assets/489d4322-da2f-48c6-8084-b4077b3854a4" />
```

---

## Signup Page

Create a new account before logging in.

```md
<img width="1919" height="1007" alt="Screenshot 2026-07-08 175027" src="https://github.com/user-attachments/assets/8ab717ab-15b2-4d79-8821-adb7ded413f0" />
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
<img width="1771" height="878" alt="Screenshot 2026-07-08 174302" src="https://github.com/user-attachments/assets/c428fab1-2cee-466c-b0fb-82ad31615f1c" />
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
