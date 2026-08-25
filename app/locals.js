const nhsappFrontendPkg = require('nhsapp-frontend/package.json')

module.exports = function(req, res, next) {

  // Add the version of the NHS app frontend being used
  res.locals.nhsappFrontendVersion = `v${nhsappFrontendPkg.version}`

  // You can set any additional local variables here.
  // These will be made available to any views
  //
  // For example:
  //
  // res.locals.organisationName = 'NHS'

  next()
}

