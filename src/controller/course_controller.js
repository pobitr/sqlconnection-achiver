const dao = require('../dao/course_dao');
const common = require('../services/commonService');
const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/addCourse', async (req, res) => {
	try{
		
		const result = await dao.addCourse(req.body);
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
router.post('/allcourse', async (req, res) => {
	try{
		
		const result = await dao.allcourse(req.body);
		//console.log(result)
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'Product Found!';
			res.send(common.sendResponse(true, 1, message, result, 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});