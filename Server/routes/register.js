var express = require('express');
var router = express.Router();

var dev_List = new Array();
var mng_List = new Array();

/* GET listing. */
router.get('/', function(req, res, next) {
  for(let i = 0; i<dev_List.length; i++){
    console.log(dev_List[i])
  } 
  
  for(let i = 0; i<mng_List.length; i++){
    console.log(mng_List[i])
  } 
  
  res.send('Consoled out');
});


/* POST register. */
router.post('/manager', function(req, res, next) {
  mng_List.push(req.body);

  res.send('Manager Registered');
});

router.post('/device', function(req, res, next) {
  dev_List.push(req.body);

  res.send('Device Registered');
});

module.exports = router;
