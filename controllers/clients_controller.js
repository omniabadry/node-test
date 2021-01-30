const Client = require('../models/clients');

module.exports = {

    all(req, res, next) {
        Client.find({}).then(client => res.status(200).send(client)).catch(next)
    },
    create(req, res, next) {
        const clientProps = req.body;
        Client.create(clientProps).then(client =>
                res.status(201).send(client))
            .catch(next)
    },
    // //
    edit(req, res, next) {
        const clientId = req.params.id;
        const clientProps = req.body;

        Client.findByIdAndUpdate({ _id: clientId }, clientProps)
            .then(() => Client.findById({ _id: clientId }))
            .then(client => res.status(200).send(client))
            .catch(next);
    },
    // //
    delete(req, res, next) {
        const clientId = req.params.id;
        Client.findByIdAndRemove({ _id: clientId })
            .then(client => res.status(204).send(client))
            .catch(next);
    }
};