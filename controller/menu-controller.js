const menuModel =require ('../models/Menu');
const getmenu = async (req,res)=>{

    try{
        const menu = await menuModel.find({});

        res.status(200).json(menu)

    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const getMenu = async (req,res)=>{
    try{
        
        const menu = await menuModel.findOne({_id : req.params.id});

        if(!menu){
            return res.status(404).json({'error' : 'menu not found'})
        }

        res.status(200).json(menu)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const postmenu = async (req,res)=>{
      try{
        const {menuDate}= req.body

        if(!menuDate){
          return res.json({'msg' : 'menu date is required'})
        }
        const data =await menuModel({
          menuDate
        });
         await data.save()
         res.status(200).json(data)
      }catch(err){
        console.log( err);
        res.status(400).json({'err':"something went wrong"})
      }
}
const putmenu =async (req,res)=>{
    try{
        const { } = req.body

        const data = await menuModel.findOneAndUpdate({_id : req.params.id},{
            menuDate,
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'menu Date updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const deletemenu =async(req,res)=>{
    try{
        const menu = await menuModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'menu deleted',menu})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
module.exports = {getMenu,getmenu,postmenu,putmenu,deletemenu}