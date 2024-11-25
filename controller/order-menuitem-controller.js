const orderMenuItemModel = require('../models/order-menuitem');

const getordermenuItem = async(req,res)=>{
    try {
        const orderMenuItems = await orderMenuItemModel.find({}).populate('orderId').populate('menuId');
        res.status(200).json(orderMenuItems);
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
}

const getOrdermenuItem = async(req,res)=>{
    try {
        const orderMenuItem = await orderMenuItemModel.findOne({ _id: req.params.id });

        if (!orderMenuItem) {
            return res.status(404).json({ 'error': 'data not found' });
        }

        res.status(200).json(orderMenuItem);
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
}
const postordermenuitem = async (req,res)=>{
    try {
        const { orderMenuItemQuantity, orderMenuItemComments, orderId, menuId } = req.body;

        if (!orderMenuItemComments || !orderMenuItemQuantity || !orderId || !menuId) {
            return res.json({ 'msg': 'all fields are required' });
        }

        const data = new orderMenuItemModel({
            orderMenuItemComments,
            orderMenuItemQuantity,
            orderId,
            menuId,
        });

        await data.save();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
}
const putordermenuitem = async (req,res)=>{
    try {
        const { orderMenuItemQuantity, orderMenuItemComments, orderId, menuId } = req.body;

        const data = await orderMenuItemModel.findOneAndUpdate(
            { _id: req.params.id },
            { orderMenuItemComments, orderMenuItemQuantity, orderId, menuId },
            { new: true } // Return the updated document
        );

        if (!data) {
            return res.status(404).json({ 'error': 'data not found' });
        }

        console.log("data", data);

        res.status(200).json({
            'msg': 'orderMenuItem updated',
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
}
const deleteordermenuitem = async(req,res)=>{
    try {
        const orderMenuItem = await orderMenuItemModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ 'msg': 'orderMenuItem Type deleted', orderMenuItem });
    } catch (error) {
        console.log(error);
        res.status(400).json({ 'error': 'something went wrong' });
    }
}
module.exports={getordermenuItem,getOrdermenuItem,postordermenuitem,putordermenuitem,deleteordermenuitem}