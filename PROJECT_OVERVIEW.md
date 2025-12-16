# Bandella Looty Project Overview

Bandella Looty is a complete platform combining dropshipping e-commerce and content creation. Users can browse products, place orders, and engage with content. Admins can manage products, orders, and even control the site via email commands.

## Key Features
- Product catalog with shopping cart and checkout
- Customer authentication with Firebase (email/password)
- Admin dashboard for order and product management
- Email-based admin control system (GET/PUSH/PUT/PATCH commands via email)
- Automatic checkout notifications (orders emailed to admin)
- Newsletter signup (simulated)
- Supplier management
- Dark/light theme toggle
- Responsive design with Bootstrap

## Architecture

### Frontend (React 18 + Vite)
- **Authentication**: Firebase Auth with custom Login component
- **State Management**: ThemeContext, CartContext, AuthContext
- **Pages**: Home, Products, Cart, Checkout, Admin, Suppliers, etc.
- **Components**: Responsive Bootstrap cards, forms, modals
- **Deployment**: GitHub Pages (automatic on push to main)

### Backend (Node.js/Express) - Optional
- **Purpose**: Email webhook handler, GitHub API integration, email sender
- **Endpoints**:
  - `GET /health` — Health check
  - `POST /api/checkout-notification` — Receive checkout notifications
  - `POST /api/email-webhook` — Receive admin commands via email
- **Features**:
  - GET: Retrieve products, stats, orders
  - PUSH/PUT: Update files in GitHub repo
  - PATCH: Merge-based updates (future)
  - Email responses to admin
- **Deployment**: Heroku, Railway, Vercel, or AWS Lambda

### Email System
- **Checkout Notifications**: Customer → Frontend → Backend → Admin Email
- **Admin Commands**: Admin Email → Email Service → Backend → GitHub API → Repo Update
- **Services**: SendGrid, AWS SES, Gmail SMTP, or Zapier

## Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Create .env file with Firebase credentials
cp .env.example .env
# Edit .env and add your Firebase credentials

# Run development server
npm run dev
# Opens at http://localhost:5173
```

### Production Build
```bash
npm run build
# Creates optimized dist/ folder
# Push to main branch to auto-deploy to GitHub Pages
```

## Deployment

### Frontend (GitHub Pages)
1. Push to main branch
2. GitHub Actions automatically builds and deploys
3. Site available at https://l00tybandella.github.io

### Backend (Optional - for email control)
1. Create `server/` directory with Node.js Express app
2. Deploy to Heroku, Railway, or Vercel
3. Configure environment variables
4. Set up email webhook routing

### Firebase (Customer Auth)
1. Create project at firebase.google.com
2. Get web credentials
3. Add to .env file
4. Enable Email/Password authentication

## File Structure
```
/
├── index.jsx                    # React entry point
├── App.jsx                      # Main app component
├── App.css                      # Global styles
├── vite.config.mjs              # Vite config
├── package.json                 # Dependencies
├── .env.example                 # Environment template
├── index.html                   # HTML template
│
├── src/components/
│   ├── Navbar.jsx              # Navigation bar
│   ├── HeroBanner.jsx          # Hero section
│   ├── Products.jsx            # Products grid
│   ├── Cart.jsx                # Shopping cart
│   ├── Checkout.jsx            # Checkout flow
│   ├── Admin.jsx               # Admin dashboard
│   ├── Suppliers.jsx           # Supplier management
│   ├── Login.jsx               # Customer login (to be created)
│   └── ...other pages
│
├── contexts/
│   ├── AuthContext.jsx         # Firebase auth (to be created)
│   ├── CartContext.jsx         # Shopping cart state
│   └── ThemeContext.jsx        # Dark/light theme
│
├── server/                     # Backend (optional)
│   ├── server.js              # Express app
│   ├── package.json           # Backend deps
│   ├── .env                   # Backend config
│   └── ...routes
│
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions
│
└── README files/
    ├── readme.txt             # Owner's manual
    ├── PROJECT_OVERVIEW.md    # This file
    ├── DOCKER.md              # Docker setup
    └── BACKEND_SETUP.md       # Backend guide
