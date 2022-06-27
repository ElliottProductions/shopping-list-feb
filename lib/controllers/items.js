const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const authorizeItem = require('../middleware/authorizeItem');
const Item = require('../models/Item');

module.exports = Router()
  .post('/', authenticate, async (req, res, next) => {
    try {
      const item = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(item);
    } catch (e) {
      next(e);
    }

  })
  .get('/', authenticate, async (req, res, next) => {
    try {
      const userId = req.user.id;
      const item = await Item.getAll(userId);
      res.json(item);
    } catch (e) {
      next(e);
    }
  });
// TO DO - implement items CRUD
