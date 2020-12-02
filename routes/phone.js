const express = require('express');
const phoneController = require('../controllers/phoneItems');
const router = express.Router();

router.get('/phone', phoneController.getPhoneItems);
router.post('/phone', phoneController.postPhoneItems);
router.post('/phone/delete',phoneController.deletePhone);

module.exports = router;