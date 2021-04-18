# argus
An HTTP request logger built for express.js devs.

## Introduction

Argus is a request logger and viewer for [ExpressJS](https://expressjs.com). It allows developers log and view http requests made to their web application.

<img width="1461" alt="Argus" src="https://ibb.co/zH2kGvx">

<img width="1461" alt="Argus" src="https://ibb.co/6R07GbB">

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

<img width="1461" alt="Argus" src="https://ibb.co/zH2kGvx">

<img width="1461" alt="Argus" src="https://ibb.co/6R07GbB">

>**NOTE**<br/>
> Visit `/{baseURL}` !.e /logs on the port configured or the application port (depending on your config) to view the dashboard
