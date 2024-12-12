# ✨ Authentication System Documentation  
### with NextAuth, SMTP Email Verification, and Twilio Phone OTP Verification

This guide provides a comprehensive overview of the authentication system, outlining its key features, implementation, and steps on how it works.

---

## 🚀 Features

- 🔒 **Secure User Authentication** using [**NextAuth.js**](https://next-auth.js.org)
- 📧 **Email Verification** via **SMTP**
- 📱 **Phone OTP Verification** powered by **Twilio**
- 🗂️ Robust **MongoDB Integration** for data storage

---

## 🛠 Technologies Used

- 🖥️ **Frontend & Backend**: [Next.js](https://nextjs.org)
- 📂 **Database**: [MongoDB](https://www.mongodb.com)
- 🔑 **Authentication**: [NextAuth.js](https://next-auth.js.org)
- ✉️ **Email Service**: SMTP (via [Nodemailer](https://nodemailer.com/))
- 📲 **Phone Verification**: [Twilio](https://www.twilio.com)

---

## 📝 Steps on How It Works

### 1️⃣ **User Registration**

**Process:**

1. The user visits the registration page.
2. Inputs their **name**, **email**, **phone number**, and **password**.
3. Upon submission:
    - An **email verification** link is sent via SMTP.
    - The user's data is stored in MongoDB with default verified statuses set to `false`.
4. The user is redirected to the **login screen**.

---

### 2️⃣ **User Login**

**Process:**

1. The user logs in using their **email** and **password**.
2. If either the **email** or **phone** is not verified:
    - A **warning message** is displayed.
    - The user is prompted to verify with:
        - A **"Verify Phone"** button for OTP verification.

---

### 3️⃣ **Email Verification**

**Process:**

1. The user receives an email with a unique **verification link**.
2. Clicking the link redirects them to a page confirming their email is verified.
3. The `emailVerified` status in MongoDB is updated to `true`.

---

### 4️⃣ **Phone OTP Verification**

**Process:**

1. Clicking **"Verify Phone"** redirects the user to the phone verification page.
2. A unique **OTP** is generated and sent via Twilio.
3. The user enters the OTP on the page.
4. If the OTP is correct:
    - The `phoneVerified` status in MongoDB is updated to `true`.

---

### ✅ **Completion**

Once both **email** and **phone** are verified, the user gains access to all platform features.

---

## 🔧 How to Set Up the Authentication System

### 1. **Clone the Repository**

```bash
# Step 1: Clone the repository from GitHub
# This command will copy the entire repository to your local machine.
git clone https://github.com/Tobbiloba/twilio-and-next-auth

# Step 2: Change to the project directory
# After cloning the repository, navigate into the project folder where all the source code resides.
cd twilio-and-next-auth

# Step 3: Install project dependencies
# The npm install command will read the package.json file and install all the required packages and dependencies listed there.
# Make sure you have Node.js and npm installed. If not, you can download and install them from https://nodejs.org/.
npm install

# Step 4: Start the development server
# Once all the dependencies are installed, run this command to start the local development server.
# The application will be available at http://localhost:3000 by default.
npm run dev

# After running this command, the server will be live, and you can view the project in your browser.
# You can stop the server anytime by pressing `Ctrl + C` in the terminal.


