
const handler = module.exports = {};

/**
 *
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.id - The unique identifier of the message
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 * @param {string} options.message.payload.sender - The sender of the wise saying
 * @param {object} options.message.payload.target
 * @param {string} options.message.payload.target.recipient - The person or entity that is the target of the wise saying
 * @param {string} options.message.payload.target.identifier - A unique value that identifies the target at the endpoint or the carrier type
 * @param {string} [options.message.payload.target.carrierType=&#39;SMS&#39;] - The carrier technology, domain or network
 */
handler.onWiseSayingNeededPub = async ({message}) => {
  console.log({firingFromWithinOnWiseSayingNeededPub : message.payload});
};
/**
 *
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.id - The unique identifier of the message
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 * @param {string} options.message.payload.sender - The sender of the wise saying
 * @param {object} options.message.payload.target
 * @param {string} options.message.payload.target.recipient - The person or entity that is the target of the wise saying
 * @param {string} options.message.payload.target.identifier - A unique value that identifies the target at the endpoint or the carrier type
 * @param {string} [options.message.payload.target.carrierType=&#39;SMS&#39;] - The carrier technology, domain or network
 */
handler.onWiseSayingNeededSub = async ({message}) => {
  console.log({firingFromWithinOnWiseSayingNeededSub : message.payload});
  message.hermes.send('Hi from onWiseSayingNeededSub',message.headers, 'wisesayingSent');
};
