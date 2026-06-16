# Portfolio Configuration Guide

This document explains how to configure the portfolio website for Aishwarya Kunjir.

## 📝 Quick Setup Checklist

### 1. Update Personal Information

**File**: `index.html`

Find and update these TODO sections:

```html
<!-- In the About Section -->
<p><!-- TODO: Add personal background and design philosophy --></p>

<!-- In the Contact Section -->
<p><!-- TODO: Add contact email --></p>
<p><!-- TODO: Add phone number --></p>
<p><!-- TODO: Add location --></p>

<!-- Social Media Links -->
<a href="#" target="_blank" title="Instagram">
```

### 2. Update Portfolio Images

**File**: `assets/js/script.js`

Update the `portfolioData` object with your image paths:

```javascript
const portfolioData = {
    'ad-posts': [
        { title: 'Ad Post 1', image: '../AD\'S POSTS/3.png' },
        { title: 'Ad Post 2', image: '../AD\'S POSTS/WINTER SKINCARE.png' },
        // Add or modify more items
    ],
    // ... other categories
};
```

### 3. Update Featured Work Section

**File**: `index.html` (around line 200)

Replace the placeholder featured images:

```html
<img src="assets/images/placeholder-featured-1.jpg" alt="Featured Work">
```

With your actual best portfolio pieces.

### 4. Update Social Media Links

**File**: `index.html`

Update all social media links in:
- Navigation footer
- Contact section
- Footer

Examples:
```html
<a href="https://instagram.com/aishwaryakunjir" target="_blank">
<a href="https://linkedin.com/in/aishwaryakunjir" target="_blank">
<a href="https://behance.net/aishwaryakunjir" target="_blank">
<a href="https://dribbble.com/aishwaryakunjir" target="_blank">
```

### 5. Update SEO Meta Tags

**File**: `index.html` (lines 1-20)

Update these meta tags:

```html
<meta name="description" content="Your custom description">
<meta property="og:title" content="Your custom title">
<meta property="og:description" content="Your custom description">
<meta property="og:image" content="https://yoursite.com/og-image.png">
<meta property="og:url" content="https://yoursite.com">
```

### 6. Update Structured Data

**File**: `index.html` (lines 24-32)

Update the JSON-LD structured data:

```json
{
    "@type": "Person",
    "name": "Aishwarya Kunjir",
    "url": "https://yoursite.com",
    "jobTitle": "Graphic Designer",
    "sameAs": [
        "https://instagram.com/yourprofile",
        "https://linkedin.com/in/yourprofile"
    ]
}
```

### 7. Update Sitemap

**File**: `sitemap.xml`

Update the domain URLs:

```xml
<loc>https://aishwaryakunjir.com/</loc>
<loc>https://aishwaryakunjir.com/#portfolio</loc>
```

### 8. Set Up Contact Form

Choose one of these options:

#### Option A: Formspree (Recommended)

1. Go to https://formspree.io
2. Sign up and create a new form
3. Update `index.html` contact form action:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form stays the same -->
</form>
```

#### Option B: Netlify Forms

1. Deploy to Netlify
2. Add `netlify` attribute to form:

```html
<form name="contact" method="POST" netlify>
    <!-- form stays the same -->
</form>
```

#### Option C: Custom Backend

Implement your own backend to handle submissions.

## 🎨 Customization Guide

### Change Color Scheme

**File**: `assets/css/style.css` (lines 1-12)

```css
:root {
    --primary: #7C3AED;          /* Main brand color */
    --primary-dark: #6D28D9;     /* Darker shade */
    --secondary: #A855F7;        /* Secondary color */
    --accent: #EC4899;           /* Accent/highlight color */
    --bg-dark: #0F172A;          /* Dark background */
    --bg-darker: #0A0E1E;        /* Darker background */
    --text-light: #F8FAFC;       /* Light text */
    --text-muted: #CBD5E1;       /* Muted text */
}
```

### Change Fonts

**File**: `index.html` (lines 40-41)

Update Google Fonts import:

```html
<link href="https://fonts.googleapis.com/css2?family=NewFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update CSS in `style.css`:

```css
h1, h2, h3 { font-family: 'NewFont', sans-serif; }
p { font-family: 'NewFont', sans-serif; }
```

### Add New Portfolio Category

1. **Add to JavaScript** (`assets/js/script.js`):

```javascript
const portfolioData = {
    'new-category': [
        { title: 'Item 1', image: '../NEW CATEGORY/image1.png' },
        { title: 'Item 2', image: '../NEW CATEGORY/image2.png' }
    ],
    // ... existing categories
};
```

