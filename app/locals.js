import nhsappFrontendPkg from 'nhsapp-frontend/package.json' with { type: 'json' }

export default function(req, res, next) {
  const data = req.session.data

  // Add the version of the NHS app frontend being used
  res.locals.nhsappFrontendVersion = `v${nhsappFrontendPkg.version}`

  // Used to select the icon state in the bottom navigation
  res.locals.unreadMessages = () => Boolean(req.session.data.messages?.some((message) => message.read === false))

  // Returns the person currently being acted on behalf of, or null if not acting on behalf of anyone
  res.locals.currentlyActingOnBehalfOf = data.currentlyActingOnBehalfOfNhsNumber
    ? data.currentUser.familyAndCarerAccess.find(person => person.nhsNumber === data.currentlyActingOnBehalfOfNhsNumber) ?? null
    : null

  // Returns the person currently being acted on behalf or the current user
  res.locals.currentPerson = res.locals.currentlyActingOnBehalfOf ?? data.currentUser

  // You can set any additional local variables here.
  // These will be made available to any views
  //
  // For example:
  //
  // res.locals.organisationName = 'NHS'

  next()
}

