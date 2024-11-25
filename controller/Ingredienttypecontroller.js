const ingredientTypeModel = require('../models/Ingredient-type');

 const getingredientType = async (req,res)=>{
    try{
        const ingredientType = await ingredientTypeModel.find({});

        res.status(200).json(ingredientType)
    }catch(error){
        console.log(error)
        res.status(400).json({'err' : 'something went wrong'})
    }
}

 const getIngredienttypes = async (req,res)=>{
    try{
        const ingredientType = await ingredientTypeModel.findOne({_id : req.params.id});

        if(!ingredientType){
            return res.status(404).json({'err' : 'data not found'})
        }

        res.status(200).json(ingredientType)
    }catch(error){
        console.log(error)
        res.status(400).json({'err' : 'something went wrong'})
    }
}
 const postingredientType =async (req,res)=>{
    try {
        const {ingredientTypeCode, ingredientTypeDescription} = req.body

        if(!ingredientTypeCode || !ingredientTypeDescription){
            return res.json({'messge' : 'all field required'})
        }
        const data = await ingredientTypeModel({
            ingredientTypeCode,
            ingredientTypeDescription
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        console.log("err from post ing type");
        
        res.status(400).json({'error' : 'something went wrong'})
    }
}
 const putIngredienttypes = async (req,res)=>{
    try{

        const {ingredientTypeCode, ingredientTypeDescription} = req.body

        const data = await ingredientTypeModel.findOneAndUpdate({_id : req.params.id},{
            ingredientTypeCode,
            ingredientTypeDescription
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'Ingredient Type updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
 const deleteingredientType = async(req,res)=>{
    try{
        const IngredientType = await ingredientTypeModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'Ingredient Type deleted',IngredientType})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

module.exports = {getingredientType,getIngredienttypes,postingredientType,putIngredienttypes,deleteingredientType}