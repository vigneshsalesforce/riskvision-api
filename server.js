const http = require('http');
const app = require('./app');
const config = require('./src/config');
const { landlordDbConnection, initializeAllTenants } = require('./src/config/database');
const { Server } = require('ws');

const server = http.createServer(app);
const wss = new Server({ server });


wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('received: %s', message);
    ws.send(`Hello Client, you sent -> ${message}`)
  });
  ws.on("close", () => {
    console.log("Client has disconnected")
  })
  ws.on('error', (error) => {
      console.log("Error:", error)
  })
});

(async () => {
    try {
      // Step 1: Connect to the landlord database
      await landlordDbConnection();
  
      // Step 2: Initialize all tenant databases
      await initializeAllTenants();
  
      // Step 3: Start the server
      server.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
      });
    } catch (error) {
      console.error('Error during server initialization:', error);
      process.exit(1); // Exit on failure
    }
  })();