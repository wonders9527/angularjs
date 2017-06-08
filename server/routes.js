
var actions = require('./models/actions');

module.exports = function (app) {
//    app.get('/index', actions.index);
    app.post('/login', actions.login);
    app.get('/logout', actions.logout);
    app.post('/reg', actions.reg);
    app.get('/checkInfo',actions.checkInfo);
    app.get('/qushuju',actions.qushuju);
};
