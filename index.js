const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const koaBody = require('koa-body')

require('./bootstraap/Globals');
app.use(koaBody());

const port = process.env.PORT ||1000;
require('../ApiInsertingData/routes/Data')(app, Router);
app.listen(port, () => { console.log(`listen to port ` + port) });