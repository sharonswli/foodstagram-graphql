import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';


// TODO: Set up database connection
const db = new Sequelize('foodstagram', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost'
});


// TODO: Define schemas for our database

const UserModel = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const PostModel = db.define('post', {
  description: {
    type: Sequelize.STRING
  },
  calories: {
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.STRING    
  }
});

const RestaurantModel = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING    
  },
  tel: {
    type: Sequelize.STRING    
    
  }
})

// Define relationships
UserModel.hasMany(PostModel)
PostModel.belongsTo(UserModel)

RestaurantModel.hasMany(PostModel)
PostModel.belongsTo(RestaurantModel)

// Seed database
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return UserModel.create({
      username: Faker.internet.userName(),
      email: Faker.internet.email(),
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      password: `$2a$10$F5MPmEuF.kjcp9ZedUt8xOLpok3pF.RCcFhAkSTnNc8f3srvf1BgC`
    })
    .then(user => {
      return user.createPost({
        description: `Sample post by ${user.firstName}`,
        calories: Faker.random.number(),
        image: Faker.internet.url(),
      })
    })
  })
})

export default db;