// mcp
const { startHttpServer } = require('./mcp.js');

/**
 * aws controller
 */
module.exports = (app) => {
  // mcp
  app.post('/mcp', (req, res) => {
    startHttpServer(req, res);
  });
};
