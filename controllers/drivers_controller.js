const Driver = require('../models/driver');

//contain all business logic
module.exports = {
 
  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Driver.find({}).limit(limit)
    .then(drivers => res.status(200).send(drivers))
    .catch(next)
  },
  create(req, res, next){
    // next from middelware
    const driverProps = req.body;
    Driver.create(driverProps)
      .then(driver =>
        res.status(201).send(driver)) // 201 to user
      .catch(next) // if error send to next middle ware


  },
// //
  edit(req, res, next){
    const driverId = req.params.id;
    const driverProps = req.body;
    // get user and update
    Driver.findByIdAndUpdate({_id: driverId}, driverProps)
    // if success get user after updated
    .then(() => Driver.findById({_id: driverId}))
    // //if you get user send it
    .then(driver => res.status(200).send(driver))
    // //else send to middle
    .catch(next);
  },
// //
  delete(req, res, next){
    const driverId = req.params.id;
    Driver.findByIdAndRemove({_id: driverId})
    // in case is removed return 204 abject?
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }
};
