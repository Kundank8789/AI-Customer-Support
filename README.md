🤖 AI Customer Support SaaS Platform

A production-ready, multi-tenant AI chatbot platform built with Next.js, MongoDB, and Scalekit.
Designed for startups, SaaS companies, agencies, and modern web businesses.

🚀 Overview

AI Customer Support is a full-stack SaaS platform that enables businesses to deploy an intelligent, embeddable chatbot on their websites.

It includes:

A modern admin dashboard

Organization-based multi-tenancy

Secure authentication

AI-powered response generation

MongoDB-backed data persistence

Fully serverless deployment on Vercel

This project is built with real-world SaaS architecture principles and production-ready patterns.

🌍 Live Demo

🔗 Application:
https://ai-customer-support-navy.vercel.app/

<img width="1920" height="1080" alt="Screenshot 2026-02-25 220655" src="https://github.com/user-attachments/assets/10dc8761-a482-4bb0-836f-a8e35d4cfb8d" />

<img width="1920" height="1080" alt="Screenshot 2026-02-25 220717" src="https://github.com/user-attachments/assets/dbd902ae-edd7-44c6-a077-953e0488118e" />

<img width="1920" height="1080" alt="Screenshot 2026-02-25 220741" src="https://github.com/user-attachments/assets/ccd09137-b6ff-4e3d-b9fd-a21c972a0c42" />

🔗 Repository:
https://github.com/Kundank8789/AI-Customer-Support

✨ Core Features
🤖 AI Chatbot Engine

AI-generated responses

Context-aware conversations

Scalable serverless API architecture

💬 Embeddable Chat Widget

Script-based integration

Plug-and-play on any website

Customizable per organization

🏢 Multi-Tenant SaaS Architecture

Multiple organizations

Isolated data per tenant

Organization-specific chatbot configurations

🔐 Authentication & Organization Management

Secure login via Scalekit

Organization-based access control

Protected dashboard & APIs

🗂 Secure Data Storage

MongoDB database

Stores users, chats, and configurations

Structured schema-based modeling

🎨 Modern SaaS Dashboard

Built using Next.js App Router

Clean and responsive UI

Designed for production use

🛠 Tech Stack
Layer	Technology
Frontend	Next.js (App Router)
Backend	Next.js API Routes
Database	MongoDB
Authentication	Scalekit
AI Integration	Google GenAI
Styling	Tailwind CSS
Deployment	Vercel
Language	TypeScript
🧠 SaaS Architecture Design

This project follows modern SaaS best practices:

Organization-based multi-tenancy

Serverless backend architecture

Secure environment configuration

Centralized database access layer

Reusable embeddable widget system

Architecture Flow

User authenticates via Scalekit

User belongs to an organization

Organization config stored in MongoDB

Embedded widget sends chat request

API route processes request

AI generates response

Chat history stored securely

⚙️ Local Development Setup
1️⃣ Clone the Repository
git clone https://github.com/Kundank8789/AI-Customer-Support.git
cd AI-Customer-Support
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment Variables

Create .env.local in root:

MONGODB_URL=your_mongodb_atlas_connection_string
SCALEKIT_ENVIRONMENT_URL=your_scalekit_env_url
SCALEKIT_CLIENT_ID=your_scalekit_client_id
SCALEKIT_CLIENT_SECRET=your_scalekit_client_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000

For production:

NEXT_PUBLIC_APP_URL=https://your-vercel-app.vercel.app
4️⃣ Run Development Server
npm run dev

Visit:

http://localhost:3000
☁️ Production Deployment (Vercel)

Push code to GitHub

Import project into Vercel

Add environment variables in Vercel dashboard

Deploy

Important:

Use MongoDB Atlas (cloud database)

Allow network access in MongoDB Atlas

Set Node version to 18.x

💼 Business & SaaS Use Cases

SaaS customer support automation

Startup landing pages

E-commerce support bots

Agency client deployments

Portfolio chatbot assistant

AI chatbot SaaS product launch

📈 Why This Project Stands Out

This is not just a chatbot demo.

It demonstrates:

Multi-tenant system design

Authentication & org-based access control

Scalable SaaS architecture

Production-ready database modeling

AI integration in real-world workflow

Full-stack Next.js expertise

This makes it ideal for:

Portfolio showcase

SaaS MVP foundation

Startup prototype

Full-stack engineering demonstration

🔒 Security Considerations

Environment variables properly isolated

MongoDB connection secured

Organization-based access control

API routes protected via session validation

🧑‍💻 Author

Built by Kundan Kumar

If you found this project helpful, consider ⭐ starring the repository.
