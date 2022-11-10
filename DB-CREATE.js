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

// // заполняем юзеров
// const addUsers = async () => {
//   try {
//     await User.create({ name: 'Name-1', password: '111', email: 'name1@mail.ru' });
//     await User.create({ name: 'Name-2', password: '111', email: 'name2@mail.ru' });
//     await User.create({ name: 'Name-3', password: '111', email: 'name3@mail.ru' });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addUsers();

// // заполняем вакансии
// const addVacancy1 = async () => {
//   try {
//     const result = await Vacancy.create({ title: 'Frontend-Developer junior', company: 'google', UserId: 1 });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addVacancy1();

// const addVacancy2 = async () => {
//   try {
//     const result = await Vacancy.create({ title: 'Frontend-Developer senior', company: 'яндекс', UserId: 2 });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addVacancy2();

// // заполняем кандидатов
// const addCandidate1 = async () => {
//   try {
//     const result = await Candidate.create({
//       VacancyId: 1, name: 'Nikolay', surname: 'Suhov', middlename: 'Sergeevich', email: 'nik@mail.ru', phone: '89990988976', resume: 'resume', experience: '3 года', location: 'Moscow',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidate1();

// const addCandidate2 = async () => {
//   try {
//     const result = await Candidate.create({
//       VacancyId: 1, name: 'Nikolay', surname: 'Sergeev', middlename: 'Pavlovich', email: 'nikol@mail.ru', phone: '89990988890', resume: 'resume', experience: '4 года', location: 'Moscow',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidate2();

// const addCandidate3 = async () => {
//   try {
//     const result = await Candidate.create({
//       VacancyId: 2, name: 'Anna', surname: 'Frolova', middlename: 'Andreevna', email: 'an@mail.ru', phone: '89990988845', resume: 'resume', experience: '2 года', location: 'Moscow',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidate3();

// const addCandidate4 = async () => {
//   try {
//     const result = await Candidate.create({
//       VacancyId: 2, name: 'Boris', surname: 'Fokin', middlename: 'Alexandrovich', email: 'fok@mail.ru', phone: '89990988845', resume: 'resume', experience: '2 года', location: 'Moscow',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCandidate4();

// // заполняем записи
// const addEntry1 = async () => {
//   try {
//     const result = await Entry.create({
//       CandidateId: 2, VacancyId: 1, status: 'stage5',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addEntry1();

// const addEntry2 = async () => {
//   try {
//     const result = await Entry.create({
//       CandidateId: 2, VacancyId: 1, status: 'stage5',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addEntry2();

// const addEntry3 = async () => {
//   try {
//     const result = await Entry.create({
//       CandidateId: 3, VacancyId: 2, status: 'stage3',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addEntry3();

// const addEntry4 = async () => {
//   try {
//     const result = await Entry.create({
//       CandidateId: 4, VacancyId: 2, status: 'stage2',
//     });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addEntry4();
