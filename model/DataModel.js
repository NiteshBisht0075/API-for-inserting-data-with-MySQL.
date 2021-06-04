
class Data {
    constructor(){}
    async addData(param){
      var response = await db.query(`INSERT INTO data(id,name,age) VALUES(`+param.id+`,'`+param.name+`',`+param.age+`)`);
      return response;
    }
  }
  module.exports = Data;
  module.exports.getInstance = () => new Data();