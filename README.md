# Crumb & Table — Local Dining & Bakery Discovery Platform

> **Tagline:** “Discover Something Delicious Around You.”

Crumb & Table is a responsive web application and discovery platform specializing in artisan bakeries, French patisseries, dessert lounges, cake studios, craft chocolatiers, and neighborhood coffee bakeries.

---

## 🥐 Project Philosophy & Architecture

This application is engineered as a **local food discovery marketplace & editorial guide**, focusing on food photography, map discovery, multi-criteria filtering, item menus, review submissions, and lightweight table reservations.

### Key Architectural Decisions:
- **No Home-2, No Customer/Admin Dashboard**: Kept lean, editorial, and focused on discovery.
- **Frontend-Ready Authentication**: Local demo session management (`auth.js`) supporting login, register, forgot password, and state changes for reviews and favorites.
- **Full Offline State & Favorites**: Saved bakeries, menu items, and editorial articles persisted in `localStorage` (`favorites.js`, `recommendations.js`).
- **Leaflet.js Map Synchronization**: Bidirectional synchronization between custom interactive map markers and the discovery list (`map.js`).
- **Theme Engine**: Light Warm Cream & Dark Espresso mode with zero flash of unstyled content and OS preference detection (`theme.js`).

---

## 📁 File Structure

```
Local-Dining-Restaurant-Discovery/
│
├── index.html                      # Editorial Homepage (Hero, Trending, Categories, Map preview, Guides)
├── discover.html                   # Multi-filter Discovery Marketplace (Sidebar/drawer, Sort, Grid)
├── venue-details.html              # Comprehensive Venue Profile (Hero gallery, Menu preview, Reviews, Hours)
├── menu.html                       # Item-by-Item Menu Explorer (Dietary tags, Price sorting, Search)
├── map.html                        # Split-screen Leaflet Map Explorer (Custom pins, list sync)
├── categories.html                 # Visual Category Taxonomy
├── category-details.html           # Dynamic Category Result View
├── guides.html                     # Editorial Magazine Library
├── guide-details.html              # In-depth Article with inline venue cards
├── saved.html                      # Wishlist & Saved Places, Menu Items, Reading List
├── booking.html                    # Lightweight Table Reservation Flow
├── reservation-confirmation.html   # Reservation Receipt & Add-to-Calendar simulation
├── about.html                      # Manifesto, Discovery Criteria, Editorial Standards, FAQs
├── contact.html                    # Inquiries & Bakery Owner Onboarding Form
├── login.html                      # Luxury Authentication
├── signup.html                     # Account Creation with City & Dietary selection
├── forgot-password.html            # Password Reset Flow with confirmation state
├── 404.html                        # Food-themed 404 Error Page
├── coming-soon.html                # New Cities & Expansions Preview
│
├── assets/
│   ├── css/
│   │   ├── style.css               # Design tokens, variables (light/dark), typography, resets
│   │   ├── components.css          # Navbar, cards, search overlay, badges, modals, toasts, footer
│   │   └── responsive.css          # Multi-breakpoint refinements (320px to 2560px+)
│   │
│   └── js/
│       ├── venues-data.js          # Realistic mock dataset (Bakeries, menus, coordinates, ratings)
│       ├── theme.js                # Theme switcher (Warm Cream / Dark Espresso)
│       ├── notifications.js        # Sleek toast notification system
│       ├── auth.js                 # Authentication state & UI sync
│       ├── favorites.js            # Save/favorite manager with localStorage
│       ├── search.js               # Global search overlay with live filtering & shortcuts ('/')
│       ├── filters.js              # Multi-criteria discovery filter engine
│       ├── venues.js               # Venue profile loader & gallery
│       ├── map.js                  # Leaflet map explorer engine
│       ├── menu.js                 # Menu explorer catalog engine
│       ├── reviews.js              # Rating calculations & review submission
│       ├── booking.js              # Reservation request builder & validator
│       ├── recommendations.js      # Personalized recommendations & saved page renderer
│       └── main.js                 # App initialization, header scroll, newsletter listeners
│
└── README.md
```

---

## 🎨 Design System & Color Palette

### Light Mode (Warm Editorial)
- **Primary Background**: Warm Cream / Porcelain (`#FAFAF7`, `#F4EFE6`)
- **Surfaces**: Crisp White (`#FFFFFF`) with subtle warm borders (`rgba(74, 51, 38, 0.08)`)
- **Espresso Accent**: `#2A170F`
- **Soft Terracotta Accent**: `#C86D51` / `#B45B3F`
- **Butter Gold**: `#D4A359`
- **Muted Sage**: `#8A9A86`

### Dark Mode (Dark Espresso)
- **Primary Background**: Dark Roasted Espresso (`#0F0A08`, `#17100D`)
- **Surfaces**: Dark Cocoa (`#1E1510`, `#281C16`)
- **Cream Text**: `#F7EFE9`
- **Terracotta Accent**: `#D97757`
- **Subtle Gold**: `#DFB16E`

### Typography
- **Display Headlines**: `DM Serif Display` / `Cormorant Garamond`
- **User Interface & Body**: `Manrope` / `Outfit` / `Inter`

---

## 🚀 Key Features

1. **Global Search Engine (`/` or `Ctrl+K`)**: Instant overlay searching across venues, categories, and articles with keyboard navigation.
2. **Interactive Multi-Filter Discovery**: Filter by categories, dietary options (Vegetarian, Eggless, Vegan, Gluten-Free), minimum ratings (4.8+, 4.5+), price tiers, open now status, and amenities.
3. **Synchronized Map & List**: Leaflet map pins update and focus seamlessly when interacting with the venue list.
4. **Community Reviews**: Interactive 5-star rating selector and persistent review submissions.
5. **Lightweight Reservation**: Table request wizard with live summary calculations and confirmation screen.
6. **Zero Broken Links**: All navigation items, categories, buttons, and badges link directly to functioning pages.
