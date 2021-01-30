const DriversController  = require('../controllers/drivers_controller');
// post => create in database
module.exports = (app) =>{
  app.get('/api/drivers',
   DriversController.all);
  //
  // //
  app.post('/api/drivers',
   DriversController.create);
  // //
  app.put('/api/drivers/:id',
   DriversController.edit);
  // // //
  app.delete('/api/drivers/:id',
   DriversController.delete)


}