2. **Add Filter Button** (`index.html`):

```html
<button class="filter-btn" data-filter="new-category">New Category</button>
```

### Modify Animations

**File**: `assets/js/script.js`

#### AOS Animation Speed

```javascript
AOS.init({
    duration: 1000,    // Increase for slower, decrease for faster
    offset: 100,       // Distance from bottom when animation triggers
    once: false,       // Set to true to animate only once
});
```

#### GSAP Animation

```javascript
gsap.to('.element', {
    duration: 1,       // Animation duration
    y: 20,             // Y movement
    ease: 'power2.out' // Easing function
});
```

## 📱 Responsive Design Notes

The site is already fully responsive for:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

If you need to adjust breakpoints, edit `style.css` media queries.

## 🔍 SEO Optimization Checklist

- [ ] Update all meta tags with your information
- [ ] Replace portfolio images with your work
- [ ] Update social media links
- [ ] Add Google Analytics ID
- [ ] Submit sitemap to Google Search Console
- [ ] Create Google Business Profile
- [ ] Set up Google Search Console
- [ ] Test with PageSpeed Insights
- [ ] Test mobile-friendliness
- [ ] Verify structured data with schema.org validator

## 📊 Analytics Setup

### Google Analytics

Add to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID from Google Analytics.

## 🔒 Security Configuration

### HTTPS/SSL Certificate

- Use Netlify, Vercel, or GitHub Pages (all provide free SSL)
- Or purchase SSL certificate from your hosting provider

### Secure Headers

The `.htaccess` file already includes security headers:
- X-UA-Compatible
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

## 🚀 Performance Optimization

### Image Optimization

1. **Compress images** using:
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim (Mac)
   - PunyPNG (Windows)

2. **Convert to WebP format** for better compression

3. **Use responsive images** with srcset

### Code Optimization

1. **Minify CSS**:
   - Use cssnano.co
   - Or CSS minifier tools

2. **Minify JavaScript**:
   - Use terser.org
   - Or JavaScript minifier tools

3. **Lazy load images**:
   - Already implemented in the code
   - Images load only when needed

### Caching

The `.htaccess` file includes:
- GZIP compression
- Browser caching headers
- Expiration dates for static assets

## 📧 Email Integration

### Set Up Email Forwarding

If using Netlify or Formspree:
1. They'll handle email notifications
2. Emails go to the email you configure in their dashboard
3. No additional setup needed

### Alternative: Your Own Email

Set up a backend service to send emails directly.

## 🎯 Final Deployment Steps

1. **Test locally**
   ```bash
   python -m http.server 8000
   # or
   php -S localhost:8000
   ```

2. **Test on mobile** using browser dev tools

3. **Check Lighthouse score**
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Run audit

4. **Deploy to production**
   - Upload to hosting
   - Update domain DNS settings
   - Configure SSL certificate

5. **Post-deployment testing**
   - [ ] Test all links
   - [ ] Test portfolio filtering
   - [ ] Test lightbox
   - [ ] Test dark mode
   - [ ] Test contact form
   - [ ] Test on mobile
   - [ ] Check Lighthouse score

## 💡 Tips & Best Practices

### Content Updates

- Update portfolio regularly with new work
- Keep about section current
- Update service descriptions as needed

### Performance

- Aim for Lighthouse score of 90+
- Keep images under 500KB total per page
- Minimize external dependencies

### User Experience

- Test on real devices, not just browser emulation
- Ensure touch targets are at least 44×44 pixels
- Use high contrast for accessibility

### SEO

- Use descriptive image alt text
- Create internal links between sections
- Use semantic HTML structure
- Add structured data for rich snippets

## 🆘 Common Issues

### Images Not Loading

- Check image paths are correct (use ../ for parent directory)
- Verify image file names and extensions
- Check browser console for 404 errors

### Filter Not Working

- Clear browser cache (Ctrl+Shift+Delete)
- Check data-filter attributes match portfolioData keys
- Check browser console for errors

### Form Not Submitting

- Verify Formspree/Netlify is configured
- Check form action URL
- Test in different browser

### Performance Issues

- Optimize and compress images
- Enable GZIP compression
- Use CDN for static files
- Minify CSS and JavaScript

## 📞 Support Resources

- Bootstrap Documentation: https://getbootstrap.com/
- GSAP Documentation: https://gsap.com/
- AOS Documentation: https://michalsnik.github.io/aos/
- Font Awesome: https://fontawesome.com/
- MDN Web Docs: https://developer.mozilla.org/

---

**Configuration Version**: 1.0
**Last Updated**: June 5, 2025
