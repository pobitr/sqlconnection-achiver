const dao = require('../dao/admin_dao');
const common = require('../services/commonService');
const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/allAdmin', async (req, res) => {
	try{
		// Changed dao.allUser to dao.allAdmin because there is no function called allUser() --> by wasiq
		const result = await dao.allAdmin(req.body);
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'user found!';
			res.send(common.sendResponse(true, 1, message, result, 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});
// login conttroler 
router.post('/login', async (req, res) => {
	try{
		if (req.body.user === undefined || req.body.password === undefined) {
			res.send(common.sendResponse(false, 0, 'user password missing', null, 401))
		} else {
			
			const result = await dao.login(req.body);
			if (result.error) {
				res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
			} else {
				let message = 'User found.'
				if (result.length==0) {
					message = 'Wrong email or password'
					res.send(common.sendResponse(false, 1, message, null, 0));
				}else{
					res.send(common.sendResponse(true, 1, message, result[0], 0));
				}
				
			}
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});

