# argus
An HTTP request logger built for express.js devs.

## Introduction

Argus is a request logger and viewer for [ExpressJS](https://expressjs.com). It allows developers log and view http requests made to their web application.

<img width="1461" alt="Argus" src="https://i.ibb.co/fGNc4wF/Argus-Logger-Google-Chrome-4-18-2021-9-09-25-PM.png">

## Installation 

Run the following command to install Horus on your project:

```bash
npm install argus-staging-server
```

### Initiate Argus

```javascript
const express = require("express");
const app = express();
const Argus = require("argus-staging-server");
const http = require("http");

const server = http.Server(app);
server.listen(5000);

Argus(app, {
  database: "mongodb://localhost/horus",
  server,
  baseURL: "/logs",
});

// You can make argus listen on another port entirely

Argus(app, {
  database: "mongodb://localhost/horus",
  port: 7000,
  baseURL: "/logs",
})

app.get("/", (req, res) => res.send("Hello world"));

module.exports = app;
```

>**NOTE**<br/>
> Only Mongodb Database is support for now.

### Serve dashboard

<img width="1461" alt="Argus" src="https://i.ibb.co/fGNc4wF/Argus-Logger-Google-Chrome-4-18-2021-9-09-25-PM.png">

<img width="1461" alt="Argus" src="https://i.ibb.co/3ym9VWz/Argus-Logger-Google-Chrome-4-18-2021-9-09-40-PM.png">

>**NOTE**<br/>
> Visit `/{baseURL}` !.e /logs on the port configured or the application port (depending on your config) to view the dashboard
