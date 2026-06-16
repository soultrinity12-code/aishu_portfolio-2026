# 🚀 Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## Step 1: Test Locally (1 minute)

Navigate to your portfolio folder and start a local server:

### Using Python
```bash
# Navigate to portfolio folder
cd path/to/portfolio

# Start server (Python 3)
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Open browser
# http://localhost:8000
```

### Using XAMPP (Already set up!)
1. Place `portfolio` folder in `htdocs`
2. Start Apache from XAMPP Control Panel
3. Open browser: `http://localhost/portfolio`

### Using PHP
```bash
php -S localhost:8000
```

## Step 2: Update Personal Information (2 minutes)

Open `index.html` and find these lines to update:

### Search for these TODO comments:

1. **Line ~285 (About Section)**
   ```html
   <p><!-- TODO: Add personal background and design philosophy -->
   ```
   Replace with your bio.

2. **Line ~445 (Contact Section - Email)**
   ```html
   <p><!-- TODO: Add contact email --></p>
   ```
   Add your email: `aishwarya@example.com`

3. **Line ~450 (Contact Section - Phone)**
   ```html
   <p><!-- TODO: Add phone number --></p>
   ```
   Add your phone.

4. **Line ~455 (Contact Section - Location)**
   ```html
   <p><!-- TODO: Add location --></p>
   ```
   Add your location.

5. **Social Media Links** (Search for `href="#"` in contact section)
   ```html
   <a href="#" target="_blank" title="Instagram">
   ```
   Replace `#` with your profile URLs:
   - Instagram: `https://instagram.com/yourprofile`
   - LinkedIn: `https://linkedin.com/in/yourprofile`
   - Behance: `https://behance.net/yourprofile`
   - Dribbble: `https://dribbble.com/yourprofile`

## Step 3: Set Up Contact Form (1 minute)

### Option A: Formspree (Recommended - Free!)

1. Go to **https://formspree.io**
2. Click "Sign Up"
3. Create a new form
4. Copy your form ID
5. Open `index.html`
6. Find the contact form (around line 420):
   ```html
   <form class="contact-form" id="contactForm">
   ```
7. Add this attribute:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with the ID from step 4.

### Option B: Netlify (If deploying to Netlify)

Just add `netlify` attribute:
```html
<form class="contact-form" name="contact" method="POST" netlify>
```

## Step 4: Portfolio Images Setup (1 minute)

Your images are already in these folders:
- `../AD'S POSTS/`
- `../BANNERS/`
- `../BROCHURES/`
- `../CARSOUAL/`
- `../INVITATION CARDS/`
- `../POSTERS/`
- `../SOCIAL MEDIA POST'S/`
- `../YOU TUBE THMUBNAILS/`

The website automatically loads them! If images don't show:

1. Open `assets/js/script.js`
2. Find `portfolioData` object (around line 150)
3. Update image paths if needed
4. Make sure image filenames match exactly

## Step 5: Deploy (5 minutes)

### Option A: GitHub Pages (Free!)

1. Create GitHub account: https://github.com
2. Create new repository: `aishwaryakunjir.github.io`
3. Upload files to repository
4. Wait 1-2 minutes
5. Your site is live at: `https://aishwaryakunjir.github.io`

### Option B: Netlify (Free!)

1. Go to https://netlify.com
2. Click "Add new site"
3. Choose "Deploy manually"
4. Drag and drop your portfolio folder
5. Your site is live with custom domain option

### Option C: Vercel (Free!)

1. Go to https://vercel.com
2. Click "New Project"
3. Select "Other" and upload folder
4. Done! Your site is live

### Option D: Your Own Hosting

1. Upload files via FTP to your hosting
2. Set domain to point to hosting
3. Done!

## 🎨 Common Customizations

### Change Colors

Edit `assets/css/style.css` (lines 1-12):

```css
:root {
    --primary: #7C3AED;        /* Change this color */
    --secondary: #A855F7;      /* And this */
    --accent: #EC4899;         /* And this */
}
```

### Change Fonts

Edit Google Fonts import in `index.html` (line 40)

### Add New Portfolio Category

1. Open `assets/js/script.js`
2. Find `portfolioData` object
3. Add new category:
   ```javascript
   'category-name': [
       { title: 'Item 1', image: '../FOLDER/image1.png' }
   ]
   ```

## ✅ Testing Checklist

Before deploying:

- [ ] All links work
- [ ] Portfolio filtering works
- [ ] Lightbox opens when clicking portfolio items
- [ ] Dark mode toggle works
- [ ] Contact form loads
- [ ] Mobile responsive (test in mobile browser)
- [ ] No console errors (F12 → Console)

## 📊 Analytics Setup (Optional)

Add Google Analytics to track visitors:

1. Go to https://analytics.google.com
2. Create new property
3. Copy your Measurement ID
4. Add this to `index.html` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

## 📱 Mobile Testing

1. Open website in browser
2. Press F12 (Developer Tools)
3. Click mobile icon (top left)
4. Test at different screen sizes

## 🚨 If Something Breaks

1. Clear browser cache: `Ctrl + Shift + Delete`
2. Check browser console: Press `F12` → Look for red errors
3. Verify image paths: Right-click image → "Inspect"
4. Check that you updated paths correctly

## 🎯 Next Steps

1. ✅ Complete setup above
2. ✅ Deploy to production
3. ✅ Test on mobile devices
4. ✅ Share portfolio URL
5. ✅ Monitor analytics
6. ✅ Update portfolio regularly with new work

## 📞 Important Links

- **GitHub Pages**: https://pages.github.com/
- **Netlify**: https://netlify.com/
- **Vercel**: https://vercel.com/
- **Formspree**: https://formspree.io/
- **Font Awesome Icons**: https://fontawesome.com/

## 🆘 Quick Troubleshooting

**Images not showing?**
- Check if image paths are correct
- Look at browser console (F12)
- Verify image file names match

**Portfolio filter not working?**
- Clear browser cache
- Check if data-filter matches portfolioData keys
- Look for console errors

**Form not sending?**
- Verify Formspree form ID is correct
- Check email in Formspree dashboard
- Test in different browser

**Website slow?**
- Compress images using TinyPNG
- Use Lighthouse (F12 → Lighthouse) for tips
- Deploy to CDN like Netlify/Vercel

## 📝 Files You Might Need

- `index.html` - Main website
- `assets/css/style.css` - Styling
- `assets/js/script.js` - Functionality
- `README.md` - Full documentation
- `CONFIGURATION.md` - Detailed setup

---

**That's it! 🎉**

Your portfolio is now live and ready to showcase your design work!

Any questions? Check README.md for detailed documentation.
