# Your Energy - Fitness Web Application 🏋️‍♀️

## 📋 Project Description

**Your Energy** is a modern web application for fitness enthusiasts and healthy lifestyle advocates. This project was created as a course work and represents a fully functional platform for searching, viewing, and saving physical exercises.

### Main Goal

To provide users with a convenient tool for:
- Searching for physical exercises by various categories
- Creating a personal collection of favorite exercises
- Getting motivational quotes from famous athletes
- Tracking the recommended daily physical activity norm

## ✨ Features

### 🔍 Exercise Search and Filtering
- **Three types of filters:**
  - By muscle groups (Muscles)
  - By body parts (Body parts)
  - By equipment (Equipment)
- Search exercises by name
- Results pagination

### 📚 Exercise Catalog
- Detailed information about each exercise
- Video demonstration of execution
- Description of technique
- Target muscles and required equipment
- Difficulty level and calorie count

### ⭐ Favorites System
- Add exercises to favorites
- Separate page for viewing saved exercises
- Remove from favorites

### 💬 Quote of the Day
- Motivational quotes from famous athletes
- Automatic updates from API

### 📊 Information Cards
- Daily sports activity norm (110 minutes)
- WHO recommendations on physical activity

### 📧 Newsletter Subscription
- Email subscription in footer
- Form validation

### 🎨 Theme Switcher
- Light theme
- Dark theme
- Toggle in header

### ⭐ Rating System
- Ability to rate exercises
- Display of average rating
- Modal window for leaving reviews

## 🛠️ Technologies

### Frontend
- **HTML5** — semantic markup
- **CSS3** — styling and responsive design
- **Vanilla JavaScript (ES6+)** — all application logic
- **Vite** — project bundler and dev server

### Development Tools
- **PostCSS** — CSS processing
- **Modern Normalize** — style normalization
- **Vite Plugin Full Reload** — automatic reload
- **Vite Plugin HTML Inject** — HTML partials injection

### API
- REST API: `https://your-energy.b.goit.study/api`
- Asynchronous requests using Fetch API

## 📁 Project Structure

```
kyrcova3.github.io-main/
├── src/
│   ├── css/                    # CSS modules
│   │   ├── base.css           # Base styles
│   │   ├── container.css      # Containers
│   │   ├── header.css         # Header
│   │   ├── footer.css         # Footer
│   │   ├── hero.css           # Hero section
│   │   ├── exercises.css      # Exercises section
│   │   ├── favorites.css      # Favorites page
│   │   ├── modal.css          # Modals
│   │   ├── pagination.css     # Pagination
│   │   ├── search.css         # Search
│   │   └── ...
│   ├── js/                     # JavaScript modules
│   │   ├── api.js             # API requests
│   │   ├── exercises.js       # Exercises logic
│   │   ├── filters.js         # Filtering
│   │   ├── pagination.js      # Pagination
│   │   ├── favorites.js       # Favorites
│   │   ├── exercise-modal.js  # Exercise modal
│   │   ├── rating-modal.js    # Rating modal
│   │   ├── quote.js           # Daily quotes
│   │   ├── search.js          # Search
│   │   ├── subscription.js    # Subscription
│   │   ├── markup.js          # HTML generation
│   │   └── icons.js           # Icons and themes
│   ├── partials/              # HTML components
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── modals.html
│   ├── images/                # Images
│   │   ├── icons/            # SVG icons
│   │   └── photos/           # Photos
│   ├── fonts/                 # DM Sans font
│   ├── public/                # Static files
│   ├── index.html            # Main page
│   ├── favorites.html        # Favorites page
│   └── main.js               # Entry point
├── package.json              # Project dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
```

## 🚀 Installation and Launch

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation Steps

1. **Clone repository:**
```bash
git clone https://github.com/kyrcova3/kyrcova3.github.io.git
cd kyrcova3.github.io
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run dev server:**
```bash
npm run dev
```

The application will be available at: `http://localhost:5173`

### Other Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Design

The project is fully adapted for different devices:

- **Mobile:** from 320px
- **Tablet:** from 768px
- **Desktop:** from 1440px

Uses mobile-first approach to development.

## 🎨 Design System

### Colors
- **Light theme:**
  - Primary: `#040404`
  - Background: `#F4F4F4`
  - Accent: `#EEA10C`

- **Dark theme:**
  - Primary: `#EFEDE8`
  - Background: `#040404`
  - Accent: `#EEA10C`

### Typography
- **Font:** DM Sans
- **Weights:** 400 (Regular), 500 (Medium), 700 (Bold)

## 🔌 API Endpoints

### Quotes
```javascript
GET /api/quote
```

### Filters
```javascript
GET /api/filters?filter={muscles|body-parts|equipment}&page={number}&limit={number}
```

### Exercises
```javascript
GET /api/exercises?{params}
GET /api/exercises/{id}
PATCH /api/exercises/{id}/rating
```

### Subscription
```javascript
POST /api/subscription
Body: { "email": "user@example.com" }
```

## 💾 Local Storage

The application uses `localStorage` to store:
- Favorite exercises (key: `favorites`)
- Current theme (key: `theme`)

## 🌐 Deployment

The project is deployed on GitHub Pages:
**[https://kyrcova3.github.io/kyrcova3.github.io/](https://kyrcova3.github.io/kyrcova3.github.io/)**

### Automatic Deployment
GitHub Actions is configured for automatic deployment on push to main branch.

## 👥 Author

**Schastlyvtsev Nazar**
- Email: n.zaharii@student.neoversity.com.ua
- GitHub: [@kyrcova3](https://github.com/kyrcova3)

## 📝 License

ISC License

## 🙏 Acknowledgments

- GoIT Academy for the API
- Everyone who inspired the creation of this project

---

## 📚 Additional Information

### Implementation Features

1. **Modular architecture** — code is divided into logical modules
2. **Asynchronicity** — using async/await for API work
3. **Error handling** — correct handling of API errors
4. **Optimization** — lazy loading images, minimizing reflows
5. **Accessibility** — semantic markup, ARIA attributes
6. **SEO-friendly** — proper HTML structure, meta tags

### Possible Improvements

- [ ] Add user authentication
- [ ] Implement workout progress tracking
- [ ] Add workout planner
- [ ] Integration with fitness trackers
- [ ] PWA functionality
- [ ] Multi-language interface

---

**Created:** 2024  
**Last Updated:** February 2026
