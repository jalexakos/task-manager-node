const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'joshalexakos@gmail.com',
        subject: 'Thanks for using my Task App!',
        text: `Welcome to the app, ${name}! Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'joshalexakos@gmail.com',
        subject: "We're sorry to see you go",
        text: `Hi, ${name}. We're sorry to see you go. Is there something we could have done to better improve your experience with our app? Please let us know.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}