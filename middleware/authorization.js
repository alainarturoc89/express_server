/*module.exports = function authorization(...permittedRoles) {
    return (req, _res, next) => {
        const { user } = req

        if (user && permittedRoles.includes(user.role)) {
            next();
        } else {
            _res.status(403).json({ message: "Sin acceso" });
        }
    }
}*/

module.exports = function authorization(req, _res, next) {
    const { user } = req
    if (user) { next(); }
    else { _res.status(403).json({ message: "Sin acceso" }); }
}