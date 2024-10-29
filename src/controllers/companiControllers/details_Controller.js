const organizations_form1 = require('../../models/com_models/organizationTable')
const companies_intern_inset = require('../../models/com_models/internships_post_models');
const job_post_models = require('../../models/com_models/job_post_models');
class FormTwo {
    async form_2(req, res) {
        const { company_name, company_description, org_location, industries, employees_count } = req.body;
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const logo = req.file.path;
        const user_id = 1;  //temprory solution 
        try {
            await organizations_form1.form_one(user_id, company_name, company_description, org_location, industries, employees_count, logo)
            console.log('hello');
            return res.status(201).json({ message: "Your dats upload successfully..", success: true })
        } catch (err) {
            return res.status(400).json({ error: 'User already exists or invalid data. ' + err.message, success: false });
        }
    }
    async post_internship(req, res) {
        if (!req) return res.status(400).json({ error: "no data found" });
        try {
            const data = req.body;
            // return res.send(data);
            await companies_intern_inset.intern(data);
            return res.status(201).json({ message: "Update successfully", success: true });
        } catch (err) {
            return res.status(400).json({ Error: err.message });
        }
    } async get_skils(req, res) {
        try {
            const data = await organizations_form1.get_skill()
            return res.status(201).json({ message: 'request successfully', data: data });
        } catch (err) {
            return res.status(400).json({ error: 'Youe request is unsuccessfully.' + err.message })
        }
    } async post_job(req, res) {
        if (!req.body) return res.status(400).json({ error: 'data notfound..' });
        try {
            const data = req.body;
            await job_post_models.post_job(data);
            return res.status(201).json({ message: 'Your job post successfully', success: true });

        } catch (err) {
            return res.status(400).json({ error: 'job post unsuccessfully..' + err.message })
        }
    } async get_posts(req, res) {

        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        try {
            const data = await job_post_models.get_allpost(page, pageSize);
            return res.status(200).json({ message: "data get successfully", data: data, status: true });
        } catch (err) {
            return res.status(200).json({ err: 'connection error Or' + err.message });
        }
    }
}

module.exports = new FormTwo();
