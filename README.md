<div align="center">

<img src="https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=next.js" alt="Next.js" />
<img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Drizzle_ORM-0.45-C3F73C?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnoiIGZpbGw9IiNDM0Y3M0MiLz48L3N2Zz4=" alt="Drizzle ORM" />
<img src="https://img.shields.io/badge/Neon_PostgreSQL-Serverless-4E4E50?style=for-the-badge&logo=neon&logoColor=white" alt="Neon" />
<img src="https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
<img src="https://img.shields.io/badge/Sandpack-CodeSandbox-151515?style=for-the-badge&logo=codesandbox&logoColor=white" alt="Sandpack" />

<br />
<br />

<img src="public/logo.png" alt="CodeBox Logo" width="120" height="120" />

# CodeBox — Learn & Practice Coding Interactively

**A game-style interactive coding platform where users learn programming concepts and write real code side-by-side — entirely in the browser.**

[Live Demo](https://codebox-gamma.vercel.app/) &nbsp;·&nbsp; [Report Bug](https://github.com/Hunterx15/codebox/issues) &nbsp;·&nbsp; [Request Feature](https://github.com/Hunterx15/codebox/issues)

<img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
<img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="PRs Welcome" />
<img src="https://img.shields.io/badge/Maintained-Yes-blue?style=flat-square" alt="Maintained" />

</div>

---

## Table of Contents

- [Project Overview](#-project-overview)
- [Problem Statement](#-problem-statement)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Folder Structure](#-folder-structure)
- [Database Design](#-database-design)
- [API Endpoints Overview](#-api-endpoints-overview)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Running Locally](#-running-locally)
- [Deployment Guide](#-deployment-guide)
- [Security Features](#-security-features)
- [Performance Optimizations](#-performance-optimizations)
- [Screenshots](#-screenshots)
- [Future Enhancements](#-future-enhancements)
- [Contributing Guidelines](#-contributing-guidelines)
- [License](#-license)
- [Author Information](#-author-information)

---

## 📖 Project Overview

**CodeBox** is a fully production-ready, interactive coding education platform built with a game-inspired learning philosophy. The platform follows a structured progression model — **Courses → Chapters → Exercises** — allowing learners to incrementally build skills through hands-on coding challenges that execute directly in the browser.

Unlike traditional tutorial platforms that rely on passive reading or video consumption, CodeBox embeds a live code editor (powered by CodeSandbox's Sandpack) into every exercise. Learners read the concept, write the code, run it instantly, and mark the exercise complete to earn XP — making the experience feel like leveling up in a game rather than grinding through a course.

The platform includes user authentication via Clerk (supporting email/password and Google OAuth), course enrollment tracking, exercise completion persistence, an XP-based gamification system, and a freemium subscription model with a pricing page powered by Clerk's Pricing Table component.

**Live Demo:** [https://codebox-gamma.vercel.app/](https://codebox-gamma.vercel.app/)

---

## 🎯 Problem Statement

Traditional coding education platforms suffer from a critical engagement gap — learners passively read documentation or watch videos without ever writing real code. This leads to low retention, weak muscle memory, and a false sense of understanding that collapses when learners face real-world problems. Key pain points CodeBox addresses:

- **No in-browser coding environment:** Most platforms require learners to set up local development environments before practicing, creating a high-friction onboarding barrier especially for absolute beginners who struggle with tooling setup.
- **Lack of progressive structure:** Free-form coding platforms like CodePen offer no guided path, leaving learners unsure of what to practice next or how concepts build upon each other.
- **Zero feedback loop:** Without structured exercises, instant execution, and completion tracking, learners have no way to measure progress or stay motivated over time.
- **Monoculture of content delivery:** Existing platforms treat all learners the same — there is no gamification layer, no XP system, and no visual progress indicators to sustain engagement through difficult concepts.

CodeBox solves all of these by combining a structured curriculum hierarchy with an embedded, zero-configuration code playground and a game-style reward system — all running in a single browser tab with zero local setup.

---

## ✨ Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | **Structured Curriculum** | Courses → Chapters → Exercises hierarchy provides a clear, progressive learning path with no ambiguity about what comes next. |
| 2 | **In-Browser Code Editor** | Powered by CodeSandbox Sandpack — learners write, run, and debug code entirely in the browser with zero local setup. |
| 3 | **Instant Code Execution** | Sandpack compiles and runs code in real-time with live preview, giving immediate feedback on every keystroke. |
| 4 | **Exercise Completion Tracking** | Each completed exercise is persisted to the database, enabling accurate progress tracking across sessions. |
| 5 | **XP & Gamification System** | Learners earn XP points for every completed exercise, with cumulative totals tracked per course and per user. |
| 6 | **Course Enrollment** | One-click enrollment with enrollment date and XP history persisted, enabling a personalized dashboard. |
| 7 | **User Dashboard** | Displays enrolled courses, progress bars, XP earned, and recommendations for new courses to explore. |
| 8 | **Clerk Authentication** | Secure, managed authentication supporting email/password sign-up, Google OAuth, and session management. |
| 9 | **Freemium Subscription Model** | Free tier provides core learning; paid plans (via Clerk Pricing Table) unlock advanced exercise libraries. |
| 10 | **Light / Dark Theme** | System-aware theme switching via `next-themes`, defaulting to dark mode for the developer-friendly aesthetic. |
| 11 | **Pixel-Inspired UI** | Custom `Jersey_10` game font and a retro-pixel design language that reinforces the "learning as a game" identity. |
| 12 | **Responsive Design** | Full mobile and tablet support with Tailwind CSS 4 utility classes and the `use-mobile` hook for adaptive layouts. |
| 13 | **Split-Pane Code Workspace** | `react-splitter-layout` provides a resizable editor/preview split view for comfortable coding on any screen size. |
| 14 | **Toast Notifications** | Non-intrusive `sonner` toast notifications for exercise completion, enrollment confirmation, and error feedback. |
| 15 | **Admin Data Seeding** | Dedicated admin API endpoints for seeding chapters and exercises into the database in bulk. |

---

## 🛠️ Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 16.1 (App Router) | Server Components reduce client-side JS; file-based routing with dynamic segments `[courseId]/[chapterId]/[exerciseslug]` maps naturally to the curriculum hierarchy. |
| **Language** | TypeScript 5 | Compile-time type safety across API routes, database schema definitions, and component props — catches bugs before runtime. |
| **UI Library** | React 18.3 | Stable concurrent features; wide ecosystem compatibility with Sandpack and Radix primitives. |
| **Styling** | Tailwind CSS 4 + `tw-animate-css` | Utility-first approach with zero runtime cost; CSS variables for theming; animation plugin for micro-interactions. |
| **Component System** | shadcn/ui (New York) + Radix UI | Copy-paste ownership model avoids version-lock dependency issues; Radix provides accessible, unstyled primitives. |
| **Icons** | Lucide React | Tree-shakeable SVG icon library with consistent stroke widths that match the clean UI aesthetic. |
| **Forms & Validation** | React Hook Form + Zod 4 | Performant form state management with schema-based validation — Zod schemas ensure type safety from API boundary to form input. |
| **Code Editor** | CodeSandbox Sandpack 2.20 | Zero-config, browser-embedded IDE with live preview — eliminates the need for backend code execution infrastructure. |
| **ORM** | Drizzle ORM 0.45 | Type-safe SQL query builder with zero runtime overhead; schema-as-code approach keeps the database layer co-located with the application. |
| **Database** | Neon PostgreSQL (Serverless) | Scale-to-zero serverless Postgres with HTTP driver — ideal for Next.js serverless functions; no connection pooling needed. |
| **Authentication** | Clerk | Managed auth provider handles session tokens, OAuth flows, user management, and the pricing/subscription UI out of the box. |
| **HTTP Client** | Axios | Interceptor support and JSON transform defaults simplify API communication from client components. |
| **Theming** | next-themes | System-aware dark/light mode with `suppressHydrationWarning` for SSR-safe theme initialization. |
| **Notifications** | Sonner | Lightweight toast library with built-in promise toasts and swipe-to-dismiss — minimal API surface. |
| **Layout** | react-splitter-layout | Resizable split-pane component for the code editor/preview workspace — keyboard-accessible and touch-friendly. |
| **Deployment** | Vercel | Native Next.js support with edge functions, automatic preview deployments per PR, and zero-config CI/CD from the `main` branch. |

---

## 🏗️ System Architecture

```mermaid
graph TB
    subgraph Client["Client Layer (Browser)"]
        UI["React UI<br/>Next.js App Router"]
        SP["Sandpack<br/>In-Browser IDE"]
        CK["Clerk JS SDK<br/>Auth Session"]
    end

    subgraph Server["Server Layer (Vercel Edge)"]
        API["Next.js API Routes<br/>REST Endpoints"]
        MW["Clerk Middleware<br/>Auth Guard"]
    end

    subgraph Data["Data Layer"]
        DR["Drizzle ORM<br/>Type-Safe Queries"]
        NEON[("Neon PostgreSQL<br/>Serverless")]
    end

    subgraph External["External Services"]
        CLERK["Clerk<br/>Auth + Users + Billing"]
        IK["ImageKit<br/>CDN Images"]
        CSB["CodeSandbox<br/>Sandpack Compiler"]
    end

    UI -->|"Axios / fetch"| API
    UI -->|"Component Embed"| SP
    UI -->|"JWT Session"| CK
    CK -->|"Token Validation"| MW
    MW -->|"Authenticated Request"| API
    API -->|"SQL Queries"| DR
    DR -->|"HTTP Driver"| NEON
    CLERK -->|"OAuth / Session"| CK
    SP -->|"Compile & Run"| CSB
    UI -->|"img tags"| IK

    style Client fill:#1a1a2e,stroke:#6C47FF,stroke-width:2px,color:#e0e0e0
    style Server fill:#16213e,stroke:#06B6D4,stroke-width:2px,color:#e0e0e0
    style Data fill:#0f3460,stroke:#C3F73C,stroke-width:2px,color:#e0e0e0
    style External fill:#1a1a2e,stroke:#F59E0B,stroke-width:2px,color:#e0e0e0
```

### Architecture Decisions

**Why Serverless PostgreSQL (Neon) over a traditional database?**
CodeBox is deployed on Vercel's serverless infrastructure. Traditional PostgreSQL requires persistent TCP connections, which don't work well with serverless functions that spin up and down. Neon's HTTP-based driver (`@neondatabase/serverless`) allows Drizzle ORM to execute queries over HTTP, eliminating the need for connection pooling and enabling cold-start times under 100ms.

**Why Sandpack over Monaco Editor or CodeMirror?**
Monaco and CodeMirror are excellent editors, but they don't execute code — they only provide syntax highlighting and editing. Sandpack wraps both the editor and a full browser-based build system (powered by CodeSandbox) that compiles and runs HTML/CSS/JS in real-time. This means learners see their code's output instantly without any backend execution infrastructure, reducing both cost and security surface area.

**Why Clerk over NextAuth or custom JWT?**
Clerk provides a complete auth solution including the pre-built sign-in/sign-up UI components, Google OAuth configuration, session management, and — critically for CodeBox — a subscription/billing pricing table component. Implementing this stack with NextAuth would require building custom UI, integrating Stripe manually, and managing user metadata. Clerk bundles all of this into a drop-in provider.

---

## 📂 Folder Structure

```
codebox/
├── app/
│   ├── layout.tsx                          # Root layout with ClerkProvider, fonts, and theme
│   ├── page.tsx                            # Landing page with Hero section
│   ├── globals.css                         # Tailwind CSS 4 base styles + CSS variables
│   ├── provider.tsx                        # ThemeProvider + UserDetailContext + Header wrapper
│   ├── favicon.ico
│   │
│   ├── (auth)/                             # Route group — Clerk-managed auth pages
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   │
│   ├── (routes)/                           # Route group — main application pages
│   │   ├── dashboard/
│   │   │   ├── page.tsx                    # User dashboard with enrolled courses & XP
│   │   │   └── _components/
│   │   │       ├── WelcomeBanner.tsx        # Greeting banner with user info
│   │   │       ├── EnrolledCourses.tsx      # List of courses user is enrolled in
│   │   │       ├── CourseProgressCard.tsx   # Progress bar card per enrolled course
│   │   │       ├── ExploreMore.tsx          # Course discovery carousel
│   │   │       ├── ExploreMoreCourse.tsx    # Individual course recommendation card
│   │   │       ├── UpgradeToPro.tsx         # CTA for subscription upgrade
│   │   │       ├── InviteFriend.tsx         # Referral invitation component
│   │   │       └── UserStatus.tsx           # User level/points display
│   │   │
│   │   ├── courses/
│   │   │   ├── page.tsx                    # All courses listing page
│   │   │   ├── _components/CourseList.tsx   # Course grid with cards
│   │   │   └── [courseId]/
│   │   │       ├── page.tsx                # Course detail: chapters list + enrollment
│   │   │       └── _components/
│   │   │           ├── CourseDetailBanner.tsx
│   │   │           ├── CourseChapters.tsx   # Accordion list of chapters
│   │   │           ├── CourseStatus.tsx     # Enrollment status badge
│   │   │           └── CommunityHelpSection.tsx
│   │   │       └── [chapterId]/
│   │   │           └── [exerciseslug]/
│   │   │               ├── page.tsx        # Exercise page: content + code editor
│   │   │               └── _components/
│   │   │                   ├── ContentSection.tsx   # Exercise description & task
│   │   │                   └── CodeEditor.tsx       # Sandpack-powered code playground
│   │   │
│   │   ├── pricing/page.tsx                # Subscription pricing page
│   │   └── contact/page.tsx                # Contact/information page
│   │
│   └── api/                                 # Next.js API Routes (REST)
│       ├── user/route.ts                   # POST — Create or fetch user record
│       ├── course/route.ts                 # GET — All courses, single course, or enrolled courses
│       ├── enroll-course/route.ts          # POST — Enroll user in a course
│       ├── exercise/route.ts               # POST — Fetch exercise data by course/chapter/exercise
│       ├── exercise/complete/route.ts      # POST — Mark exercise complete + update XP
│       └── admin/
│           ├── save-chapters/route.ts      # GET — Bulk seed chapters for a course
│           └── save-exercises/route.ts     # GET — Bulk seed exercises for a chapter
│
├── components/
│   ├── ui/                                 # shadcn/ui components (40+ primitives)
│   │   ├── button.tsx, card.tsx, dialog.tsx, tabs.tsx
│   │   ├── progress.tsx, badge.tsx, accordion.tsx
│   │   ├── carousel.tsx, separator.tsx, tooltip.tsx
│   │   └── ... (full shadcn/ui library)
│   └── Header.tsx                          # Global navigation header
│
├── config/
│   ├── schema.tsx                          # Drizzle ORM table definitions (6 tables)
│   └── db.tsx                              # Neon HTTP database client instance
│
├── context/
│   └── UserDetailContext.tsx               # React Context for global user state
│
├── hooks/
│   └── use-mobile.ts                       # Custom hook for responsive breakpoints
│
├── lib/
│   └── utils.ts                            # cn() utility (clsx + tailwind-merge)
│
├── public/                                  # Static assets (logos, images, GIFs, SVGs)
├── drizzle.config.ts                       # Drizzle Kit migration configuration
├── next.config.ts                          # Next.js config (ImageKit domain whitelist)
├── tsconfig.json                           # TypeScript strict mode configuration
├── components.json                         # shadcn/ui project configuration
├── postcss.config.mjs                      # PostCSS with Tailwind CSS 4 plugin
└── package.json                            # Dependencies and scripts
```

---

## 🗄️ Database Design

```mermaid
erDiagram
    users {
        integer id PK "Auto-increment"
        varchar name "NOT NULL"
        varchar email "UNIQUE, NOT NULL"
        integer points "DEFAULT 0"
        varchar subscription "Free / Pro"
    }

    courses {
        integer id PK "Auto-increment"
        integer courseId "UNIQUE, NOT NULL"
        varchar title "NOT NULL"
        varchar desc "NOT NULL"
        varchar bannerImage "NOT NULL"
        varchar level "DEFAULT 'Beginner'"
        varchar tags "Comma-separated"
        varchar editorType "html / python / etc."
    }

    courseChapters {
        integer id PK "Auto-increment"
        integer chapterId "Chapter order index"
        integer courseId FK "→ courses.courseId"
        varchar name "Chapter title"
        varchar desc "Chapter description"
        json exercises "Array of exercise metadata"
    }

    exercise {
        integer id PK "Auto-increment"
        integer courseId FK "→ courses.courseId"
        integer chapterId FK "→ courseChapters.chapterId"
        varchar exerciseId "Slug-based identifier"
        varchar exerciseName "Display name"
        json exercisesContent "Content, task, hint, starter code, regex"
    }

    enrollCourse {
        integer id PK "Auto-increment"
        integer courseId FK "→ courses.courseId"
        varchar userId FK "→ users.email"
        timestamp enrolledDate "DEFAULT now()"
        integer xpEarned "Accumulated XP"
    }

    completedExercise {
        integer id PK "Auto-increment"
        integer courseId FK "→ courses.courseId"
        integer chapterId FK "→ courseChapters.chapterId"
        integer exerciseId "Exercise index (1-based)"
        varchar userId FK "→ users.email"
    }

    users ||--o{ enrollCourse : "enrolls in"
    users ||--o{ completedExercise : "completes"
    courses ||--o{ courseChapters : "contains"
    courses ||--o{ enrollCourse : "tracked in"
    courses ||--o{ exercise : "has exercises in"
    courseChapters ||--o{ exercise : "contains"
```

### Design Notes

- **Six normalized tables** with clear foreign key relationships through application-level joins (Drizzle ORM `eq()` / `and()` conditions).
- **`exercise.exercisesContent`** stores a JSON blob containing the exercise's instructional content (`content`, `task`, `hint`), starter code files (`starterCode`), a validation regex for auto-grading (`regex`), expected output, and hint XP penalty — this denormalized approach avoids a separate `exercise_content` table while keeping all exercise data in a single row fetch.
- **`users.subscription`** is a simple varchar (not a separate table) because Clerk manages the actual subscription state; this column stores the cached display label for quick dashboard rendering.
- **`completedExercise.exerciseId`** is an integer (1-based index within the chapter's exercise array) rather than a slug — this matches Sandpack's array indexing and simplifies the completion check logic.

---

## 🔌 API Endpoints Overview

```mermaid
sequenceDiagram
    participant U as Browser (User)
    participant A as Next.js API Route
    participant C as Clerk Auth
    participant D as Neon PostgreSQL

    Note over U,D: User visits site for the first time
    U->>C: Sign Up / Sign In (Google OAuth)
    C-->>U: JWT Session Token
    U->>A: POST /api/user
    A->>C: Verify JWT → currentUser()
    C-->>A: User object (email, name)
    A->>D: SELECT * FROM users WHERE email = ?
    D-->>A: No record found
    A->>D: INSERT INTO users (name, email, points) VALUES (...)
    D-->>A: New user record
    A-->>U: { id, name, email, points: 0 }

    Note over U,D: User browses courses
    U->>A: GET /api/course
    A->>D: SELECT * FROM courses ORDER BY id ASC
    D-->>A: All courses
    A-->>U: [{ courseId, title, bannerImage, level, tags }]

    Note over U,D: User enrolls in a course
    U->>A: POST /api/enroll-course { courseId: 2 }
    A->>C: Verify JWT
    A->>D: INSERT INTO enrollCourse (courseId, userId, xpEarned) VALUES (...)
    A-->>U: Enrollment confirmed

    Note over U,D: User opens an exercise
    U->>A: POST /api/exercise { courseId, chapterId, exerciseId }
    A->>D: SELECT from courses, courseChapters, exercise, completedExercise
    A-->>U: { exerciseData, completedExercise[], editorType }

    Note over U,D: User completes an exercise
    U->>A: POST /api/exercise/complete { courseId, chapterId, exerciseId, xpEarned }
    A->>D: INSERT INTO completedExercise
    A->>D: UPDATE enrollCourse SET xpEarned = xpEarned + ? WHERE courseId = ?
    A->>D: UPDATE users SET points = points + ? WHERE email = ?
    A-->>U: { success: true }
    U->>U: Toast: "Exercise Completed!"
```

### Endpoint Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/user` | Clerk JWT | Creates a new user record on first visit or returns the existing one. Uses `currentUser()` to extract email from the Clerk session. |
| `GET` | `/api/course` | Clerk JWT | Returns all courses when called without params. With `?courseid=<id>`, returns a single course with its chapters, enrollment status, and completed exercises. With `?courseid=enrolled`, returns all enrolled courses with aggregated progress (total vs. completed exercises, XP earned). |
| `POST` | `/api/enroll-course` | Clerk JWT | Enrolls the authenticated user in a course. Body: `{ courseId }`. Initializes `xpEarned` to 0. |
| `POST` | `/api/exercise` | Clerk JWT | Fetches exercise data for a specific exercise within a course/chapter. Body: `{ courseId, chapterId, exerciseId }`. Returns exercise content, starter code, editor type, and already-completed exercises in that chapter. |
| `POST` | `/api/exercise/complete` | Clerk JWT | Marks an exercise as complete and atomically increments both the course's `xpEarned` and the user's total `points` using SQL expressions. Body: `{ courseId, chapterId, exerciseId, xpEarned }`. |
| `GET` | `/api/admin/save-chapters` | Clerk JWT | Seeds all chapters for a course from a hardcoded data array. Intended for one-time admin initialization (courseId is configured in-route). |
| `GET` | `/api/admin/save-exercises` | Clerk JWT | Seeds all exercises for a chapter from a hardcoded data array. Each exercise includes content, task, hint, starter code, validation regex, and XP values. |

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** 18.17 or later (LTS recommended)
- **npm** 9+ (or pnpm / yarn)
- A [Clerk](https://clerk.com/) account with a published application
- A [Neon](https://neon.tech/) PostgreSQL database

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Hunterx15/codebox.git
cd codebox

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local
# (See Environment Variables section below for all required keys)

# 4. Generate Drizzle migrations and push schema to Neon
npx drizzle-kit push

# 5. (Optional) Seed course data via admin endpoints
# Start the dev server first, then visit:
#   http://localhost:3000/api/admin/save-chapters
#   http://localhost:3000/api/admin/save-exercises

# 6. Start the development server
npm run dev
```

The application will be available at **http://localhost:3000**.

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root with the following variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Clerk frontend publishable key (starts with `pk_test_`). Found in Clerk Dashboard → API Keys. |
| `CLERK_SECRET_KEY` | Yes | Clerk backend secret key (starts with `sk_test_`). Used by server-side `currentUser()` calls. |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | No | Custom sign-in route path. Default: `/sign-in`. |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | No | Custom sign-up route path. Default: `/sign-up`. |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | No | Redirect destination after successful sign-in. Default: `/`. |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | No | Redirect destination after successful sign-up. Default: `/`. |
| `DATABASE_URL` | Yes | Neon PostgreSQL connection string. Format: `postgresql://user:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require`. |

> **Security Note:** Never commit `.env.local` to version control. The `.gitignore` is pre-configured to exclude all `.env*` files.

---

## 💻 Running Locally

```bash
# Development mode with hot reload
npm run dev

# Production build (for local testing)
npm run build
npm start

# Type-check without emitting
npx tsc --noEmit

# Push schema changes to the database
npx drizzle-kit push

# Generate SQL migration files (for production)
npx drizzle-kit generate
npx drizzle-kit migrate
```

### Development Workflow

1. Run `npm run dev` to start the Next.js dev server with Turbopack.
2. Sign in via the Clerk sign-in page at `/sign-in` (create a Clerk account if needed).
3. On first sign-in, the app automatically creates your user record via `POST /api/user`.
4. Browse courses on the landing page, enroll in a course, and navigate to an exercise.
5. The Sandpack editor loads with starter code — write your solution and click **Run Code**.
6. Click **Mark Completed** to persist progress and earn XP.

---

## 🌐 Deployment Guide

### Vercel (Recommended)

CodeBox is optimized for Vercel deployment with zero configuration:

1. **Push to GitHub** — Ensure your code is on the `main` branch.
2. **Import on Vercel** — Go to [vercel.com/new](https://vercel.com/new), select the `Hunterx15/codebox` repository.
3. **Set Environment Variables** — In the Vercel project settings, add all variables from the [Environment Variables](#-environment-variables) section.
4. **Deploy** — Vercel automatically detects Next.js, installs dependencies, builds, and deploys.

### Deployment Architecture

```mermaid
graph LR
    subgraph CDN["Vercel Edge Network"]
        EDC["Edge Cache<br/>(Static Assets)"]
        SSR["Serverless Functions<br/>(API Routes)"]
    end

    subgraph Auth["Clerk Infrastructure"]
        AUTH_UI["Sign-In / Sign-Up UI"]
        JWT["JWT Verification"]
        BILLING["Subscription Billing"]
    end

    subgraph DB["Neon Infrastructure"]
        PG["Serverless Postgres<br/>(Scale-to-Zero)"]
        POOL["Connection Router<br/>(HTTP Driver)"]
    end

    subgraph IDE["CodeSandbox"]
        COMPILER["Sandpack Compiler<br/>(Browser WASM)"]
    end

    USER["User Browser"] -->|"Static Assets"| EDC
    USER -->|"API Calls"| SSR
    USER -->|"Auth Flow"| AUTH_UI
    AUTH_UI -->|"JWT"| JWT
    JWT -->|"Session Validation"| SSR
    SSR -->|"SQL over HTTP"| POOL
    POOL -->|"Query"| PG
    USER -->|"Code Execution"| COMPILER

    style CDN fill:#1a1a2e,stroke:#06B6D4,stroke-width:2px,color:#e0e0e0
    style Auth fill:#1a1a2e,stroke:#6C47FF,stroke-width:2px,color:#e0e0e0
    style DB fill:#1a1a2e,stroke:#C3F73C,stroke-width:2px,color:#e0e0e0
    style IDE fill:#1a1a2e,stroke:#151515,stroke-width:2px,color:#e0e0e0
```

### Deployed URLs

| Service | URL |
|---------|-----|
| **Frontend (Live)** | [https://codebox-gamma.vercel.app/](https://codebox-gamma.vercel.app/) |
| **Backend API** | Same origin — `/api/*` routes served by Vercel serverless functions |

---

## 🔒 Security Features

- **Authentication**: All API routes are protected by Clerk's `currentUser()` middleware. Unauthenticated requests to `/api/course`, `/api/user`, `/api/enroll-course`, `/api/exercise`, and `/api/exercise/complete` will fail gracefully with a `401`-equivalent response.
- **No Raw SQL Injection**: Drizzle ORM parameterizes all queries — user input is never interpolated into raw SQL strings.
- **Environment Variable Isolation**: All secrets (`CLERK_SECRET_KEY`, `DATABASE_URL`) are server-side only. Clerk's publishable key is the only client-exposed variable, which is by design.
- **No Client-Side Database Credentials**: The Neon `DATABASE_URL` is exclusively used in server-side API routes and the Drizzle config. It is never bundled into the client JavaScript.
- **`.env*` Exclusion**: The `.gitignore` explicitly blocks all `.env*` files from version control.
- **Image Domain Whitelist**: `next.config.ts` restricts `next/image` to `ik.imagekit.io`, preventing arbitrary external image sources.

---

## ⚡ Performance Optimizations

- **Server Components by Default**: The Next.js App Router serves all pages as React Server Components, sending zero JavaScript for static content to the client until interactive islands are needed.
- **Neon HTTP Driver**: Avoids TCP connection overhead entirely — every database query is a single HTTP request, ideal for serverless cold starts.
- **Batched Data Fetching**: The enrolled courses endpoint (`GET /api/course?courseid=enrolled`) fetches all courses, chapters, and completed exercises in just 3 queries (using `inArray()`) instead of N+1 per-course queries.
- **Atomic XP Updates**: Exercise completion uses SQL expressions (`points = points + ?`) for atomic, race-condition-free XP increment — no read-then-write cycle.
- **Sandpack Client-Side Execution**: Code compilation and execution happen entirely in the browser via WebAssembly, offloading compute from the server and eliminating backend code execution costs.
- **Image CDN**: All course banner images are served through ImageKit CDN with optimized formats and caching headers.
- **Tailwind CSS 4**: Pure-CSS engine with no JavaScript runtime — styles are resolved at build time, not in the browser.
- **Font Optimization**: Next.js `next/font/google` automatically self-hosts Geist Sans, Geist Mono, Jersey 10, and Inter — zero layout shift from font loading.

---

## 📸 Screenshots

| View | Description |
|------|-------------|
| Landing Page | Hero section with animated GIF background, call-to-action buttons, and course discovery |
| Course Listing | Grid layout displaying all available courses with level badges and tags |
| Course Detail | Banner image, chapter accordion, enrollment button, and community help section |
| Exercise Page | Split-pane layout with content section on the left and Sandpack code editor + live preview on the right |
| Dashboard | Welcome banner, enrolled courses with progress bars, XP tracker, and upgrade prompts |
| Pricing Page | Clerk-powered subscription pricing table comparing Free vs. Pro tiers |

> Screenshots can be added by placing images in `/public/screenshots/` and referencing them here.

---

## 🔮 Future Enhancements

- **AI-Powered Hints**: Integrate an LLM to provide contextual, adaptive hints when learners are stuck — moving beyond static hint text to dynamic, code-aware suggestions.
- **Collaborative Coding**: Real-time multiplayer code sessions using WebSockets, allowing learners to pair-program on exercises.
- **Custom Course Authoring**: A teacher/admin dashboard for creating and publishing custom courses, chapters, and exercises without code.
- **Exercise Auto-Grading**: Expand the regex-based validation to support AST-level code analysis and test-case-driven grading for more accurate completion verification.
- **Certificate Generation**: Issue verifiable completion certificates (PDF) when a learner finishes all chapters in a course.
- **Community Forum**: Threaded discussion boards per course/chapter where learners can ask questions and share solutions.
- **Mobile-First PWA**: Add service worker caching and manifest for offline exercise access on mobile devices.
- **Analytics Dashboard**: Per-user learning analytics with streak tracking, time-spent metrics, and weak-area identification.
- **Multi-Language Support**: Expand beyond HTML/Python to include JavaScript, CSS, React, and SQL courses with language-specific editor configurations.
- **Gamification Expansion**: Achievement badges, leaderboards, daily challenges, and streak rewards to increase retention.

---

## 🤝 Contributing Guidelines

Contributions to CodeBox are welcome and appreciated. Please follow these steps:

1. **Fork the repository** and create your feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** with clear, documented code. Follow the existing code style (TypeScript strict mode, Tailwind utility classes, shadcn/ui components).

3. **Test your changes** locally:
   ```bash
   npm run dev
   # Verify the feature works end-to-end in the browser
   # Run type checking
   npx tsc --noEmit
   ```

4. **Commit with descriptive messages**:
   ```bash
   git commit -m "feat: add exercise auto-grading with regex validation"
   ```

5. **Push and open a Pull Request** against the `main` branch. Include a clear description of the change, screenshots if applicable, and any relevant issue references.

### Branch Naming Convention

| Prefix | Purpose |
|--------|---------|
| `feature/` | New features or enhancements |
| `fix/` | Bug fixes |
| `docs/` | Documentation changes |
| `refactor/` | Code refactoring without behavior changes |
| `chore/` | Dependency updates, config changes |

---

## 📜 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Hunterx15

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 Author Information

| | |
|---|---|
| **Author** | Hunterx15 |
| **GitHub** | [github.com/Hunterx15](https://github.com/Hunterx15) |
| **Project** | [github.com/Hunterx15/codebox](https://github.com/Hunterx15/codebox) |
| **Live Demo** | [codebox-gamma.vercel.app](https://codebox-gamma.vercel.app/) |

---

<div align="center">

**Built with ❤️ by Hunterx15 — Making coding education interactive, one exercise at a time.**

</div>