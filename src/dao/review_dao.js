const db = require('../db/dbConn');
const common = require('../services/commonService');


//
module.exports.addReview = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	="INSERT INTO `userRet`(`userName`, `courseName`, `rating`, `retText`) VALUES ('"+data.userName+"','"+data.courseName+"','"+data.rating+"','"+data.retText+"')";
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
module.exports.AllReview  = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"SELECT * FROM `userRet` WHERE `courseName` LIKE '%"+data.courseName+"%' AND `is_delete`=0  ORDER BY `id` DESC";
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
//
module.exports.allAdminReview  = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"SELECT * FROM `userRet` WHERE `is_delete`=0  ORDER BY `id` DESC";
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