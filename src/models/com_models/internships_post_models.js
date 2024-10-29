const db = require('../../config/config');

class Post_job {
    async intern(data) {
        const companies_id = 1;
        const parks = JSON.stringify(data.parks);
        const staff_skills = JSON.stringify(data.staff_skills);
        const query = `INSERT INTO internships (companies_id, intern_duration, intern_start, candidate_preference, company_name, industries2, internship_responsibility_description, internship_type, job_timing, mobile, nm_openings, parks, staff_skills) 
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [
            companies_id,
            data.intern_duration, 
            data.intern_start || null,
            data.candidate_preference, 
            data.company_name,
            data.industries2,
            data.int_respossibility_description, 
            data.internship_Type,
            data.job_timing,
            data.mobile,
            data.nm_openings,
            parks,             
            staff_skills      
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
}

module.exports = new Post_job();
