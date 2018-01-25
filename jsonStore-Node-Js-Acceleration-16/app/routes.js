let jsonController = require('./controllers/jsonController')

const Route = (app) => {

    app.post('/docs', jsonController.createNewData);

    app.get('/docs/:id', jsonController.getData);

    app.put('/docs/:id', jsonController.updateData);

    app.delete('/docs/:id', jsonController.deleteData);

    app.post('/api/docs', jsonController.createNewData);

    app.get('/api/docs/:id', jsonController.getData);

    app.put('/api/docs/:id', jsonController.updateData);

    app.delete('/api/docs/:id', jsonController.deleteData);
}

module.exports = Route;
