/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/
const express = require('express');
const path = require('path');

const DEFAULT_PORT = 3000;


//initialize express.
const app = express();

// Initialize variables.
let port = DEFAULT_PORT; // -p {PORT} || 30662;

app.use(express.static('public'));

app.get("/blank", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/blank.html"));
});

// Set up a route for index.html.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start the server.
app.listen(port);
console.log(`Listening on port ${port}...`);
