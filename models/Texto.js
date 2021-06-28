const {Model, DataTypes } = require("sequelize");
//const sequelize = new Sequelize();

class Comments extends Model{
    static init(sequelize){
        super.init({
            ID: DataTypes.INTEGER,
            comment: DataTypes.STRING
        }, {
            sequelize,
        });
    }
}
module.exports = Comments;