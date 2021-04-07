const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const wisesayingNeededHandler = require('../handlers/wisesayingNeeded');
module.exports = router;

router.use('wisesayingNeeded', async (message, next) => {
  try {
    await validateMessage(message.payload,'wisesayingNeeded','wiseSayingNeeded','publish');
    await wisesayingNeededHandler.onWiseSayingNeededPub({message});
    next();
  } catch (e) {
    next(e);
  }
});
router.useOutbound('wisesayingNeeded', async (message, next) => {
  try {
    await validateMessage(message.payload,'wisesayingNeeded','wiseSayingNeeded','subscribe');
    await wisesayingNeededHandler.onWiseSayingNeededSub({message});
    next();
  } catch (e) {
    next(e);
  }
});
