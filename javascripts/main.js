const initializer = require('./dataGateKeeper');
const apiKeys = require('./apiKeys');

initializer();
apiKeys.retrieveKeys();
