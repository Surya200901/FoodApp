const express = require('express');
const router = express.Router();
const requireAdmin = require('../middleware/requireAdmin');
const Item = require('../models/Item');
const Category = require('../models/Category');
const Store = require('../models/Store');

router.use(requireAdmin);

// Items CRUD
router.get('/items', async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
});

router.post('/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
});

router.put('/items/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

router.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

// Categories
router.get('/categories', async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  res.json(categories);
});

router.post('/categories', async (req, res) => {
  const cat = new Category(req.body);
  await cat.save();
  res.status(201).json(cat);
});

router.delete('/categories/:id', async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

// Store status
router.get('/store', async (req, res) => {
  let store = await Store.findOne();
  if (!store) {
    store = new Store();
    await store.save();
  }
  res.json({ isOpen: store.isOpen, id: store._id });
});

router.post('/store/toggle', async (req, res) => {
  let store = await Store.findOne();
  if (!store) store = new Store();
  store.isOpen = !!req.body.isOpen;
  await store.save();
  res.json({ isOpen: store.isOpen });
});

module.exports = router;
