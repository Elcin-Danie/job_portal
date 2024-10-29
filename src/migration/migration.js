const User_table = require('./User_table');
const Companiauth_table = require('./Auth/compani_table');
const organizationForm = require('./compani/organizationForm')
const Intern_post_data = require('./compani/intern_post_table')
const Job_post_data = require('./compani/job_posts_table');
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
    try {
        await organizationForm();
        console.log("Organization table migrated successfully");
    } catch (error) {
        console.log("Organization table migrated successfully");
    }
    try {
        await Intern_post_data();
        console.log("Internships table migrated successfully");
    } catch (error) {
        console.log("Internships table migrated successfully");
    }
    try {
        await Job_post_data();
        console.log("Job table migrated successfully");
    } catch (error) {
        console.log("Job table migrated successfully");
    }
};

module.exports = migrate;
