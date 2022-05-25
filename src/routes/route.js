const express = require('express');
const router = express.Router();

// these are controller and middelware imports.
const expenseControler =require("../controllers/expenseController")




//these are all the API's which we will be using for each of the problem statement.
router.post('/userdetails', expenseControler.createexpenses ) //done

router.get('/userdetails',expenseControler.getexpenses); //done



module.exports = router;