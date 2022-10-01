const express = require('express');
const app = express();
const redis = require('redis');
const subscribe = redis.createClient();

//subscribe channel
subscribe.subscribe('ordersystem');
subscribe.on('message', (channel, message) => {
    console.log(`The channel for payment is ${channel}`);
    console.log(`The message for payment is`, JSON.parse(message));
})

app.listen(3001, () => {
    console.log(`The payment running at 3001`);
})