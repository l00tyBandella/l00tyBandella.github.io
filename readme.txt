BANDELLA LOOTY — FREE ECOMMERCE TEMPLATE
=========================================

A simple, free online store system with NO PAID SERVICES.

Uses:
✓ Firebase (free tier) - authentication & database
✓ GitHub Pages (free) - hosting
✓ Your payment provider - payments only
✓ Email commands - free admin control

---

QUICK START (5 MINUTES)
=======================

1. CREATE FIREBASE PROJECT (free)
   - Go to firebase.google.com
   - Create new project
   - Enable Email/Password auth
   - Copy credentials to .env

2. EDIT YOUR PRODUCTS
   - Open productsData.js
   - Replace example products
   - Add your images

3. SET PAYMENT LINKS
   - Open checkoutProviders.js
   - Add your Stripe/PayPal/Gumroad links
   - Test checkout

4. CUSTOMIZE STORE NAME
   - Open Navbar.jsx
   - Change "Bandella Looty" to your store name

5. DEPLOY (free on GitHub Pages)
   - Push to main branch
   - Auto-deploys in 2 minutes
   - Your store is live!

---

PAGE STRUCTURE
==============

PUBLIC PAGES (customers see):
  HOME - Welcome
  ABOUT - Your story
  FIND US - Location
  OUR PRODUCTS - Shopping
  CHECKOUT - Pay here

HIDDEN ADMIN PAGE:
  /admin - Control panel (login required)

---

HOW IT WORKS
============

CUSTOMER JOURNEY:
  1. Customer visits home
  2. Browses products
  3. Adds items to cart
  4. Goes to checkout
  5. Enters email
  6. Clicks "Pay Now"
  7. Redirected to payment provider
  → You get paid + order email

ADMIN CONTROLS:
  1. Login at /admin
  2. View all orders
  3. Mark as shipped
  4. Send email commands
  → Automatically managed

---

COSTS
=====

COMPLETELY FREE:
  ✓ GitHub Pages hosting - $0
  ✓ Firebase auth - $0
  ✓ Email commands - $0
  
PAY ONLY WHEN YOU MAKE A SALE:
  - Payment provider fees (Stripe, PayPal, etc.)
  - These are only charged when customers buy
  - Usually 2-3% per transaction

---

CUSTOMIZATION
==============

Change Store Colors:
  → Edit App.css
  → Find --primary and --secondary
  → Change hex colors

Change Store Name:
  → Edit Navbar.jsx
  → Find "Bandella Looty"
  → Replace with your name

Add Your Logo:
  → Save image to /public
  → Edit Navbar.jsx
  → Add <img> tag

Edit About Page:
  → Edit App.jsx
  → Find About section
  → Update text

---

FOR NEW CLIENTS
================

To create a store for a new customer:

STEP 1: Fork this repo
  - Click "Fork" on GitHub
  - Name it "clientname-store"

STEP 2: Edit products
  - Replace productsData.js
  - Add their products + images

STEP 3: Set their payments
  - Edit checkoutProviders.js
  - Add their payment links

STEP 4: Customize name
  - Edit Navbar.jsx
  - Change to their store name
  - Change colors in App.css

STEP 5: Deploy
  - Push to main
  - Their store is live
  - Give them access to /admin

---

ADMIN EMAIL COMMANDS
====================

See EMAIL_COMMANDS.txt for detailed instructions.

Quick reference:
  Subject: GET products
  → Shows product list

  Subject: UPDATE products
  → Add/remove products

  Subject: CHANGE payment
  → Update payment links

---

SUPPORT
=======

Questions? Check:
  - EMAIL_COMMANDS.txt (email instructions)
  - PROJECT_OVERVIEW.md (technical details)
  - Firebase docs (firebase.google.com)
  - Payment provider docs

---

SETUP CHECKLIST
===============

Before launching your store, complete these steps:

STEP 1: SET UP FIREBASE (5 min)
  □ Go to firebase.google.com
  □ Create project
  □ Create Web app
  □ Copy credentials
  □ Create .env file
  □ Paste credentials in .env

STEP 2: CONFIGURE PRODUCTS (5-10 min)
  □ Open productsData.js
  □ Delete example products
  □ Add your real products
  □ Get product image URLs
  □ Set correct prices

STEP 3: CONFIGURE PAYMENTS (5 min)
  □ Choose payment provider (Stripe, PayPal, etc.)
  □ Get payment links from provider
  □ Open checkoutProviders.js
  □ Replace placeholder URLs
  □ Test payment link works

STEP 4: CUSTOMIZE STORE (5-10 min)
  □ Open Navbar.jsx
  □ Change store name
  □ Edit About page (Shipping.jsx)
  □ Change store colors in App.css
  □ Add logo to /public if you have one

STEP 5: TEST LOCALLY (2 min)
  □ Run: npm install
  □ Run: npm run dev
  □ Visit: http://localhost:5173
  □ Click through all pages
  □ Test "Pay Now" button

STEP 6: DEPLOY TO GITHUB PAGES (2 min)
  □ git add .
  □ git commit -m "Initial store setup"
  □ git push
  □ Wait 2-3 minutes
  □ Visit: https://yourgithub.github.io
  □ Verify everything works

STEP 7: ENABLE ADMIN PANEL (2 min)
  □ Create admin Firebase account
  □ Login at /admin
  □ Change ADMIN_EMAIL in .env
  □ Redeploy: git push
  □ Admin page now protected

STEP 8: TEST CHECKOUT (2 min)
  □ Browse products
  □ Add to cart
  □ Go to checkout
  □ Click "Pay Now"
  □ Verify redirects to payment provider
  □ Check order appears in /admin

DONE! Your free store is live!

---

CREATING STORES FOR CLIENTS
============================

For each new client, follow this process:

STEP 1: COPY THE TEMPLATE
  □ Fork this repository on GitHub
  □ Rename to: clientname-store
  □ Clone locally: git clone <url>

STEP 2: SET THEIR PRODUCTS
  □ Edit productsData.js
  □ Replace with their products
  □ Find product images online or use placeholders

STEP 3: SET THEIR PAYMENT PROVIDER
  □ Ask them for payment provider link
  □ Edit checkoutProviders.js
  □ Add their payment URLs

STEP 4: CUSTOMIZE THEIR BRANDING
  □ Edit Navbar.jsx → change store name
  □ Edit Shipping.jsx → their location/contact
  □ Edit App.css → their colors
  □ Add their logo to /public (optional)

STEP 5: CREATE THEIR FIREBASE PROJECT
  □ They create Firebase project (free)
  □ They get Web app credentials
  □ Create .env with their credentials

STEP 6: DEPLOY THEIR STORE
  □ git add .
  □ git commit -m "Client setup"
  □ git push
  □ Wait 2-3 minutes
  □ Their store is live!

STEP 7: GIVE THEM ACCESS
  □ Show them the live URL
  □ Tell them how to use email commands (EMAIL_COMMANDS.txt)
  □ Set their admin email in .env
  □ They can now manage store via email

COMPLETE! Client has free online store.

---

EMAIL COMMANDS QUICK GUIDE
===========================

See EMAIL_COMMANDS.txt for FULL detailed instructions.

BASIC COMMANDS:

1. Check Products
   Email yourself:
   Subject: GET products

2. Check Orders
   Email yourself:
   Subject: GET orders

3. Update Products
   Email yourself:
   Subject: PUSH products
   Body: [new products as JSON]

4. Check Stats
   Email yourself:
   Subject: GET stats

THAT'S IT for basic usage!

See EMAIL_COMMANDS.txt for more advanced commands.

