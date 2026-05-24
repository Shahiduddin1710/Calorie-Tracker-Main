# CalorieTrack 

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
| React + Vite | UI framework & build tool |
| React Router v6 | Client-side routing |
| Axios | HTTP requests |
| date-fns | Date formatting |
| react-hot-toast | Notifications |
| Custom CSS | Styling |

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

## Author
<p align="center">
<b>Shahiduddin Shaikh (Shaho)</b>
<br/>
Bachelor of Engineering in Computer Engineering
<br/>
Vidyavardhini College of Engineering, Vasai
</p>

---

<p align="center">
⭐ If you like this project, consider giving it a star!
</p>
