// External dependencies
const express = require('express')

const router = express.Router()


// Show an individual message and mark it as read
router.get('/messages/:id', (req, res) => {
  const messageId = req.params.id
  const data = req.session.data
  const messages = data.messages || []
  const message = messages.find(message => message.id === messageId)

  message.read = true

  res.render('message', { message })
})

// Add your routes here - above the module.exports line

module.exports = router
