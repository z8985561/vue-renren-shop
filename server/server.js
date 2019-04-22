const Koa = require("koa");
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const API_URL = "/api";

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});


// banner数据
router.get(`${API_URL}/banner`, async (ctx, next) => {
    ctx.response.body = require("./api/banner");
    await next();
});
//抢购抢购数据
router.get(`${API_URL}/seckill`, async (ctx, next) => {
    ctx.response.body = require("./api/seckill");
    await next();
});
//推荐产品数据
router.get(`${API_URL}/recommend`, async (ctx, next) => {
    ctx.response.body = require("./api/recommend");
    await next();
});


// add router middleware:
app.use(router.routes());
app.listen(3000);
console.log('app started at port 3000...');