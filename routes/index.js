
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Applicant = mongoose.model('Applicant');
var Twocheckout = require('2checkout-node');
var app = express();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// Get and return all applicants 
router.get('/applicants', function(req, res, next) {
  Applicant.find(function(err, applicants){
    if (err) {
      return next(err);
    }
    res.json(applicants);
  });
});

app.post('/order', function(req, res) {
	var tco = new Twocheckout({
        sellerId: "sandbox-seller-id",            // Seller ID, required for all non Admin API bindings
        privateKey: "sandbox-private-key",        // Payment API private key, required for checkout.authorize binding
        sandbox: true                             // Uses 2Checkout sandbox URL for all bindings
    });

    var params = {
        "merchantOrderId": "123",
        "token": req.body.token,
        "currency": "USD",
        "total": "1.00",
        "billingAddr": {
            "name": "Testing Tester",
            "addrLine1": "123 Test St",
            "city": "Columbus",
            "state": "Ohio",
            "zipCode": "43123",
            "country": "USA",
            "email": "example@2co.com",
            "phoneNumber": "5555555555"
        }
    };

    tco.checkout.authorize(params, function (error, data) {
        if (error) {response.send(error.message);} else {response.send(data.response.responseMsg);}
    });
});

module.exports = router;
