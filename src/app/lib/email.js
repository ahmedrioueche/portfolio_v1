const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

require('dotenv').config();

export const mailHandler = async (name, email, message) => {
  // Initialize Mailgun
  const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || "52bc22d4d58ca8df39abeb2f50f5be2c-a26b1841-73adf6f5" });
  const domain = 'sandboxe6091a47502a4f31bd9edcb4114b13a9.mailgun.org';
  
    mg.messages.create(domain, {
    from: `${name} ${email} <mailgun@sandboxe6091a47502a4f31bd9edcb4114b13a9.mailgun.org>`, 
      to: ["adsrahmed@gmail.com"],
      subject: "Contact from Portfolio",
      text: message,
      html: `<h1>${message}</h1>`
      })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.log(err)); // logs any error
}