const express = require("express");
const router = express.Router();

const { home, handlePostURLs, handleRedirectURLs, handleHistory } = require("../controllers/urls");

router.route('/').get(home).post(handlePostURLs);
router.route('/history').get(handleHistory);
router.route('/:sId').get(handleRedirectURLs);


module.exports = router;