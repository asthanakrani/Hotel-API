const menuModel =require ('../models/Menu');
const menuItemModel = require('../models/Menu-Item');
const menuItemIngedientModel =require('../models/Menu-item-ingredients');

const getmenuitemIngredient = async(req,res)=>{
    try{
        const menuItemIngredients = await menuItemIngedientModel.find({}).populate({path:'menuItemId',populate: {path : 'menuId', }}).populate({path:'ingredientId',populate: {path : 'ingredientType', }})

        res.status(200).json(menuItemIngredients)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const getmenuitemingredient = async(req,res)=>{
    try{
        const menuItemIngredients = await menuItemIngedientModel.findOne({_id : req.params.id}).populate('menuItemId').populate('ingredientId');

        if(!menuItemIngredients){
            return res.status(404).json({'error' : 'menu Item Ingredients are not found'})
        }

        res.status(200).json(menu)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const postmenuitemingredient = async(req,res)=>{
    try {
        const {itemIngedientQuantitiy,menuItemId,ingredientId} = req.body

        if(!itemIngedientQuantitiy || !menuItemId || !ingredientId){
            return res.json({'msg' : 'item Ingedient Quantitiy is required'})
        }

        const data = await menuItemIngedientModel({
            itemIngedientQuantitiy,
            menuItemId,
            ingredientId
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const putmenuitemingredient= async(req,res)=>{
    try{

        const {itemIngedientQuantitiy,menuItemId,ingredientId} = req.body

        const data = await menuItemIngedientModel.findOneAndUpdate({_id : req.params.id},{
            itemIngedientQuantitiy,
            menuItemId,
            ingredientId
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'item Ingedient Quantitiy Date updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const deletemenuingredient =async(req,res)=>{
    try{
        const menuItemIngredient = await menuItemIngedientModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'menu Item Ingredient deleted',menuItemIngredient})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
module.exports={getmenuitemIngredient,getmenuitemingredient,postmenuitemingredient,putmenuitemingredient,deletemenuingredient}