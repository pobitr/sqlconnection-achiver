const db = require('../db/dbConn');
const common = require('../services/commonService');

module.exports.addCourse = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	="INSERT INTO `course`(`courseCode`, `courseName`, `courseDuration`, `certificateAvailable`, `courseDescription`, `fileName`) VALUES ('"+data.courseCode+"','"+data.courseName+"','"+data.courseDuration+"','"+data.certificateAvailable+"','"+data.courseDescription+"','"+data.fileName+"')";

            
            	
			
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
//
module.exports.allcourse  = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"SELECT * FROM `course` WHERE `is_delete`=0";
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