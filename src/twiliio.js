const twilio = require('twilio')

const accountSid = process.env.SID
const authToken = process.env.KEY

const client = twilio(accountSid, authToken)
const messagingResponse = twilio.twiml.MessagingResponse;

exports.client = client
exports.messagingResponse = messagingResponse
