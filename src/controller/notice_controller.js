const dao = require('../dao/notice_dao');
const common = require('../services/commonService');
const express = require('express');
const router = express.Router();

module.exports = router;

//
router.post('/addNotice', async (req, res) => {
	try{
		
		const result = await dao.addNotice(req.body);
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
router.post('/allNotice', async (req, res) => {
	try{
		
		const result = await dao.allNotice(req.body);
		//console.log(result)
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'Notices Found!';
			res.send(common.sendResponse(true, 1, message, result, 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});
router.post('/noticeDetails', async (req, res) => {
	try{
		
		const result = await dao.noticeDetails(req.body);
		//console.log(result)
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'Notice Found!';
			res.send(common.sendResponse(true, 1, message, result[0], 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});

//
router.post('/noticeUpdate', async (req, res) => {
	try{
		
		const result = await dao.noticeUpdate(req.body);
		//console.log(result)
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'Notice Update !!';
			res.send(common.sendResponse(true, 1, message, result[0], 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});

//
router.post('/noticeDelete', async (req, res) => {
	try{
		
		const result = await dao.noticeDelete(req.body);
		//console.log(result)
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'Notice has been Deleted!';
			res.send(common.sendResponse(true, 1, message, result[0], 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});
