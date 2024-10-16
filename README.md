# Cyber Fitness

## Stack of Technologies

### Front End:
HTML, CSS, Javascript, React, React-Bootstrap, Redux

### Back End:
Node.js, Express, Passport, Json web token authentication, Nodemailer, Sequelize.

### Database:
PostgreSQL

## **Starting Instructions** 

__IMPORTANT:__ Necesary version of node and NPM 

 * __Node__: 12.18.3 or higher
 * __NPM__: 6.14.16 or higher

 
## BoilerPlate

The boilerPlate has two folders: `api` and `client`.

Inside `api` you must have to create a file called: `.env` 
that has the following form: 

```
DB_USER=postgresuser
DB_PASSWORD=postgrespassword
DB_HOST=localhost

DB_KEY=keyword

TWIT_ID=10hJi7gdjODCavCqGJ08vfYCf
TWIT_SECRET=xgBMzGvj6TPt9Kmb8SxcuFP4WFhZLx3O4jgY7ySleENKhDNpMd
```

You have to replace `postgresuser` and `postgrespassword` with your own credentials to connect to postgres database. This file will be ignored by github, as it contains sensitive information (the credentials).

The DB_KEY is a random security keyword, you can change or keep it.  

The TWIT_ID and TWIT_SECRET info is important to keep it. 

## Next 
### _Connect the data base_

 - Go to your postgres database manager and create a new   database called `development`, this is the name of the database to which we will connect.

### _Install the necesary package to run it_

- Open the project console
    + Inside `api` folder, run the command line, `npm install`
    + Inside `client` folder, run the command line, `npm install` 

### _Run the project_

- Open the project console
    + Inside `api` folder, run the command line, `npm start`
        
    + Inside `client` folder, run the command line, `npm start` (go to http://localhost:3000/) 

# For testing

- You can find in `api/index.js`
    + `conn.sync({ force: false })`, switch it between " true " ( if you want reset database in each loaded ) or " false "( if you dont want reset database in each loaded ) 

- You can use a testing admin user with login credentials:
    + username : `admin@cyberfitness.com`
    + password : `masterpass`


# Project Screens 

- Landing-Page
![Landing-ecommerce](https://user-images.githubusercontent.com/66705822/99189972-c6b4e200-2742-11eb-89c1-399e42481fd1.png)

- Register, we can do it using the ecommerce platform (by form) or authenticate with github, google or twitter.
![register](https://user-images.githubusercontent.com/66705822/99189999-e5b37400-2742-11eb-8dbd-dd80f80039e8.png)

 - Welcome message when we get registered
![mail](https://user-images.githubusercontent.com/66705822/99190023-01b71580-2743-11eb-80fc-66901ab019d8.png)

 - Catalogue with products
![Catalogue-ecommerce](https://user-images.githubusercontent.com/66705822/99189993-db917580-2742-11eb-83df-dab0391da063.png)

 - Products in detail
![Products-detail](https://user-images.githubusercontent.com/66705822/99190009-f8c64400-2742-11eb-84f9-682887512d27.png)

 - Cart
![cart](https://user-images.githubusercontent.com/66705822/99190035-0d0a4100-2743-11eb-8a89-d1a00ffd13ca.png)

- Checkout. You can pay using paypal or with a debit/credit card
![Checkout](https://user-images.githubusercontent.com/66705822/99190228-2790ea00-2744-11eb-82d8-8663ba6dfc9b.png)

- Profile
![profile](https://user-images.githubusercontent.com/66718960/99322129-103e2380-284e-11eb-8d1d-9e1bf4365633.JPG) 

 - We can add reviews to the products that we had purchase
![add-review](https://user-images.githubusercontent.com/66705822/99190564-f31e2d80-2745-11eb-80d8-e53ae7cc1ab2.png)

 - After add a review we can see it in products-detail
![reviews-footer](https://user-images.githubusercontent.com/66705822/99190568-f74a4b00-2745-11eb-92db-e8ff50a8e951.png)

- There is an admin section where we have a CRUD of products, categories, orders and users.
![Admin-panel](https://user-images.githubusercontent.com/66705822/99190252-47281280-2744-11eb-92bb-210656defceb.png)
