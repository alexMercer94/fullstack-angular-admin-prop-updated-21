const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);

        console.log('BD is connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar en la bd');
    }
};

module.exports = {
    dbConnection,
};
