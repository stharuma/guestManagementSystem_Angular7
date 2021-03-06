const express = require('express');
const bodyParser = require('body-parser');
const Contact = require('../models/contact');
const router = express.Router();

var dbFunctions = require('../models/connector');
// ****** validation rules START ****** //
const valFunctions = require('../validators/validate');
// ****** validation rules END ****** //

// app Routes
// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
router.post('/signup', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.createUser(req,res);
});
router.post('/login', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.loginUser(req,res);
});
router.post('/sethost', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.setHost(req,res);
});
router.post('/updatehost', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.updateHost(req,res);
});
router.post('/gethosts', jsonParser, function (req, res) {
   // if(valFunctions.checkInputDataNULL(req,res)) return false;
   // if(valFunctions.checkInputDataQuality(req,res)) return false;
    if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.getHosts(req,res);
});
router.post('/gethost', jsonParser, function (req, res) {
    // if(valFunctions.checkInputDataNULL(req,res)) return false;
    // if(valFunctions.checkInputDataQuality(req,res)) return false;
     if(valFunctions.checkJWTToken(req,res)) return false;
     dbFunctions.getHost(req,res);
 });
 router.post('/deletehost', jsonParser, function (req, res) {
    // if(valFunctions.checkInputDataNULL(req,res)) return false;
    // if(valFunctions.checkInputDataQuality(req,res)) return false;
     if(valFunctions.checkJWTToken(req,res)) return false;
     dbFunctions.deleteHost(req,res);
 });
 router.post('/setguest', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.setGuest(req,res);
});
router.post('/updateguest', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.updateGuest(req,res);
});
router.post('/getguests', jsonParser, function (req, res) {
   // if(valFunctions.checkInputDataNULL(req,res)) return false;
   // if(valFunctions.checkInputDataQuality(req,res)) return false;
    if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.getGuests(req,res);
});
router.post('/getguest', jsonParser, function (req, res) {
    // if(valFunctions.checkInputDataNULL(req,res)) return false;
    // if(valFunctions.checkInputDataQuality(req,res)) return false;
     if(valFunctions.checkJWTToken(req,res)) return false;
     dbFunctions.getGuest(req,res);
 });
 router.post('/deleteguest', jsonParser, function (req, res) {
    // if(valFunctions.checkInputDataNULL(req,res)) return false;
    // if(valFunctions.checkInputDataQuality(req,res)) return false;
     if(valFunctions.checkJWTToken(req,res)) return false;
     dbFunctions.deleteGuest(req,res);
 });
 router.post('/getregister', jsonParser, function (req, res) {
    // if(valFunctions.checkInputDataNULL(req,res)) return false;
    // if(valFunctions.checkInputDataQuality(req,res)) return false;
    if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.getRegister(req,res);
});
router.post('/setregister', jsonParser, function (req, res) {
    //if(valFunctions.checkInputDataNULL(req,res)) return false;
    //if(valFunctions.checkInputDataQuality(req,res)) return false;
    if(valFunctions.checkJWTToken(req,res)) return false;
    dbFunctions.setRegister(req,res);
});

// contact Api temp

router.get('/contacts', (req, res, next)=>{
    Contact.find((err, contacts)=>{
      res.json(contacts);
    });
});

router.post('/contacts', (req, res, next)=>{
    var newContact = new Contact({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      phone : req.body.phone
    });
    newContact.save((err, contact)=>{
        if(err){
            res.json({msg:"Failed to add contact"});   
        }else{
            res.json({msg:"Contact added successfully"});
        }
    })
});

router.delete('/contacts/:id', (req, res, next)=>{
   Contact.remove({_id: req.params.id}, (err, result)=>{
       if(err){
           res.json(err);
       }else {
        res.json(result);
       }
   });
});

module.exports= router;