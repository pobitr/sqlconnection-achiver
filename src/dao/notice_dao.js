const db = require('../db/dbConn');
const common = require('../services/commonService');

//
module.exports.addNotice = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	="INSERT INTO `notice`(`noticeTitle`, `noticeDesc`) VALUES ('"+data.noticeTitle+"','"+data.noticeDesc+"')";

            
            	
			
			db.connection.query(sql,function (err, success){
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    console.log(success)
                    resolve(success)
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}

//
module.exports.allNotice  = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"SELECT * FROM `notice` WHERE `is_delete`=0";
			db.connection.query(sql,async function (err, success){
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(success)
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}