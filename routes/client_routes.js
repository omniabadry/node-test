const clientController = require('../controllers/clients_controller');

module.exports = (app) => {
    app.get('/api/client',
        clientController.all);
    // //
    app.post('/api/client',
        clientController.create);
    // //
    app.put('/api/client/:id',
        clientController.edit);
    // // //
    app.delete('/api/client/:id',
        clientController.delete)
}