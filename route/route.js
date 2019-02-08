const Middleware = require('../middleware/middleware')
const Sysinfo = require('../sysinfo/sysinfo')

exports.routesConfig = (app) => {
    app.get('/sysinfo', [
        Middleware.tokenValidation,
        Sysinfo.monitor
    ])
}