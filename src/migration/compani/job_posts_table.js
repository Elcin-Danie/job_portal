const db = require('../../config/config')

const Job_post_data = () => {
    const query = `
    CREATE TABLE job_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,            -- Primary key for the table
    description TEXT,                             -- Description as text
    dropdown TINYINT NOT NULL, -- Dropdown selection
    industries JSON,                             -- Industries stored as a JSON array
    salary_field1 TINYINT NOT NULL,                    -- Input field 1
    salary_field2 TINYINT NOT NULL ,                    -- Input field 2
    internshipType TINYINT NOT NULL,             -- Internship type as a tiny integer
    job_title VARCHAR(255) NOT NULL,             -- Job title as a string
    max_experience TINYINT NOT NULL,             -- Maximum experience as a tiny integer
    min_experience TINYINT NOT NULL,             -- Minimum experience as a tiny integer
    nm_openings INT NOT NULL,                    -- Number of openings as an integer
    skills_id INT,                               -- Foreign key for skills
    timing TINYINT NOT NULL,                     -- Timing as a tiny integer
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (skills_id) REFERENCES skills(id) -- Foreign key constraint
)`;
db.query(query,(err, result) =>{
    if(err) throw err;
    if (result.affectedRows > 0) {
        console.log('Compani table created successfully.');
    } else {
        console.log('Compani table already exists.');
    } 
})
}
 module.exports = Job_post_data;