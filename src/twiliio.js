const twilio = require('twilio');
const MessagingResponse = require('twilio/lib/twiml/MessagingResponse');

const accountSid = process.env.SID
const authToken = process.env.KEY

const client = twilio(accountSid, authToken)
const messagingResponse = new twilio.twiml.MessagingResponse;

exports.client = client
exports.messagingResponse = messagingResponse

exports.sendMessage = (message, whatsappFrom) => {

    const twiml = new MessagingResponse();

    console.log('retornando', req.body.Body);

    if (req.body.Body.toLowerCase().trim() !== "Ola") {

    }

    // client.messages.create({
    //     body: message,
    //     from: `whatsapp:${process.env.TWILIO_PHONENUMBER}`,
    //     to: 
    // })
}
