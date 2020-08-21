require('dotenv').config()
module.exports = {
    development: {
        port: process.env.PORT || 4000,
        privateKey: 'MY_VERY_SECRET_KEY',
        databaseUrl: 'mongodb+srv://marcho:marcho-password@cluster0.tfnjr.mongodb.net/pets?retryWrites=true&w=majority'
    },
    production: {
        port: process.env.PORT || 4000,
        privateKey: 'MY_VERY_SECRET_KEY',
        databaseUrl: 'mongodb+srv://marcho:marcho-password@cluster0.tfnjr.mongodb.net/pets?retryWrites=true&w=majority'
    }
};