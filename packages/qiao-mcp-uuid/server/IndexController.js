// mcp
const { startServer } = require('./mcp.js');

/**
 * aws controller
 */
module.exports = (app) => {
  // mcp
  app.get('/mcp', (req, res) => {
    startServer(req, res);
  });

  // mcp
  app.post('/mcp', (req, res) => {
    startServer(req, res);
  });
};
