import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';
import fetch from 'node-fetch';


// Set up database connection
const db = new Sequelize('foodstagram', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost'
});


// Define schemas for our database

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
  },
  avatar: {
    type: Sequelize.STRING
  }
});

const PostModel = db.define('post', {
  description: {
    type: Sequelize.STRING
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

// Seed database with mock data
Faker.seed(123);
db.sync({ force: true }).then(() => {

  _.times(10, () => {
    return RestaurantModel.create({
      name: Faker.lorem.word(),
      address: Faker.address.streetAddress(),
      tel: Faker.phone.phoneNumber()
    })
    .then(() => {
      return UserModel.create({
        username: Faker.internet.userName(),
        email: Faker.internet.email(),
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        avatar: Faker.image.avatar(),
        password: `$2a$10$F5MPmEuF.kjcp9ZedUt8xOLpok3pF.RCcFhAkSTnNc8f3srvf1BgC`
      })
      .then(user => {
        return _.times(5, () => {
          user.createPost({
            description: Faker.lorem.words(),
            image: Faker.image.food(),
          })
          .then(post => {
            post.setRestaurant(Faker.random.number({ min: 1, max: 10 }))
          })
        })
      })
    })
  })
})

// Add a REST API endpoint
const FortuneCookie = {
  getOne() {
    return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
      .then(res => res.json())
      .then(res => {
        return res[0].fortune.message;
      });
  }
}

const User = db.models.user;
const Post = db.models.post;
const Restaurant = db.models.restaurant;

export { User, Post, Restaurant, FortuneCookie }
export default db;