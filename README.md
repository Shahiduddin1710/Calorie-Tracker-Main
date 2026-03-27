# CalorieTrack 🥗

A full-stack nutrition and fitness tracking web application. Log meals, track calories, monitor macros, and log daily activities — all in one place.

**Live Demo:** [calorie-tracker-3n4a.onrender.com](https://calorie-tracker-3n4a.onrender.com)

---

## Features

### Authentication
- Email/password signup and signin
- OTP-based email verification
- JWT-based session management
- Password reset via OTP

### Food & Nutrition
- Search from a database of 25+ common foods
- Log meals across Breakfast, Lunch, Dinner, and Snacks
- Auto-calculated macros (protein, carbs, fat, calories)
- Add custom foods with full nutrient details
- Date navigation to view past food logs

### Activity Tracking
- Log activities: Running, Walking, Cardio, Swimming, Cycling, Custom
- Auto-calculated calories burned based on duration and distance
- Daily activity summary (kcal burned, total minutes, activity count)
- Date-based history

### Dashboard
- Net calories display (eaten − burned)
- Daily macro breakdown (protein, carbs, fat)
- Meal-wise calorie summary
- Progress bar toward daily calorie goal

### Profile & Progress
- Set daily calorie goal, weight, height, and fitness goals
- Track weight and calorie trends over time

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Axios | HTTP requests |
| date-fns | Date formatting |
| react-hot-toast | Notifications |
| CSS (custom) | Styling |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Web framework |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Nodemailer | Email (OTP) |
| express-rate-limit | Rate limiting |

### Deployment
| Service | Purpose |
|---|---|
| Vercel | Backend hosting |
| Render | Frontend hosting |
| MongoDB Atlas | Database hosting |

---

## Project Structure

```
calorietracker-backend/
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   ├── Food.js
│   ├── FoodLog.js
│   └── ActivityLog.js
├── routes/
│   ├── auth.js
│   ├── food.js
│   ├── log.js
│   ├── user.js
│   └── activity.js
├── utils/
│   ├── email.js
│   └── jwt.js
├── seed.js
├── server.js
└── vercel.json

calorie-tracker-frontend/
├── src/
│   ├── components/
│   │   ├── Layout.js
│   │   └── LoadingScreen.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── DashboardPage.js
│   │   ├── FoodLogPage.js
│   │   ├── ActivityPage.js
│   │   ├── FoodsPage.js
│   │   ├── ProgressPage.js
│   │   ├── ProfilePage.js
│   │   ├── SigninPage.js
│   │   ├── SignupPage.js
│   │   └── OTPPage.js
│   └── utils/
│       └── api.js
└── package.json
```

---

## Setup & Installation

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- SMTP email credentials (Gmail, Brevo, etc.)

### Backend

```bash
# Clone the repo
git clone https://github.com/Shahiduddin1710/calorietracker-backend.git
cd calorietracker-backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Fill in your `.env`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com
PORT=5000
```

```bash
# Seed the food database
node seed.js

# Start the server
node server.js
```

### Frontend

```bash
# Clone the repo
git clone https://github.com/Shahiduddin1710/calorie-tracker-frontend.git
cd calorie-tracker-frontend

# Install dependencies
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env

# Start the app
npm start
```

---

## Environment Variables

### Backend `.env`

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `JWT_EXPIRE` | Token expiry duration (e.g. `7d`) |
| `CLIENT_URL` | Frontend URL for CORS |
| `EMAIL_HOST` | SMTP host |
| `EMAIL_PORT` | SMTP port |
| `EMAIL_USER` | SMTP username |
| `EMAIL_PASS` | SMTP password |
| `EMAIL_FROM` | Sender email address |
| `PORT` | Server port (default: 5000) |

### Frontend `.env`

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | Backend API base URL |

---



