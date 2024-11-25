const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nakraniastha0801:dyn9B0gxYz90Ehdt@hotelapi.5xk6a.mongodb.net/HotelAPI')
  .then(() => console.log('DB Connected!')).catch((err) =>{
    console.log("err",err);
  })