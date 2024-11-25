const ingredientTypeModel = require('../models/Ingredient-type');
const ingredient = require ('../models/Ingredients');


 const getingredients = async(req,res)=>{
    try{
        const ingredient = await ingredient.find({});

        res.status(200).json(ingredient)
    }catch(error){
        console.log(error)

        res.status(400).json({'err' : 'something went wrong'})
    }
}
 const getIngredient = async (req,res)=>{
    try{
        const ingredient = await ingredient.findOne({_id : req.params.id});

        if(!ingredient){
            return res.status(404).json({'error' : 'data not found'})
        }

        res.status(200).json(ingredient)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
} 
 const postingredient = async (req,res)=>{
    try {
        const {ingredientName} = req.body

        if(!ingredientName){
            return res.json({'msg' : 'ingredient Name is required'})
        }

        const data = await ingredient({
            ingredientName
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
 const putingredient = async(req,res)=>{
    try{
        const {ingredientName} = req.body

        const data = await ingredient.findOneAndUpdate({_id : req.params.id},{
            ingredientName,
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'Ingredient updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }

}
 const deleteingredient = async(req,res)=>{
    try{
        const Ingredient = await ingredient.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'Ingredient Type deleted',Ingredient})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
module.exports ={getingredients,getIngredient,postingredient,putingredient,deleteingredient}