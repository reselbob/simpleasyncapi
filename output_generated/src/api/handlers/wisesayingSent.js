
const handler = module.exports = {};

/**
 *
 * @param {object} options
 * @param {object} options.message
 */
handler.onWiseSayingSentPub = async ({message}) => {
  console.log({firingOnWiseSayingSentPub : message});
};
/**
 *
 * @param {object} options
 * @param {object} options.message
 */
handler.onWiseSayingSentSub = async ({message}) => {
  console.log({firingOnWiseSayingSentSub : message});
};
