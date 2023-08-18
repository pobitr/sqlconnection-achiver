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
			var sql 	=	"SELECT * FROM `notice` WHERE `is_delete`=0 ORDER BY `id` DESC";
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
module.exports.noticeDetails = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"select * from notice where id='"+data.id+"' AND is_delete=0";
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
module.exports.noticeUpdate = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	= "UPDATE `notice` SET `noticeTitle`='"+data.noticeTitle+"',`noticeDesc`='"+data.noticeDesc+"' WHERE id='"+data.id+"' AND is_delete=0";
				
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
//
module.exports.noticeDelete = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"UPDATE `notice` SET `is_delete`='1' WHERE id='"+data.id+"'";
			console.log(sql)
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
