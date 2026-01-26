# 🚀 CodeBox – Learn to Code Like a Game

**CodeBox** is a **game-style learning & coding platform** where users **learn concepts and write code side-by-side**.
The platform is structured as **Courses → Chapters → Exercises**, making learning interactive, progressive, and engaging.

🌐 **Live Demo:**
👉 [https://codebox-gamma.vercel.app/](https://codebox-gamma.vercel.app/)

---

## 🎮 How CodeBox Works

1. Choose a **Course**
2. Progress through **Chapters**
3. Solve **Exercises**
4. Write & run code **directly in the browser**
5. Track progress and unlock more content

Learning feels like a game — level by level.

---

## ✨ Features

* 📚 **Course-based learning**

  * Courses → Chapters → Exercises
* 🧩 **Learn & code together**

  * In-browser coding using **Sandpack**
* ⚡ Live code execution & instant feedback
* 🎮 Game-like progression system
* 📊 **Progress tracking**

  * Track completed chapters & exercises
* 🆓 Free learning content
* 💎 Paid plans unlock **more exercises**
* 🔐 Secure authentication with **Clerk**

  * Email & Password
  * Google Sign-In
* 💳 Pricing & subscriptions via **Clerk Pricing Table**
* 🎨 Clean, pixel-inspired UI
* 🌗 Light / Dark theme support
* 🚀 Fully deployed & production-ready

---

## 🛠️ Tech Stack

### Frontend

* **Next.js (App Router)**
* React 19
* TypeScript
* Tailwind CSS
* shadcn/ui
* Radix UI
* **Sandpack (CodeSandbox)**
* Axios
* Lucide Icons

### Backend / APIs

* Next.js API Routes
* Drizzle ORM
* Neon (PostgreSQL)
* REST-style APIs

### Authentication & Payments

* Clerk Authentication
* Google OAuth
* Clerk Pricing Table

---

## ⚡ Coding Experience

* Powered by **Sandpack**
* Code runs **entirely in the browser**
* No setup required for learners
* Perfect for beginners & intermediates

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Hunterx15/codebox.git
cd codebox
```

---

### Install Dependencies

```bash
npm install
```

---

### Run the Development Server

```bash
npm run dev
```

App runs on:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env.local` file:

```env
# Clerk Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Clerk Redirects
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Database
DATABASE_URL=
```

---

## 📂 Project Structure

```
codebox/
│── app/
│   ├── api/
│   ├── (routes)/
│   │   ├── courses/
│   │   │   └── [courseId]/
│   │   │       └── [chapterId]/
│   │   │           └── [exerciseSlug]/
│   │   ├── pricing/
│   │   └── contact/
│   ├── sign-in/
│   ├── sign-up/
│   └── layout.tsx
│
│── components/
│── lib/
│── public/
│── styles/
│── drizzle/
│── README.md
```

---

## 🆓 Free vs 💎 Paid Features

| Feature                      | Free | Paid |
| ---------------------------- | ---- | ---- |
| Access to courses            | ✅    | ✅    |
| In-browser coding (Sandpack) | ✅    | ✅    |
| Progress tracking            | ✅    | ✅    |
| Basic exercises              | ✅    | ✅    |
| Advanced exercises           | ❌    | ✅    |
| Full exercise library        | ❌    | ✅    |

---

## 🎯 Target Audience

* Beginners learning to code
* Students moving to **intermediate level**
* Self-learners who prefer **hands-on practice**
* Anyone who enjoys **game-style learning**

---

## 🤝 Contributing

Contributions are welcome!

* Report bugs
* Suggest improvements
* Submit pull requests

---

## 📜 License

MIT License © 2025
**Author:** Hunterx15
