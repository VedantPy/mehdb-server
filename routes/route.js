const express = require("express");
const router = express.Router();
const agePopsController = require('../controllers/agepopscontroller');
const loginController = require('../controllers/loginController');
const registerUser = require('../controllers/registerController');
const uploadData = require('../models/uploadCsv');
const uploadController = require('../controllers/uploadcsvController');
const schemeController = require('../controllers/schemeController');
const authenticate = require('../middleware/authenticate');


router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/agepops", authenticate, agePopsController.getAgePops);
router.post("/login" ,loginController.login);
router.post("/register", registerUser);
router.post("/upload",authenticate,uploadController.upload);

router.post("/addscheme",authenticate,schemeController.addSchemeDetails);

router.get('/getschemes',authenticate, schemeController.getAllSchemes);
router.get('/getschemesbyname/:name',authenticate,schemeController.getSchemeByName);
router.get('/getschemesbyid/:id', authenticate,schemeController.getSchemeById);

router.put("/updatescheme/:id", authenticate,schemeController.updateSchemeDetails);
router.post("/deletescheme/:id", authenticate,schemeController.deleteSchemeDetails);
router.post("/deletescheme/:name", authenticate,schemeController.deleteSchemeDetailsByName);
router.post('/bulkdelete', authenticate,schemeController.bulkDelete);

// temp route for testing authentication
router.get('/temp', authenticate, async (req, res) => {
  // console.log("Hello from tempController.js")
  const resObj = {
    user: req.rootUser,
    message: "Hello from tempController.js"
  }
  res.send(resObj);
})

module.exports = router;
