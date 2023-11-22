const express = require('express');
const router = express.Router();
const agePopsController = require('../controllers/agepopscontroller');
const loginController = require('../controllers/loginController');
const registerUser = require('../controllers/registerController');
const uploadData = require('../models/uploadCsv');
const uploadController = require('../controllers/uploadcsvController');
const schemeController = require('../controllers/schemeController');
// const authenticate = require('../middleware/authenticate');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/agepops', agePopsController.getAgePops);
router.post('/login', loginController.login);
router.post('/register', registerUser);
router.post('/upload', uploadController.upload);


router.post('/addscheme', schemeController.addSchemeDetails);
router.get('/getscheme', schemeController.getSchemeDetails);
router.get('/getscheme/:name', schemeController.getSchemeByName);
router.put('/updatescheme/:id', schemeController.updateSchemeDetails)
router.put('/updatescheme/:name', schemeController.updateSchemeDetailsByName)
router.get('/deletescheme/:id', schemeController.deleteSchemeDetails)

// temp route for testing authentication
// router.get('/temp', authenticate, async (req, res) => {
//   // console.log("Hello from tempController.js")
//   const resObj = {
//     user: req.rootUser,
//     message: "Hello from tempController.js"
//   }
//   res.send(resObj);
// })

module.exports = router;
