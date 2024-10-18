const User_table = require('./User_table');
const Companiauth_table = require('./Auth/compani_table');

const migrate = async () => {
    try {
        // Migrate User_table
        await User_table();
        console.log('User_table migrated successfully');
    } catch (error) {
        console.error('Error migrating User_table:', error);
    }

    try {
        // Migrate Companiauth_table
        await Companiauth_table();
        console.log('Companiauth_table migrated successfully');
    } catch (error) {
        console.error('Error migrating Companiauth_table:', error);
    }
};

module.exports = migrate;
