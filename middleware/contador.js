let operacionCount = 0;

const contadorMiddleware = (req, res, next) => {
    operacionCount++;
    next();
};

const getOperacionCount = (req, res) => {
    res.status(200).json({ operacionesRealizadas: operacionCount });
};

module.exports = { contadorMiddleware, getOperacionCount };