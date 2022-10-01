const express = require('express');
const app = express();
const redis = require('redis');
const publish = redis.createClient();
//await publish.connect()
app.get('/order', (req, res) => {
    
    const order = [
        {
            productId: 1,
            price: 1000
        },
        {
            productId: 2,
            price: 2000
        }        
    ]
    //Step -payment.js and sendmail.js 
  
    publish.publish('ordersystem', JSON.stringify(order))

    res.json({
        status: 'success',
        message: 'Thank for your order!'
    })
    //req.jon({})
})

app.listen(3000, () => {
    console.log(`The order running at 3000`);
})