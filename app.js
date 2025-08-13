// const sequelize = require('./config/database');
// const User = require('./models/User');

// sequelize.sync({ force: true }).then(async () => {
//     console.log("Database synced!");

//     // Create a new user
//     const newUser = await User.create({
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john.doe@example.com'
//     });
//     console.log('User created:', newUser.toJSON());

//     // Read users
//     const users = await User.findAll();
//     console.log('All users:', users);

//     // Update a user
//     const user = await User.findByPk(1);
//     user.lastName = 'Smith';
//     await user.save();
//     console.log('User updated:', user.toJSON());

//     // Delete a user
//     await user.destroy();
//     console.log('User deleted');
// }).catch(err => {
//     console.error('Unable to sync database:', err);
// });

const express = require('express');
const app = express();
// import the sequelize database from db.js file
const sequelize = require('./db');

require('./models/designation'); 
require('./models/user');
// require('./models/employee');
require('./models/role'); 
require('./models/priority');
require('./models/defect_type'); 
require('./models/severity');
require('./models/defect_status');
require('./models/release_type');
require('./models/privilege');
require('./models/project');
require('./models/smtp_config');
require('./models/modules');
require('./models/email_user')
require('./models/bench');
require('./models/user_privilege');
require('./models/group_privilege');
require('./models/project_user_privilege');
require('./models/project_allocation');
require('./models/sub_module');
require('./models/project_allocation_history');
require('./models/releases')
require('./models/release_testcase');
require('./models/defect');
require('./models/defect_history');
require('./models/comments');
require('./models/association')

app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    // Disable foreign key checks before dropping tables
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await sequelize.sync({ force: true }); // Force table creation (DROPS and recreates all tables!)
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    res.send('Database connected successfully (tables recreated)');
  } catch (error) {
    res.status(500).send('Connection failed: ' + error.message);
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});