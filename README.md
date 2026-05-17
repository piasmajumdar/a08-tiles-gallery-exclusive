# 🧱 Tiles Gallery

A modern and responsive tile showcase web application built with Next.js App Router.  
Users can explore beautiful tile collections, search tiles, view detailed information, and manage their profile securely with authentication.

---

## 🌐 Live Website

🔗 Live URL: https://a08-tiles-gallery-exclusive.vercel.app/
---

## 📌 Project Purpose

The purpose of this project is to create a visually appealing and responsive tile gallery platform where users can:

- Browse aesthetic tile collections
- Search and explore tile designs
- View detailed tile information
- Authenticate securely
- Manage personal profile information

This project was developed for **Assignment Category: category-A8-Apple**.

---

# ✨ Features

## 🏠 Home Page
- Beautiful hero banner with CTA button
- Animated marquee section
- Featured tiles section
- Responsive modern UI

## 🖼️ Tiles Gallery
- Display all tiles dynamically from JSON Server
- Search tiles by title/category
- Responsive tile card layout

## 🔍 Tile Details Page
- Large tile preview image
- Creator information
- Style description
- Tags and design categories
- Protected private route

## 🔐 Authentication
- Email & Password Login/Register
- Google Authentication
- Secure authentication using BetterAuth
- MongoDB Adapter integration
- Toast/Error handling

## 👤 My Profile
- View logged-in user profile
- Update name and profile image
- Private route protection

## 🎨 UI & UX
- Fully responsive design
- Modern aesthetic layout
- Smooth animations
- SwiperJS slider integration
- Animate.css effects

## ⚙️ Additional Functionalities
- Loading spinner during data fetching
- Custom 404 Not Found page
- Environment variable protection
- Route protection for private pages

---

# 🚦 Route Permissions

| Route | Access |
|------|------|
| `/` | Public |
| `/all-tiles` | Public |
| `/login` | Public |
| `/register` | Public |
| `/tile/[id]` | Private |
| `/my-profile` | Private |

---

# 🛠️ Technologies Used

## Frontend
- Next.js 15 (App Router)
- React
- Tailwind CSS
- DaisyUI
- HeroUI

## Authentication
- BetterAuth
- MongoDB Adapter

## Backend / Database
- MongoDB
- JSON Server

## Animation & UI Libraries
- Animate.css
- SwiperJS
- React Icons

---

# 📦 NPM Packages Used

```bash
npm install next react react-dom

npm install tailwindcss @tailwindcss/postcss postcss

npm install daisyui

npm install @heroui/react

npm install better-auth

npm install mongodb

npm install react-icons

npm install swiper

npm install animate.css

npm install react-fast-marquee

npm install sonner

npm install axios
```

---

# ⚙️ Tailwind CSS Setup

## Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

## Configure `postcss.config.mjs`

```js
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

## Configure `globals.css`

```css
@import "tailwindcss";
@plugin "daisyui";
@import "animate.css";
```

---

# 🌼 DaisyUI Setup

## Install DaisyUI

```bash
npm install daisyui
```

## Add DaisyUI Plugin

```css
@plugin "daisyui";
```

---

# 📂 JSON Data Structure

```json
{
            "id": "tile_001",
            "title": "Ceramic Blue Tile",
            "description": "Premium ceramic tile with glossy blue glaze finish",
            "image": [
                "https://images.pexels.com/photos/7245524/pexels-photo-7245524.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1690983321651-2510fe685fc6?w=400&h=400&fit=crop&auto=format&q=80",
                "https://images.unsplash.com/photo-1614598632980-35ee54daa5b9?w=400&h=400&fit=crop&auto=format&q=80",
                "https://images.unsplash.com/photo-1523350165414-082d792c4bcc?w=400&h=400&fit=crop&auto=format&q=80"
            ],
            "category": "ceramic",
            "price": 45.99,
            "currency": "USD",
            "dimensions": "60x60 cm",
            "material": "Ceramic",
            "inStock": true,
            "creator": "ArtisanCeramics Co.",
            "styleDescription": "A vibrant glossy blue ceramic tile that adds a bold, Mediterranean-inspired charm to kitchens and bathrooms.",
            "tags": [
                "Glossy",
                "Blue",
                "Ceramic",
                "Mediterranean",
                "Wall Tile"
            ],
            "style": "Mediterranean",
            "finish": "Glossy"
        }
```

---

# 🔑 Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

# 🚀 Installation & Setup

## Clone the Repository

```bash
git clone https://github.com/piasmajumdar/a08-tiles-gallery-exclusive
```

## Navigate to Project Folder

```bash
cd tiles-gallery
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 📱 Responsiveness

The website is optimized for:

- 📱 Mobile Devices
- 💻 Laptops
- 🖥️ Desktop Screens
- 📟 Tablets

---

# 🎯 Challenge Features Implemented

✅ My Profile Page  
✅ Update User Information  
✅ Google Login  
✅ SwiperJS Integration  
✅ Animate.css Animations  
✅ Protected Routes  
✅ Custom Not Found Page  

---

# 📸 Screenshots
<img width="1913" height="927" alt="image" src="https://github.com/user-attachments/assets/ccead698-1318-41f4-b8d3-e32a8a1ae274" />
<img width="1915" height="923" alt="image" src="https://github.com/user-attachments/assets/69d5f943-4828-4b88-8ad0-dc9167fa9893" />
<img width="1915" height="925" alt="image" src="https://github.com/user-attachments/assets/ecfdd98f-24a7-4ef9-8ac5-17fb76eb75e4" />


---

# 👨‍💻 Developer

Developed by **Pias Majumdar**

---

# 📄 License

This project is created for educational purposes only.
