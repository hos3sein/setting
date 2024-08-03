const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Point = require("../models/Point");
const TransactionVolumePoint = require("../models/TransactionVolumePoint");
const TransactionCountPoint = require("../models/TransactionCountPoint");
const CancelPoint=require("../models/CancelPoint")
const { refresh,updatePoints } = require("../utils/request");

// @desc      update Point
// @route     POST /api/v1/admins/Point/up/:id
// @access    private
exports.updateContentPoint= asyncHandler(async (req, res, next) => {

  const { like, comment, createForum,inviteUser} = req.body;
  const findAll = await Point.find();
  if (findAll.length !== 0) {

    const id=findAll[0]._id

    await Point.findByIdAndUpdate(id,{
      like,
      comment,
      createForum,
      inviteUser
    });    
    return res.status(200).json({
      success: true,
      data: {},
    });
  }

  await Point.create({
    like,
    comment,
    createForum,
    inviteUser
  });
   res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      all Point
// @route     POST /api/v1/admins/Point/all/:id
// @access    private
exports.allContentPoint = asyncHandler(async (req, res, next) => {
  const findAll = await Point.find();
  res.status(200).json({
    success: true,
    data: findAll,
  });
});

exports.createTransactionVolumePointRange= asyncHandler(async (req, res, next) => {
  const {volume,point}=req.body
  const newRange=await TransactionVolumePoint.create({
    volume,
    point
  })
  res.status(200).json({
    success: true,
    data:newRange,
  });
});
exports.updateTransactionVolumePointRange=asyncHandler(async (req, res, next) => {
  const {id,volume,point}=req.body
 
    const update=await TransactionVolumePoint.findByIdAndUpdate(id,{
    volume,
    point
  })
  res.status(200).json({
    success: true,
    data:update,
  });
});
exports.removeTransactionVolumePointRange=asyncHandler(async (req, res, next) => {
  const id=req.params.id
   
  await TransactionVolumePoint.findByIdAndDelete(id)
   
  res.status(200).json({
    success: true,
  });
});
exports.getAllTransactionVolumePointRange=asyncHandler(async (req, res, next) => {
  const id=req.params.id
   
  const getAll=await TransactionVolumePoint.find()
   
  res.status(200).json({
    success: true,
    data:getAll
  });
});
exports.createTransactionCountPointRange= asyncHandler(async (req, res, next) => {
  const {count,point}=req.body
  const newRange=await TransactionCountPoint.create({
    count,
    point
  })
  res.status(200).json({
    success: true,
    data:newRange,
  });
});
exports.updateTransactionCountPointRange=asyncHandler(async (req, res, next) => {
  const {id,count,point}=req.body
 
    const update=await TransactionCountPoint.findByIdAndUpdate(id,{
    count,
    point
  })
  res.status(200).json({
    success: true,
    data:update,
  });
});
exports.removeTransactionCountPointRange=asyncHandler(async (req, res, next) => {
  const id=req.params.id
   
  await TransactionCountPoint.findByIdAndDelete(id)
   
  res.status(200).json({
    success: true,
  });
});
exports.getAllTransactionCountPointRange=asyncHandler(async (req, res, next) => {
  
   
  const getAll=await TransactionCountPoint.find()
   
  res.status(200).json({
    success: true,
    data:getAll
  });
});

exports.createCancelPoint= asyncHandler(async (req, res, next) => {
  const {time,count,point}=req.body
  const newCancel=await CancelPoint.create({
    time,
    count,
    point
  })
  res.status(200).json({
    success: true,
    data:newCancel
  });
});

exports.updateCancelPoint=asyncHandler(async (req, res, next) => {
  const {id,time,count,point}=req.body
 
    const update=await CancelPoint.findByIdAndUpdate(id,{
    time,  
    count,
    point
  })
  res.status(200).json({
    success: true,
    data:update,
  });
});
exports.removeCancelPoint=asyncHandler(async (req, res, next) => {
  const id=req.params.id
   
  await CancelPoint.findByIdAndDelete(id)
   
  res.status(200).json({
    success: true,
  });
});
exports.getAllCancelPoint=asyncHandler(async (req, res, next) => {
  
   
  const getAll=await CancelPoint.find()
   
  res.status(200).json({
    success: true,
    data:getAll
  });
});


