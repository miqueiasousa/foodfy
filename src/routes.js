const { Router } = require('express');

const router = Router()

router.get('/', (req, res) => {
  return res.json({ message: 'Hello world' })
})

module.exports = router
