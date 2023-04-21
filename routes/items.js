var express = require('express');
const ItemModel = require('../models/item');

const router = express.Router();


/* GET items listing. */
router.get('/', async function (req, res, next) {

  const items = await ItemModel.find();

  res.json({ items });
});

router.get('/:id', async function (req, res, next) {

  const item = await ItemModel.findById(req.params.id)

  res.json({ item });
})

router.post('/', function (req, res, next) {
  console.log('hola este es el body', req.body)

  const newItem = new ItemModel();

  newItem.name = req.body.name;
  newItem.color = req.body.color;
  newItem.quantity = req.body.quantity;
  newItem.size = 'daniel';
  newItem.date = new Date().toISOString();

  newItem.save((err, savedInfo) => {
    if (err) {
      console.log('Ha ocurrido un error que es: ', err);
      return res.status(500).json({ error: err });
    }
    return res.json({ item: savedInfo });
  })
})

router.put('/:id', async function (req, res, next) {

  await ItemModel.findByIdAndUpdate(req.params.id, { color: req.body.color })


  // const item = await ItemModel.findById(req.params.id);

  // item.color = req.body.color;

  // item.save((err, savedInfo) => {
  //   if (err) {
  //     console.log('Ha ocurrido un error que es: ', err);
  //     return res.status(500).json({ error: err });
  //   }
  //   return res.json({ item: savedInfo });
  // })

  res.json({ message: 'ok' });
})

router.delete('/:id', async function (req, res, next) {
  const itemToDelete = await ItemModel.findByIdAndDelete(req.params.id);
  if (!itemToDelete) {
    return res.json({ message: 'nothing to delete' });
  }
  res.json({ message: 'ok' });
})

module.exports = router;
