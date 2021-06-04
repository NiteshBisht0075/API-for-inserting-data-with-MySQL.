const controller = require('../controller/DataController')
function getHome(ctx) { ctx.body = " Home Page" }
module.exports = function (app, Router) {
    const router = new Router({ prefix: '/user' });
    router.get('/', '/', getHome);
    router.post('/addData', controller.add);
    app.use(router.routes()).use(router.allowedMethods());
}
