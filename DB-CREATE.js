// !!! Создание БД !!!

// ! Install Sequelize and Postgres
// * npm i sequelize pg pg-hstore

// ! Create .sequelizerc // https://sequelize.org/docs/v6/other-topics/migrations/#the-sequelizerc-file
// ! .sequelizerc создавать в корне!
// const path = require('path');
//
// module.exports = {
//   config: path.resolve('db', 'config', 'database.js'),
//   'models-path': path.resolve('db', 'models'),
//   'seeders-path': path.resolve('db', 'seeders'),
//   'migrations-path': path.resolve('db', 'migrations'),
// };

// ! Sequelize initialization
// * npx sequelize-cli init

// ! Edit config/database.js
// require('dotenv').config();
//
// module.exports = {
//   development: {
//     username: process.env.DB_USER,
//     password: process.env.DB_USERPASSWORD,
//     database: process.env.DATABASE,
//     host: '127.0.0.1',
//     dialect: 'postgres',
//   },

// ! Create database
// * npx sequelize-cli db:create

// ! Create models
// * npx sequelize-cli model:generate --name User --attributes name:string,password:string,email:string
// * npx sequelize-cli model:generate --name Vacancy --attributes title:string,company:string,UserId:integer
// * npx sequelize-cli model:generate --name Candidate --attributes VacancyId:integer,name:string,surname:string,middlename:string,email:string,phone:string,resume:string,experience:string,location:string,comment:text
// * npx sequelize-cli model:generate --name Entry --attributes CandidateId:integer,VacancyId:integer,status:string,stage1:boolean,stage2:boolean,stage3:boolean,stage4:boolean,stage5:boolean,stage6:boolean,stage7:boolean,stage8:boolean,dateStage2:string,dateStage3:string,dateStage5:string

// ! Edit models
// * user.js
// static associate({ User, Comment, Tag }) {
//     this.belongsTo(User, { foreignKey: 'user_id' });
//     this.hasMany(Comment, { foreignKey: 'post_id' });
//     this.hasMany(Tag, { foreignKey: 'post_id' });
// }
// * candidate.js
// static associate({ Vacancy }) {
//   this.hasMany(Vacancy);
// }
// * entry.js
// static associate({ User, Post }) {
//     this.belongsTo(User, { foreignKey: 'user_id' });
//     this.belongsTo(Post, { foreignKey: 'post_id' });
// }
// * vacancy.js
// static associate({ Candidate, Entry, User }) {
//   this.belongsTo(User);
//   this.hasMany(Candidate);
//   this.hasMany(Entry);
// }

// ! Edit migrations
// * ...create-user.js
// name: {
//   type: Sequelize.STRING,
//   allowNull: false,
// },
// password: {
//   type: Sequelize.STRING,
//   allowNull: false,
// },
// email: {
//   type: Sequelize.STRING,
//   allowNull: false,
//   unique: true,
// },

// * ...create-candidate.js
// VacancyId: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
//   references: {
//     model: 'Vacancies',
//     key: 'id',
//   },
// },
// name: {
//   type: Sequelize.STRING,
//   allowNull: false,
// },
// surname: {
//   type: Sequelize.STRING,
//   allowNull: false,
// },
// middlename: {
//   type: Sequelize.STRING,
//   allowNull: false,
// },

// * ...create-vacancy.js
// UserId: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
//   references: {
//     model: 'Users',
//     key: 'id',
//   },
// },

// * ...create-vacancy.js
// CandidateId: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
//   references: {
//     model: 'Candidates',
//     key: 'id',
//   },
// },
// VacancyId: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
//   references: {
//     model: 'Vacancies',
//     key: 'id',
//   },
// },
// status: {
//   type: Sequelize.STRING,
//   defaultValue: 'stage1',
// },
// stage1: {
//   type: Sequelize.BOOLEAN,
//   defaultValue: false,
// },
// stage2: {
//   type: Sequelize.BOOLEAN,
//   defaultValue: false,
// },
// stage3: {
//   type: Sequelize.BOOLEAN,
//   defaultValue: false,
// },
// stage4: {
//   type: Sequelize.BOOLEAN,
//   defaultValue: false,
// },
// stage5: {
//   type: Sequelize.BOOLEAN,
//   defaultValue: false,
// },
// stage6: {
//   type: Sequelize.BOOLEAN,
//   defaultValue: false,
// },
// stage7: {
//   type: Sequelize.BOOLEAN,
//   defaultValue: false,
// },
// stage8: {
//   type: Sequelize.BOOLEAN,
//   defaultValue: false,
// },

// ! Migrate all
// * npx sequelize-cli db:migrate

// !!! Работаем с БД !!!

const {
  sequelize, User, Vacancy, Candidate, Entry,
} = require('./db/models');

const dbConnectCheck = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database online!');
  } catch (error) {
    console.log('Unable to connect to the database:', error);
  }
};
dbConnectCheck();

const addUsers = async () => {
  try {
    await User.create({ name: 'Name-1', password: '111', email: 'name1@mail.ru' });
    await User.create({ name: 'Name-2', password: '111', email: 'name2@mail.ru' });
    await User.create({ name: 'Name-3', password: '111', email: 'name3@mail.ru' });
  } catch (error) {
    console.log(error);
  }
};
// addUsers();

const addVacancies = async () => {
  try {
    await Vacancy.create({ title: 'Frontend-Developer3 junior', company: 'google', UserId: 1 });
    await Vacancy.create({ title: 'Frontend-Developer1 senior', company: 'яндекс', UserId: 2 });
    await Vacancy.create({ title: 'Frontend-Developer123 senior', company: 'яндекс', UserId: 2 });
    await Vacancy.create({ title: 'Frontend-Developer222 senior', company: 'яндекс', UserId: 2 });
    await Vacancy.create({ title: 'Frontend-Developer33 senior', company: 'яндекс', UserId: 2 });
  } catch (error) {
    console.log(error);
  }
};
// addVacancies();

const addCandidates = async () => {
  try {
    await Candidate.create({
      VacancyId: 2, name: 'Nikolay22', surname: 'Suhov1', middlename: 'Sergeevich1', email: 'nik1@mail.ru', phone: '89990988976', resume: 'resume', experience: '3 года', location: 'Moscow',
    });
    await Candidate.create({
      VacancyId: 2, name: 'Nikolay2234', surname: 'Sergeev11', middlename: 'Pavlovic1h', email: 'niko1l2@mail.ru', phone: '89990988890', resume: 'resume', experience: '4 года', location: 'Moscow',
    });
    await Candidate.create({
      VacancyId: 2, name: 'Anna11', surname: 'Frolo11va', middlename: 'Andreevna11', email: 'an111@mail.ru', phone: '89990988845', resume: 'resume', experience: '2 года', location: 'Moscow',
    });
    await Candidate.create({
      VacancyId: 2, name: 'Bori12s', surname: 'Fok123in', middlename: 'Alexandro33ich', email: 'fok33@mail.ru', phone: '89990988845', resume: 'resume', experience: '2 года', location: 'Moscow',
    });
  } catch (error) {
    console.log(error);
  }
};
// addCandidates();

const addEntries = async () => {
  try {
    await Entry.create({ CandidateId: 2, VacancyId: 1, status: 'stage5' });
  } catch (error) {
    console.log(error);
  }
};
// addEntries();
