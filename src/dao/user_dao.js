const db = require('../db/dbConn');
const common = require('../services/commonService');

//
module.exports.addUser = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	="INSERT INTO `user`(`userName`, `userEmail`, `userPhone`, `userAge`, `UserPassword`) VALUES ('"+data.userName+"','"+data.userEmail+"','"+data.userPhone+"','"+data.userAge+"','"+data.UserPassword+"')";

            
            	
			
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
module.exports.userLogin = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"SELECT * FROM `user` WHERE `userEmail`='"+data.userEmail+"' AND `UserPassword` = '"+data.UserPassword+"' AND is_delete =0";
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
