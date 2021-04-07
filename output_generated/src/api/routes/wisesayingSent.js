const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const wisesayingSentHandler = require('../handlers/wisesayingSent');
module.exports = router;

router.use('wisesayingSent', async (message, next) => {
  try {
    await validateMessage(message.payload,'wisesayingSent','wiseSayingConsumed','publish');
    await wisesayingSentHandler.onWiseSayingSentPub({message});
    next();
  } catch (e) {
    next(e);
  }
});
router.useOutbound('wisesayingSent', async (message, next) => {
  try {
    await validateMessage(message.payload,'wisesayingSent','wiseSayingConsumed','subscribe');
    await wisesayingSentHandler.onWiseSayingSentSub({message});
    next();
  } catch (e) {
    next(e);
  }
});
