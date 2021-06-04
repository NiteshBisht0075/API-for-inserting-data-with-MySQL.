const Data = require('../model/DataModel');
module.exports = {
    async add(ctx){
        try {
          const {body} = ctx.request;
          var data = await db.query(`SELECT * FROM data WHERE id=`+body.id+``);
          if(data.length>0){
            ctx.throw(406, 'Not Acceptable! User with same id already exist');
          }else{
            const response = await Data.getInstance().addData(body);
            ctx.body = { status: "success", response: response };
          }
        } catch (err) {
          ctx.throw(500, err)
        }
      }
}