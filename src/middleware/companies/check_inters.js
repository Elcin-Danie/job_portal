
class Check_companies {
    async checkJson(req, res, next) {
        if (req.is('application/json')) {
           next();
        } else {
            res.status(400).json({ message: 'Your payload was empty' });
        }
    }
}
module.exports = new Check_companies();
