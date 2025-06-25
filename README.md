# ✈️ Travel Agency AI Dashboard

An intelligent, AI-powered travel planning dashboard built with React, TypeScript, Vite, and Appwrite. It provides seamless trip planning for users and full administrative control via a modern, real-time dashboard.

Live Site: [https://travel-agency-dashboard-topaz.vercel.app](https://travel-agency-dashboard-topaz.vercel.app)

---

## 🚀 Features

### 🔐 Authentication

- Google OAuth2 login using Appwrite Authentication.
- All routes are protected — users must sign in to access content.
- Separate routes and pages for **Users** and **Admins**.

### 👤 User Home Page

- Responsive layout displaying:
  - Google profile image.
  - Logout button.
  - Admin dashboard link (only if the user is an admin).
- Browse all **AI-generated trip plans**.
  - Each plan includes:
    - 3 AI-rendered images (via Unsplash API).
    - Title, location, travel style, and budget.
    - Highlights: weather, best time to visit, interests, and more.
    - Day-by-day itinerary (morning, afternoon, evening plans).
    - Booking functionality (redirects to placeholder payment page).

### 🛠 Admin Dashboard

> _Admins only_

#### 📊 Dashboard

- Real-time stats:
  - Total users
  - Total trips
  - Active users
- Interactive charts using Syncfusion:
  - User Growth Chart
  - Trip Trends Chart
- Latest Created Trips

#### 🧑‍💼 All Users

- View all signed-in users:
  - Name
  - Profile image
  - Role (User/Admin)
  - Join date

#### ✨ AI Trips Creation

- Admin can create new trip plans using:
  - **Gemini AI** (for generating content)
  - **Unsplash AI** (for related images)
- Form includes:
  - Country selector (highlighted on world map)
  - Interests, travel type, budget, group type, duration
- Auto-generates complete plan with a beautiful display

---

## 💾 Tech Stack

| Tech         | Purpose                               |
| ------------ | ------------------------------------- |
| React        | Frontend Framework                    |
| Vite         | Lightning-fast build tool             |
| TypeScript   | Type safety and modern JS features    |
| Tailwind CSS | Utility-first styling                 |
| Appwrite     | Authentication, database, and storage |
| Gemini AI    | AI-based content generation           |
| Unsplash API | AI-based image generation             |
| Syncfusion   | Interactive charts and UI components  |
| Sentry       | Error tracking and monitoring         |
| Vercel       | Deployment platform                   |

---

## 🧑‍💻 Getting Started

### 📦 Install Dependencies

```bash
npm install
```

### 🔧 Environment Variables

```bash
# Syncfusion
VITE_SYNCFUSION_LICENSE_KEY

# Appwrite
VITE_APPWRITE_PROJECT_ID
VITE_APPWRITE_API_KEY
VITE_APPWRITE_DATABASE_ID
VITE_APPWRITE_USERS_COLLECTION_ID
VITE_APPWRITE_TRIPS_COLLECTION_ID

VITE_APPWRITE_API_ENDPOINT

# Google Auth
VITE_GOOGLE_CLIENT_ID
VITE_GOOGLE_CLIENT_SECRET

# Sentry
VITE_SENTRY_AUTH_TOKEN
# Gemini
GEMINI_API_KEY

# Unsplash
UNSPLASH_ACCESS_KEY

```

### 🏃 Run Locally

```bash
npm run dev
```

- Navigate to: http://localhost:5173
