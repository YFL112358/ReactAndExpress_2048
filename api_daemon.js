const express = require('express');
const app = express();
const http = require('http').Server(app);
const constants = require('./constants');

// Mount static resource entry, reference http://expressjs.com/en/api.html
app.use(constants.ROUTE_PATHS.BASE + '/bin', express.static('web/bin'));

// Body parser middleware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Pug template. Reference http://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'pug');
app.set('views', './pugs');

// Common vender js bundle;
const vendorJsBundle = '/bin/vendor.bundle.js';

/*------------------------*/
//---Test router begins.---

const testPageRouter = express.Router();
testPageRouter.get(constants.ROUTE_PATHS.ROOT, function(req, res) {
  const jsBundle = '/bin/test.bundle.js';
  res.render('index', {
    title: constants.LANG.EN_GB.TITLE.APP_NAME,
    vendorJsBundleUri: constants.ROUTE_PATHS.BASE + vendorJsBundle,
    jsBundleUri: constants.ROUTE_PATHS.BASE + jsBundle,
  });
});
app.use(constants.ROUTE_PATHS.BASE + constants.ROUTE_PATHS.TEST, testPageRouter);

//---Test router ends.---

/*------------------------*/
//---Game router begins.---

const gamePageRouter = express.Router();
gamePageRouter.get(constants.ROUTE_PATHS.ROOT, function(req, res) {
  const jsBundle = '/bin/game.bundle.js';
  res.render('game', {
    title: constants.LANG.EN_GB.TITLE.APP_NAME,
    vendorJsBundleUri: constants.ROUTE_PATHS.BASE + vendorJsBundle,
    jsBundleUri: constants.ROUTE_PATHS.BASE + jsBundle,
  });
});
app.use(constants.ROUTE_PATHS.BASE + constants.ROUTE_PATHS.GAME, gamePageRouter);

//---game router ends.---
/*------------------------*/

// Binds to port 9090 and starts daemon.
http.listen(9090, function() {
	console.log('listening');
});
