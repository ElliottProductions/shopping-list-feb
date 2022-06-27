const Item = require('../models/Item');

module.exports = async (req, res, next) => {
  try {
    const item = await Item.getById(req.params.id);

    if (!Item || item.user_id !== req.user.id) {
      throw new Error('You do not have the access to see this page');
    }
    next();
  } catch (e) {
    e.status = 403;
    next(e);
  }
};
