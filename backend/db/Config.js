const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@first-cluster.ayuviqa.mongodb.net/reactcrud?retryWrites=true&w=majority')