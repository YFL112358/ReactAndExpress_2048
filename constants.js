'use-strict';

exports.IN_DEVELOPMENT = ('development' == process.env.NODE_ENV);
exports.NOT_IN_PRODUCTION = ('production' != process.env.NODE_ENV);

exports.RET_CODE = {
  OK: 1000,
  FAILURE: 1001,
};

exports.ROUTE_PATHS = {
	ROOT: "/",
	BASE: "/base",
	TEST: "/test",
	GAME:"/game",
};

exports.ROUTE_PARAMS = {
	MAGIC_HASH: "/:magicHash",
};

exports.LANG = {
  EN_GB: {
    TITLE: {
      APP_NAME: "ExpressAndReactDemo",
      ADMIN_PAGE: "Admin Page",
		}
	}
}
