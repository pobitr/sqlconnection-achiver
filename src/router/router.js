const express = require('express');
const common = require('../services/commonService')
const router = express.Router();

const admin = require('../controller/admin_controller')
const course = require('../controller/course_controller')
const notice = require('../controller/notice_controller')

router.use('/admin', admin );
router.use('/course', course);
router.use('/notice', notice);

router.post('/upload',async (req,res)=>{
    try{
        const result = await common.uploadFile(req);
        res.send(result)
    }catch(e){
        console.log(e);
        res.send({'success':false,"massage":"File not uploaded"})
    }
})

module.exports = router;