const  User_table = require('./User_table');

const migrate = () =>{
    User_table();
}
module.exports = migrate;