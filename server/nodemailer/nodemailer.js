const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
async function main (mailInfo) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    name: 'Lustach',
    secure: false,
    auth: {
      user: 'lusta.forsocial@gmail.com',
      pass: 'napoleon11jl6349NN'
    }
  })

  const info = await transporter.sendMail({
    from: mailInfo.address, // sender address
    to: 'lusta.forsocial@gmail.com', // list of receivers
    subject: mailInfo.address, // Subject line
    text: mailInfo.message, // plain text body
    html: `<b>${mailInfo.message}</b>` // html body
  })

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}

module.exports = main
