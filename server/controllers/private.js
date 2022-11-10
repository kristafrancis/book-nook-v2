exports.getPrivateRoute = (req, res, next) => {
    res
    .status(200)
    .json({
        success: true,
        data: 'You have acces to this private route'
    });
};