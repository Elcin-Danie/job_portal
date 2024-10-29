const db = require('../../config/config');

class OrganizationFormData {

    async form_one(userId, companyName, companyDescription, orgLocation, industries, employeesCount, logoPath) {
        console.log(userId, companyName, companyDescription, orgLocation, industries, employeesCount, logoPath);
        const query = 'INSERT INTO organizations (user_id, company_name, company_description, org_location, industries, employees_count, logo_path) VALUES (?, ?, ?, ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [userId, companyName, companyDescription, orgLocation, industries, employeesCount, logoPath], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }
    async get_skill() {
        const query = 'SELECT * FROM skills';
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
}

module.exports = new OrganizationFormData();
