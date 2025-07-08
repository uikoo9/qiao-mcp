// options
const options = {
  cros: true,
};

// init
(async () => {
  const app = await require('qiao-z')(options);
  app.listen(7001);
})();
