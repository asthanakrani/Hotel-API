const bookingModel= require ('../models/Booking');
const tableModel = require('../models/Table');
const customerModel = require('../models/Customer');

const getbooking = async(req,res)=>{
    try{
        const booking = await bookingModel.find({});

        res.status(200).json(booking)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const postbooking = async(req,res)=>{
    try {
        const {dateOfBooking, numberOfMember} = req.body

        if(!dateOfBooking || !numberOfMember){
            return res.json({'msg' : 'all fields are required'})
        }

        const data = await bookingModel({
            dateOfBooking,
            numberOfMember
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
module.exports= {getbooking,postbooking}