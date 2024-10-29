const db = require('../../config/config');

class Post_job {
    async post_job(data) {
        const companies_id = 1;
        const industries = JSON.stringify(data.industries);
        const staff_skills = JSON.stringify(data.skills);
        console.log(data.description,
            data.dropdown,
            industries,
            data.salary_field1,
            data.salary_field2,
            data.internshipType,
            data.job_title,
            data.max_experience,
            data.min_experience,
            data.nm_openings,
            staff_skills,
            data.timing);

        const query = `INSERT INTO job_posts (description, dropdown, industries, salary_field1, salary_field2, internshipType, job_title, max_experience, min_experience, nm_openings, skills_id, timing) 
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [
            data.description,
            data.dropdown,
            industries,
            data.salary_field1,
            data.salary_field2,
            data.internshipType,
            data.job_title,
            data.max_experience,
            data.min_experience,
            data.nm_openings,
            staff_skills,
            data.timing
        ];

        // Return a promise to handle asynchronous behavior
        return new Promise((resolve, reject) => {
            db.query(query, values, (err, result) => {
                if (err) {
                    console.error("Insert error:", err);
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    async get_allpost(page, pageSize) {
        const offset = (page - 1) * pageSize;
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM job_posts LIMIT ? OFFSET ?`;
            db.query(query, [pageSize, offset], (err, result) => {
                if (err) return reject(err);
                db.query('SELECT COUNT(*) as count FROM job_posts', (err, countResult) => {
                    if (err) return reject(err);
                    const totalCount = countResult[0].count;
                    resolve({ data: result, total: totalCount });
                });
            });
        });
    }


}

module.exports = new Post_job();
