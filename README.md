# CalorieTrack

🔗 Live App: https://calorie-tracker-3n4a.onrender.com

A full-stack calorie & nutrition tracking web app to track daily intake, log meals, and monitor fitness goals.

---

## 🔐 Authentication & Security

- Email OTP verification  
- JWT-based authentication (7-day session)  
- Password hashing (bcrypt)  
- Protected routes  
- Rate limiting  

---

## 📊 Core Features

### 🍽 Food Logging
- Add meals (Breakfast, Lunch, Dinner, Snacks)  
- Search from pre-seeded food database  
- Custom serving sizes  
- Auto calorie & macro calculation  
- Edit and delete entries  

### 📈 Dashboard
- Daily calorie tracking  
- Remaining calories  
- Macro tracking (Protein, Carbs, Fat)  
- Meal-wise breakdown  

### 👤 Profile & Goals
- Set age, weight, height, activity level  
- Choose goal (Lose / Maintain / Gain)  
- Auto-calculated calorie targets  

### 📊 Progress
- Weekly calorie trends  
- Macro insights  

---

## 🏗 Tech Stack

**Frontend**
- React.js  
- React Router DOM  
- Context API  
- Axios  

**Backend**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- Nodemailer (OTP Emails)  

---

## ⚙️ Installation Guide

### 1. Clone Repository
git clone https://github.com/Shahiduddin1710/Calorie-Tracker-Main.git

cd calorie-tracker  

### 2. Backend Setup
cd backend  
npm install  

Create `.env` file:

MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_secret  
CLIENT_URL=http://localhost:3000  
EMAIL_USER=your_email  
EMAIL_PASS=your_app_password  

Run backend:  
npm run dev  

### 3. Frontend Setup
cd ../frontend  
npm install  
npm start  

---

## 🌟 Future Enhancements

- Barcode food scanning  
- Advanced analytics  
- Meal recommendations  
- Export reports  

---

## 👨‍💻 Author

**Shahiduddin Shaikh**  
Computer Engineering Student  
Vidyavardhini College of Engineering  