```

## Implementation Checklist

### Phase 1: Frontend ✅
- [x] React + Vite setup
- [x] Product browsing and cart
- [x] Checkout flow with notifications
- [x] Admin dashboard
- [x] GitHub Pages deployment
- [x] Updated serverConfig.js with email endpoints
- [x] Modified Checkout.jsx to send notifications

### Phase 2: Authentication (In Progress)
- [ ] Create AuthContext.jsx (Firebase init + state)
- [ ] Create Login.jsx (email/password form)
- [ ] Create .env with Firebase credentials
- [ ] Test login/signup flow
- [ ] Add logout button to navbar

### Phase 3: Backend Setup (Planned)
- [ ] Create server/ directory with Express app
- [ ] Implement checkout notification handler
- [ ] Implement email webhook handler
- [ ] Add GitHub API integration
- [ ] Implement GET, PUSH, PUT, PATCH commands
- [ ] Deploy to cloud provider

### Phase 4: Email Integration (Planned)
- [ ] Configure email service (SendGrid/AWS SES/Gmail)
- [ ] Set up email webhook routing
- [ ] Test email → backend → GitHub workflow
- [ ] Test checkout → email notification

## API Endpoints

### Frontend Endpoints
- `POST /api/checkout-notification` — Send order notification to admin
  - Body: `{ items, total, count, redirectTo, customerEmail, createdAt }`

### Backend Endpoints (when deployed)
- `GET /health` — Server health check
- `POST /api/checkout-notification` — Receive checkout notifications
- `POST /api/email-webhook` — Receive admin email commands

## Email Commands Reference

### Format
```
From: admin_email@example.com
Subject: [COMMAND] [filepath/query]
Body: [file content for PUSH/PUT commands]
```

### GET Commands
- `GET products` → Returns product list
- `GET stats` → Returns repository statistics
- `GET orders` → Returns order information (future)

### Modify Commands
- `PUSH productsData.js` → Body contains new file content
- `PUT productsData.js` → Same as PUSH (idempotent)
- `PATCH productsData.js` → Merge-based update (future)

### Example
```
Subject: GET products
Body: Please retrieve the current products list

→ Response email with products data
```

## Environment Variables

### Frontend (.env)
```
REACT_APP_FIREBASE_API_KEY=xxx
REACT_APP_FIREBASE_AUTH_DOMAIN=xxx
REACT_APP_FIREBASE_PROJECT_ID=xxx
REACT_APP_FIREBASE_STORAGE_BUCKET=xxx
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxx
REACT_APP_FIREBASE_APP_ID=xxx
REACT_APP_API_URL=http://localhost:3000
```

### Backend (server/.env)
```
GITHUB_TOKEN=ghp_xxx
GITHUB_OWNER=your_username
GITHUB_REPO=l00tyBandella.github.io
ADMIN_EMAIL=your_email@example.com
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
PORT=3000
```

## Key Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **Bootstrap 5** - CSS framework
- **Firebase 10.7.0** - Authentication
- **React Router 7** - Client-side routing
- **Express** - Backend server (optional)
- **Octokit** - GitHub API client (optional)
- **Nodemailer** - Email sending (optional)

## Security Notes

1. **Never commit .env** - Contains sensitive credentials
2. **Use GitHub token carefully** - Don't share or expose
3. **Gmail app passwords** - Use dedicated app passwords, not main password
4. **Admin email only** - Email commands only work from admin email
5. **HTTPS only** - Always use SSL/TLS in production
6. **Input validation** - Backend validates all inputs
7. **CORS configured** - Frontend/backend communication secured

## Next Steps

1. **Set up Firebase** → Get credentials, create .env
2. **Create AuthContext.jsx** → Implement authentication
3. **Create Login.jsx** → Customer login UI
4. **Create backend** → Set up Express server
5. **Deploy backend** → Host on cloud service
6. **Configure email** → SendGrid/AWS SES/Gmail
7. **Test workflow** → End-to-end testing
8. **Production deploy** → Push to main, verify on live site

## Support & Documentation

- See `readme.txt` for complete owner's manual
- See `BACKEND_SETUP.md` for backend implementation details
- See `DOCKER.md` for Docker deployment
- Check GitHub Actions logs for deployment errors
- Firebase docs: firebase.google.com/docs
- Octokit docs: octokit.rest.js.org

## Team

- **Frontend**: React + Vite + Bootstrap
- **Backend**: Node.js + Express (optional)
- **Auth**: Firebase
- **Hosting**: GitHub Pages + Cloud Provider
- **Email**: SendGrid/AWS SES/Gmail

---

Last Updated: Current Session
Version: 2.0 (With Auth + Email System Architecture)
