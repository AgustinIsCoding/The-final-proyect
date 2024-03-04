const express = require('express');
const router = express.Router();
const controller = require('./controller.js')
const response = require('../../response/index.js')


router.get('/', (req, res) => {
  controller.listUsers()
  .then((data) =>
  res.status(200).send(data))
  .catch((err) => {
    console.log(err.code);
    res.status(500).send(err);
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  if (id) {
    controller.getOnlyUser(id)
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err.code);
      res.status(500).send(err);
    })
  }else{
    controller.listUsers()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err.code);
      res.status(500).send(err);
    })
  }
})

router.post('/', (req, res) => {
  console.log(req.body)
  controller.addUser(req.body)
  .then((data) => {
    response.success(req, res, data, 201);
  })
  .catch((err) => {
    response.error(req, res, 'Internal Error', 500, err);
  });
})

router.patch('/', (req, res) => {
  const id = req.body.id;
  const uid = parseInt(id)
  console.log(req.body.email)
  controller.updateUserData(uid, req.body.email)
  .then((data) => res.status(201).json(data))
  .catch(err => res.status(500).send(err));
})

module.exports = router;