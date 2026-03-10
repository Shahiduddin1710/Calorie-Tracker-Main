# CalorieTrack - MERN Nutrition Tracker

A full-stack calorie and nutrition tracking app built with MongoDB, Express, React, and Node.js. Features OTP-based email verification via Nodemailer.

---

## Folder Structure

```
calorie-tracker/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Food.js
│   │   └── FoodLog.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── food.js
│   │   ├── log.js
│   │   └── user.js
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   ├── email.js
│   │   └── jwt.js
│   ├── server.js
│   ├── seed.js
│   ├── .env.example
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Layout.jsx
    │   │   └── LoadingScreen.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── LandingPage.jsx
    │   │   ├── SignupPage.jsx
    │   │   ├── SigninPage.jsx
    │   │   ├── OTPPage.jsx
    │   │   ├── DashboardPage.jsx
    │   │   ├── FoodLogPage.jsx
    │   │   ├── FoodsPage.jsx
    │   │   ├── ProgressPage.jsx
    │   │   └── ProfilePage.jsx
    │   ├── utils/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    └── package.json
```

---

## Setup Instructions

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas - free tier)
- Gmail account for Nodemailer (or any SMTP)

---

### Step 1: Clone and Set Up Backend

```bash
cd calorie-tracker/backend
npm install
```

Copy the example env file:
```bash
cp .env.example .env
```

Edit `.env` with your values:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/calorie-tracker
JWT_SECRET=your_long_random_secret_key_here
JWT_EXPIRE=7d

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_FROM=CalorieTracker <your_email@gmail.com>

CLIENT_URL=http://localhost:5173
```

**Gmail App Password Setup:**
1. Go to https://myaccount.google.com
2. Security → 2-Step Verification → App passwords
3. Create an app password for "Mail"
4. Use that 16-character password as EMAIL_PASS

### Step 2: Seed the Food Database

```bash
cd backend
node seed.js
```

This adds 25+ common foods to get you started.

### Step 3: Start the Backend

```bash
npm run dev
```

Backend runs on http://localhost:5000

---

### Step 4: Set Up Frontend

```bash
cd calorie-tracker/frontend
npm install
```

### Step 5: Start the Frontend

```bash
npm run dev
```

Frontend runs on http://localhost:5173

---

## Features

- **Landing page** - Professional hero page with CTA
- **OTP Email Verification** - Nodemailer-based 6-digit OTP on signup
- **JWT Authentication** - Secure token-based sessions
- **Dashboard** - Daily calorie ring, macro bars, meal summary
- **Food Log** - Log meals by breakfast/lunch/dinner/snack, date navigation
- **Food Database** - Search 25+ built-in foods, add custom foods
- **Progress Charts** - Area charts and bar charts with recharts
- **Profile Setup** - TDEE calculator using Mifflin-St Jeor equation
- **Responsive** - Works on mobile and desktop
- **Animated Loading Screen** - Smooth entry animation

---

## Using MongoDB Atlas (Free Cloud DB)

1. Go to https://mongodb.com/atlas
2. Create a free account and cluster
3. Get your connection string
4. Replace MONGO_URI in .env:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/calorie-tracker
   ```

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, TailwindCSS, Recharts |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Auth | JWT + Nodemailer OTP |
| Routing | React Router v6 |
