Authentication System Documentation
with NextAuth, SMTP Email Verification, and Twilio Phone OTP Verification

This guide provides a comprehensive overview of the authentication system, outlining its key features, implementation, and steps on how it works.

🚀 Features
Secure User Authentication using NextAuth.js
Email Verification via SMTP
Phone OTP Verification powered by Twilio
Robust MongoDB Integration for data storage
🛠 Technologies Used
Frontend & Backend: Next.js
Database: MongoDB
Authentication: NextAuth.js
Email Service: SMTP (via Nodemailer)
Phone Verification: Twilio
📝 Steps on How It Works
1️⃣ User Registration
Process:
The user visits the registration page.
Inputs their name, email, phone number, and password.
Upon submission:
An email verification link is sent via SMTP.
The user's data is stored in MongoDB with default verified statuses set to false.
Redirected to the login screen.
2️⃣ User Login
Process:
User logs in using their email and password.
If either the email or phone is not verified:
A warning message is displayed.
The user is prompted to verify with:
A "Verify Phone" button for OTP verification.
3️⃣ Email Verification
Process:
The user receives an email with a unique verification link.
Clicking the link redirects them to a page confirming their email is verified.
The emailVerified status in MongoDB is updated to true.
4️⃣ Phone OTP Verification
Process:
Clicking "Verify Phone" redirects the user to the phone verification page.
A unique OTP is generated and sent via Twilio.
User enters the OTP on the page.
If correct:
The phoneVerified status in MongoDB is updated to true.
✅ Completion
Once both email and phone are verified, the user gains access to all platform features.
