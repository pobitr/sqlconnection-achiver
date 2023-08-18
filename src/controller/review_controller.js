const dao = require('../dao/review_dao');
const common = require('../services/commonService');
const express = require('express');
const router = express.Router();

module.exports = router;



//
router.post('/addReview', async (req, res) => {
	try{
		
		const result = await dao.addReview(req.body);
		//console.log(result)
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'Added Succesfully';
			res.send(common.sendResponse(true, 1, message, result, 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});
//
router.post('/allAdminReview', async (req, res) => {
	try{
		
		const result = await dao.allAdminReview(req.body);
		//console.log(result)
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'Review Found!';
			res.send(common.sendResponse(true, 1, message, result, 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});