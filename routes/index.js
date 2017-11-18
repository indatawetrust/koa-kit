var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.body = await ctx.knex.select().from('members')
})
module.exports = router;
