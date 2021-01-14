const twilio = require('twilio');
const MessagingResponse = require('twilio/lib/twiml/MessagingResponse');

const accountSid = process.env.SID
const authToken = process.env.KEY

const client = twilio(accountSid, authToken)
const messagingResponse = new twilio.twiml.MessagingResponse;

exports.client = client
exports.messagingResponse = messagingResponse

exports.sendMessage = (message, from, to) => {

    client.messages.create({
        body: 'Seja bem vindo a Tele Sena',
        from: from,
        to: to
    })
        .then(message => console.log(message.sid))

}
