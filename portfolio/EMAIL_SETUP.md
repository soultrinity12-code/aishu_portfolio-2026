# Email Setup Guide for Aishwarya Kunjir Portfolio

## Configuration Summary

✅ **Contact Email:** aishwaryakunjir.2026@gmail.com  
✅ **Social Links:** Instagram & LinkedIn only (Behance & Dribbble removed)  
✅ **Email Backend:** SMTP via Gmail App Password  
✅ **Phone Field:** Removed from contact form  

---

## How Email Works

### 1. **Form Submission Flow**
- User fills out contact form (Name, Email, Message)
- JavaScript validates input and sends to `send-email.php`
- PHP processes request and sends email via Gmail SMTP

### 2. **Emails Sent**
- **Email 1:** Admin notification to aishwaryakunjir.2026@gmail.com
  - Contains: Visitor name, email, message
  - Formatted with premium HTML styling

- **Email 2:** Confirmation email to visitor
  - "Thank you for reaching out" message
  - Links to Instagram & LinkedIn
  - Shows your branding

---

## Testing the Email System

### Option 1: Local XAMPP Testing (Recommended)

1. **Start XAMPP Services:**
   - Open XAMPP Control Panel
   - Start Apache and MySQL

2. **Test the Form:**
   - Navigate to: http://localhost/portfolio
   - Fill out contact form with test data
   - Click "Send Message"
   - Check your email for messages

3. **Troubleshooting Local Testing:**
   - If emails don't arrive, check XAMPP error logs:
     - `c:\xampp\apache\logs\error.log`
     - `c:\xampp\php\logs\php_error.log`
   - Check your Gmail inbox spam folder

### Option 2: Advanced Testing

**Using cURL (Command Line):**
```bash
curl -X POST http://localhost/portfolio/send-email.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "",
    "message": "This is a test message"
  }'
```

---

## Security Features Implemented

✅ **Input Sanitization:** All inputs sanitized with `htmlspecialchars()` and `filter_var()`  
✅ **Email Validation:** Regex validation on frontend + PHP filter validation  
✅ **CORS Headers:** Proper cross-origin handling  
✅ **Method Validation:** Only POST requests accepted  
✅ **App Password Security:** Gmail app password used instead of main password  

---

## Gmail App Password Setup (Already Configured)

Your configuration uses:
- **Email:** aishwaryakunjir.2026@gmail.com
- **App Password:** excg xeoe pkgi zclf
- **SMTP Server:** smtp.gmail.com
- **Port:** 587
- **Encryption:** STARTTLS

### If Password Changes (Future Reference)

1. Go to https://myaccount.google.com/apppasswords
2. Generate new app password
3. Update `send-email.php` lines 5, 38, 77 with new password

---

## File Structure

```
portfolio/
├── send-email.php              ← Email backend (handles form submissions)
├── index.html                  ← Updated with real social links & email
├── assets/
│   ├── css/
│   │   └── style.css          ← Added .form-message.info styling
│   └── js/
│       └── script.js           ← Updated form submission logic
```

---

## Form Message States

1. **Loading (Blue):** "Sending your message..."
2. **Success (Green):** "Message sent successfully! Check your email for confirmation."
3. **Error (Red):** Shows specific error message

---

## Testing Checklist

- [ ] Form submits without errors
- [ ] Admin receives notification email
- [ ] Visitor receives confirmation email
- [ ] Both emails have proper formatting
- [ ] Social media links work (Instagram & LinkedIn)
- [ ] Phone field is not displayed
- [ ] Email address displays correctly in contact info
- [ ] Error messages appear for invalid input

---

## Next Steps (Optional Enhancements)

1. **Install PHPMailer (Recommended for Production)**
   ```bash
   composer require phpmailer/phpmailer
   ```
   This gives more robust SMTP handling with better error reporting.

2. **Add Rate Limiting**
   - Prevent spam by limiting submissions per IP
   - Example: Max 5 submissions per hour per IP

3. **Add Database Logging**
   - Store submission history in MySQL
   - Track user inquiries over time

4. **Add File Upload Support**
   - Let users attach project files or portfolios
   - Requires additional security validation

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Emails not arriving | Check Gmail spam folder, verify SMTP credentials |
| "Method not allowed" error | Form must be submitted via POST |
| "Invalid email" error | Check email format is correct |
| Server error 500 | Check PHP error logs, verify file permissions |
| Forms sends but no email | Check Gmail app password is correct |

---

## Support

For issues or questions about the email system:
1. Check PHP error logs in XAMPP
2. Test with browser console (F12 → Network tab)
3. Verify SMTP credentials in `send-email.php`

**Last Updated:** June 5, 2026  
**Portfolio Location:** c:\xampp\htdocs\newprot\portfolio
