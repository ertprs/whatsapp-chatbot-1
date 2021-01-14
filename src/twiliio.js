const twilio = require('twilio');
const MessagingResponse = require('twilio/lib/twiml/MessagingResponse');

const accountSid = process.env.SID
const authToken = process.env.KEY

const client = twilio(accountSid, authToken)
const messagingResponse = new twilio.twiml.MessagingResponse;

exports.client = client
exports.messagingResponse = messagingResponse

exports.sendMessage = (message, from, to) => {

    console.log('entrou aqui', from, to, process.env.TWILIO_PHONENUMBER)

    client.messages.create({
        body: 'Seja bem vindo a Tele Sena',
        from: from,
        to: process.env.TWILIO_PHONENUMBER
    })
        .then(message => console.log(message.sid))
        .catch(error => console.log('error', error))

}
