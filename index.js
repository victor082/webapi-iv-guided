const server = require('./api/server.js');

// We must make the port dynamic
const port = process.env.PORT || 4000; 

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

