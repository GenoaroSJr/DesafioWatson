require('dotenv').config();

var exec = require('child_process').exec;
var cmd = 'mysql -u ' + process.env.DB_USER + ' -p ' + process.env.DB_PASS + ' < MigrationDB.sql';

exec(cmd, function(error, stdout, stderr) {
    if (error) {
        console.log(error);
    } else {
        console.log("Migration success!");
    }
});

