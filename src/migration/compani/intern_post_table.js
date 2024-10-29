const db = require('../../config/config')

const Intern_post_data = () => {
    const query = `
    CREATE TABLE Internships (
    id INT AUTO_INCREMENT PRIMARY KEY,       
    companies_id INT NOT NULL,               
    intern_duration INT NOT NULL,             
    intern_start INT NOT NULL,                
    candidate_preference TEXT NOT NULL,       
    company_name VARCHAR(255) NOT NULL,       
    industries2 INT NOT NULL,                  
    internship_responsibility_description TEXT NOT NULL, 
    internship_type INT NOT NULL,              
    job_timing INT NOT NULL,                   
    mobile VARCHAR(15),                        
    nm_openings INT NOT NULL,                 
    parks JSON,                                
    staff_skills JSON,                        
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    FOREIGN KEY (companies_id) REFERENCES Companies(id)  
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
 module.exports = Intern_post_data;