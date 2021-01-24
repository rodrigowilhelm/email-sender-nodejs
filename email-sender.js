require('dotenv/config');
const nodemailer = require ('nodemailer');

// Outlook and Hotmail send email
const senderOutlook = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587, //default
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: process.env.AUTH_USER_OUTLOOK_HOTMAIL,
        pass: process.env.AUTH_PASS_OUTLOOK_HOTMAIL
    } 
})

// Gmail send-eamil
// REMBER TO ENABLE 'ALLOW LESS SECURE APPS TO ACCESS ACCOUNT'
const senderGmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, //default
    secure: true, // use SSL
    auth: {
        user: process.env.AUTH_USER_GMAIL,
        pass: process.env.AUTH_PASS_GMAIL
    } 
})

const emailToSend = {
    from: process.env.FROM_GMAIL,
    to: process.env.TO_OUTLOOK,
    subject: 'Sending email with NodeJS',
    text: 'Yo dude, I am sending you a email via Node!',
    // html: 'HTML TAGS HERE'
}

// same process to send with Outlook
senderGmail.sendMail(emailToSend, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent with success!');
        console.log('Message:' + info.response);
    }
});

