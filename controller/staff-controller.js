const staffRoleModel = require('../models/staff-role');
const staffModel = require('../models/Staff');

const getstaff = async (req,res)=>{
    try{
        const staff = await staffModel.find({});

        res.status(200).json(staff)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const getStaff = async (req,res)=>{
    try{
        const staff = await staffModel.findOne({_id : req.params.id});

        if(!staff){
            return res.status(404).json({'error' : 'menu Item not found'})
        }

        res.status(200).json(staff)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const poststaff = async(req,res)=>{
    try {
        const {staff_FName,staff_LName} = req.body

        if(!staff_FName || !staff_LName){
            return res.json({'msg' : 'all feilds are required'})
        }

        const data = await staffModel({
            staff_FName,
            staff_LName
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const putstaff = async(req,res) => {
    try{

        const {staff_FName,staff_LName} = req.body

        const data = await staffModel.findOneAndUpdate({_id : req.params.id},{
            staff_FName,
            staff_LName
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'staff updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const deletestaff = async(req,res) => {
    try{
        const staff = await staffModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'staff deleted',staff})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

module.exports ={getstaff,getStaff,getStaff,poststaff,putstaff,deletestaff}