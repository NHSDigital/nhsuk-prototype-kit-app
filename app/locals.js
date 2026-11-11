import nhsappFrontendPkg from 'nhsapp-frontend/package.json' with { type: 'json' }

export default function(req, res, next) {

  // Add the version of the NHS app frontend being used
  res.locals.nhsappFrontendVersion = `v${nhsappFrontendPkg.version}`

  // Used to select the icon state in the bottom navigation
  res.locals.unreadMessages = () => Boolean(req.session.data.messages?.some((message) => message.read === false))

  res.locals.currentActingOnBehalfOf = () => {
    const data = req.session.data
    const nhsNumber = data.currentlyActingOnBehalfOfNhsNumber

    if (!nhsNumber) return null

    return data.currentUser.familyAndCarerAccess.find(person => person.nhsNumber === nhsNumber) ?? null
  }

  res.locals.currentPerson = res.locals.currentActingOnBehalfOf() ?? req.session.data.currentUser

  // You can set any additional local variables here.
  // These will be made available to any views
  //
  // For example:
  //
  // res.locals.organisationName = 'NHS'

  next()
}

