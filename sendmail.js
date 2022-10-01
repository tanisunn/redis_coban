const express = require('express');
const app = express();
const redis = require('redis');
const subscribe = redis.createClient();

//subscribe channel
subscribe.subscribe('ordersystem');
subscribe.on('message', (channel, message) => {
    console.log(`The channel for sendmail is ${channel}`);
    console.log(`The message for sendmail is `, JSON.parse(message));
})

app.listen(3002, () => {
    console.log(`The sendmail running at 3002`);
})
