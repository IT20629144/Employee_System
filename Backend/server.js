
const express =  require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import routes
const employeeRoutes = require('./Routes/employee')

//app middlewares
app.use(bodyParser.json());

//Rotes
app.use(employeeRoutes)


const PORT = 8000;

const DB_URL ='mongodb+srv://Employee:Employee123@cluster0.suevurn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
  .then(() => {
     console.log('DB Connected')
  })
   .catch((err) =>{
      console.log('DB connectio error' ,err)
   });


app.listen(PORT , () => {
    console.log(`App is running ${PORT}`)
})

