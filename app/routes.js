// External dependencies
import express from 'express'

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

// Show switch back page
router.get('/family-and-carer-access/switch-back', (req, res) => {
  res.render('family-and-carer-access/switch-back')
})

// Show an individual family and carer access page
router.get('/family-and-carer-access/:nhsNumber', (req, res) => {
  const nhsNumber = req.params.nhsNumber
  const data = req.session.data
  const person = data.currentUser.familyAndCarerAccess.find(person => person.nhsNumber === nhsNumber)

  res.render('family-and-carer-access/switch', { person })
})

// Switch back to me
router.post('/family-and-carer-access/me/switch', (req, res) => {
  const data = req.session.data
  data.currentlyActingOnBehalfOfNhsNumber = null

  res.redirect('/')
})

// Switch to acting on behalf of a person
router.post('/family-and-carer-access/:nhsNumber/switch', (req, res) => {
  const nhsNumber = req.params.nhsNumber
  const data = req.session.data
  const person = data.currentUser.familyAndCarerAccess.find(person => person.nhsNumber === nhsNumber)

  data.currentlyActingOnBehalfOfNhsNumber = person.nhsNumber

  res.redirect('/')
})

// Add your routes here - above the export default line

export default router
