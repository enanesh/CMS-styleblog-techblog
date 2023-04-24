# cms-styleblog-mvc


[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Description
This repo houses the assets used to build the TechBro Tears Blog, this app was inspired by the need of create a developer community to share their new applications and their debuggin solutions to existing code bases.In this Blog you'll can writte about technical concepts, recent advancements and new technologies.


Link to Devloped app on Heroku: https://techgirls-ideas-blog.herokuapp.com/


#### User story:

As a Developer who writes about tech I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions.




## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [Technology Used](#technology-used)
- [License](#license)

## Installation


In order of being able to run this application you'll need

### Step 1:

```sh
git clone https://github.com/enanesh/cms-styleblog-mvc

git status 
```

### Step 2:

In the terminal run the command `npm init`

### Step 3:

To install the node libraries run this commands:
```sh
npm i sequelize
npm i connect-session-sequelize
npm i express-session
npm i bcrypt
npm i dotenv
npm i mysql2
npm i express-handlebars
npm i nodemon
```



### Step 4:
To create the database you must be on /db the you'll have to run the command `mysql -u root -p` then is going to ask you for your password.Then when you are connected to the database run the command `source schema.sql;`, to exit this terminal you must press`\q`.

### Step 5:

To seed the database go to the path /seed and run the command `node index.js`.

### Step 6:

Finally to run the server go to the path /Develop/seeds and then run the commant `node seed.js` in the terminal.


## Screenshots


### Homepage view


![Screenshot 2023-04-23 at 10 25 55 PM](https://user-images.githubusercontent.com/111031708/233907138-136bf98c-0c5b-424b-8fa7-3c76c137d99f.png)




### New post 

![Screenshot 2023-04-23 at 10 14 22 PM](https://user-images.githubusercontent.com/111031708/233907556-46a6be67-abbb-4caa-9915-84da9e0d1974.png)












## Credits

- Node.js : https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
- sequilize : https://sequelize.org/
- express : https://expressjs.com/
- Insomnia Core : https://insomnia.rest/products/insomnia
- connect-session-sequelize : https://www.npmjs.com/package/connect-session-sequelize
- express-session : https://www.npmjs.com/package/express-session
- node.bcrypt.js : https://www.npmjs.com/package/bcrypt
- dotenv : https://www.npmjs.com/package/dotenv  
- Node MySQL 2 : https://www.npmjs.com/package/mysql2
- Express Handlebars : https://www.npmjs.com/package/express-handlebars
- nodemon : https://www.npmjs.com/package/nodemon



## Technology Used
- JavaScript
- MySQL
- express node library
- Sequilize node library
- Insomnia Core to test the Api routes.
- nodemon
- dotenv
- Handlebars

## License

MIT
