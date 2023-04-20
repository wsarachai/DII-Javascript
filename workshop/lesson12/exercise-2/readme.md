## [Home](../../../README.md) > [Back](../lesson.md) > Exercise #1

### Your tasks:

#### Modify the camt-tours web using the MongoDB

1. Copy the source code from `lesson11->exercise-2` to `lesson12->exercise-1`, we will use MongoDB the instead

   - In the terminal, change the current directory to `lesson12/exercise-2`
   - Install `Mongodb` and `Mongoose` modules to the current project using the following commands:
     - Run `> npm i mongodb@5`
     - Run `> npm i mongoose@5`

2. Get the connection string from MongoDB server

   - Got to [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
   - Start with a free account:

     - Login to the system.
     - Choose `camt-tours-app` project
     - Get the connection string from MongoDB server

       - Click `Connect`
         <br/><br/><img width="512" src="img/img.png"/><br/><br/>
       - Click `Drivers`
         <br/><br/><img width="512" src="img/img2.png"/><br/><br/>
       - Make sure you select the correct `Node.js` and version and then copy the connection link
         <br/><br/><img width="512" src="img/img3.png"/><br/><br/>
       - Save the connection string in our project in [config.env](config.env) file
       - Replace `<password>` section with your password generated in the previous step and append the URL with your database name. For our case, the database name is `CAMT`
         For example the original connection string:

         ```
         mongodb+srv://xxxxxxxx:<password>@cluster0.9vaizzr.mongodb.net/?retryWrites=true&w=majority
         ```

         Change to:

         ```
         mongodb+srv://yourusername:yourpassword@cluster0.9vaizzr.mongodb.net/CAMT?retryWrites=true&w=majority
         ```

         In [config.env](config.env) file:

         ```
         NODE_ENV = development
         PORT = 3000
         DATABASE=mongodb+srv://yourusername:yourpassword@cluster0.9vaizzr.mongodb.net/CAMT?retryWrites=true&w=majority
         ```

3. Let’s connect the Mongoose to our database server

   - Edit the [server.js](server.js) file with the code as shown below:

     ```
     'use strict';
     const mongoose = require('mongoose');
     const dotenv = require('dotenv');
     dotenv.config({ path: './config.env' });

     const DB = process.env.DATABASE;
     mongoose
       .connect(DB, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
       })
       .then(() => {
         console.log('DB Connection successful!');
       });

     const app = require('./app');
     const port = process.env.PORT || 3000;
     app.listen(port, () => {
       console.log(`App listening on ${port}...`);
     });
     ```

   - Start the Node application
     ```
     > nodemon server.js
     ```
     <i>The message `DB Connection successful!` should be appeared</i>

4. Create a Simple Tour Model

   - First, create a Tour schema

     - Create a new directory name `models` at `lesson12/exercise-2/models`
     - Create a new file `tourModel.js` with the following code below:

     ```
     'use strict';

     const mongoose = require('mongoose');

     const toursSchema = mongoose.Schema({
       name: {
         type: String,
         required: [true, 'A tour must name a name'],
         unique: true,
       },
       rating: { type: Number, default: 4.5 },
       price: { type: Number, required: [true, 'A tour must price'] },
     });

     const Tour = mongoose.model('Tour', toursSchema);

     module.exports = Tour;
     ```

5. Modify the tourController to use Tour model

   - In [tourController.js](controllers/tourController.js) remove the code that load tour data from file
     from

     ```
     const fs = require('fs');
     const path = require('path');

     const jsonData = fs.readFileSync(
       path.join(__dirname, '../dev-data', 'tours-simple.json'),
       'utf-8'
     );
     const tours = JSON.parse(jsonData);
     ```

     to

     ```
     const Tour = require('../models/tourModel');
     ```

   - In [tourController.js](controllers/tourController.js) modify the `getAllTour` method
     From

     ```
     exports.getAllTours = (req, res) => {
       res.status(200).json({
         status: 'success',
         results: tours.length,
         data: tours,
       });
     };
     ```

     to

     ```
     exports.getAllTours = async (req, res) => {
       try {
         const tours = await Tour.find();

         res.status(200).json({
           status: 'success',
           results: tours.length,
           data: tours,
         });
       } catch (err) {
         res.status(400).json({
           status: 'Failed',
           message: err,
         });
       }
     };
     ```

   - Test `getAllTour` in the `Postman` using `GET` method with URL `http://127.0.0.1:3000/api/v1/tours`
     <br/><br/><img width="600" src="img/img4.png"/><br/><br/>

   - In [tourController.js](controllers/tourController.js) modify the `getTour` method
     From

     ```
     exports.getTour = (req, res) => {
       const id = Number.parseInt(req.params.id);
       const tour = tours.find(el => el.id === id);
       if (!tour) {
         return res.status(404).json({
           status: 'failed',
           message: 'Tour not found',
         });
       }
       res.status(200).json({
         status: 'success',
         data: tour,
       });
     };
     ```

     to

     ```
     exports.getTour = async (req, res) => {
       try {
         const tour = await Tour.findById(req.params.id);

         res.status(200).json({
           status: 'Success',
           message: tour,
         });
       } catch (err) {
         res.status(400).json({
           status: 'Failed',
           message: err,
         });
       }
     };
     ```

   - Test `getTour` in the `Postman` using `GET` method with URL `http://127.0.0.1:3000/api/v1/tours/<your tour ID>`
     <br/><br/><img width="600" src="img/img5.png"/><br/><br/>
     <i>Warning: the ID in `GET` URL should be your `tour` ID in your database</i>, for example `http://127.0.0.1:3000/api/v1/tours/643faf974ba21c09543966ed`

   - In [tourController.js](controllers/tourController.js) modify the `createTour` method
     From

     ```
     exports.createTour = (req, res) => {
       const newId = tours[tours.length - 1].id + 1;
       const newTour = Object.assign({ id: newId }, req.body);
       tours.push(newTour);

       fs.writeFile(
         path.join(__dirname, 'dev-data', 'tours-simple.json'),
         JSON.stringify(tours),
         err => {
           res.status(200).json({
             status: 'success',
             data: newTour,
           });
         }
       );
     };
     ```

     to

     ```
     exports.createTour = async (req, res) => {
       try {
         const tour = await Tour.create(req.body);

         res.status(200).json({
           status: 'Success',
           message: tour,
         });
       } catch (err) {
         res.status(400).json({
           status: 'Failed',
           message: err,
         });
       }
     };
     ```

   - Test `createTour` in the `Postman` using `POST` method with URL `http://127.0.0.1:3000/api/v1/tours`

     - In the `Body` tab, select `raw`->`JSON` and paste this JSON data
       ```
       {
           "name": "The Sea Explorer",
           "rating": 4.8,
           "price": 497
       }
       ```
       <br/><img width="600" src="img/img6.png"/><br/><br/>

   - In [tourController.js](controllers/tourController.js), create the new `updateTour` method as shown below:

     ```
     exports.updateTour = async (req, res) => {
       try {
         const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
           new: true,
           runValidators: true,
         });

         res.status(200).json({
           status: 'Success',
           data: { tour },
         });
       } catch (err) {
         res.status(400).json({
           status: 'Failed',
           message: err,
         });
       }
     };
     ```

   - In [tours/tourRoutes.js](tours/tourRoutes.js), update the code fragment from

     ```
     tourRoute.route('/:id').get(tourController.getTour);
     ```

     to

     ```
     tourRoute
       .route('/:id')
       .get(tourController.getTour)
       .patch(tourController.updateTour); // add this line
     ```

   - Test `updateTour` in the `Postman` using `PATCH` method with URL `http://127.0.0.1:3000/api/v1/tours/<your tour ID>`

     - In the `Body` tab, select `raw`->`JSON` and paste this JSON data
       ```
       {
           "price": 500
       }
       ```
       <br/><img width="600" src="img/img6.png"/><br/><br/>
       <i>Warning: the ID in `PATCH` URL should be your `tour` ID in your database</i>, for example `http://127.0.0.1:3000/api/v1/tours/643faf974ba21c09543966ed`

   - In [tourController.js](controllers/tourController.js), create the new `deleteTour` method as shown below:

     ```
     exports.deleteTour = async (req, res) => {
       try {
         await Tour.findByIdAndDelete(req.params.id);

         res.status(204).json({
           status: 'Success',
           message: null,
         });
       } catch (err) {
         res.status(400).json({
           status: 'Failed',
           message: err,
         });
       }
     };
     ```

   - In [tours/tourRoutes.js](tours/tourRoutes.js), update the code fragment from

     ```
     tourRoute
       .route('/:id')
       .get(tourController.getTour)
       .patch(tourController.updateTour);
     ```

     to

     ```
     tourRoute
       .route('/:id')
       .get(tourController.getTour)
       .patch(tourController.updateTour)
       .delete(tourController.deleteTour);  // add this line
     ```

   - Test `deleteTour` in the `Postman` using `DELETE` method with URL `http://127.0.0.1:3000/api/v1/tours/<your tour ID>`
     <br/><br/><img width="600" src="img/img7.png"/><br/><br/>
     <i>Warning: the ID in `PATCH` URL should be your `tour` ID in your database</i>, for example `http://127.0.0.1:3000/api/v1/tours/643faf974ba21c09543966ed`

6. Finish.
