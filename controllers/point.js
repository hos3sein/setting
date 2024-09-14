const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Point = require("../models/Point");
const TransactionVolumePoint = require("../models/TransactionVolumePoint");
const TransactionCountPoint = require("../models/TransactionCountPoint");
const CancelPoint=require("../models/CancelPoint")
const { refresh,updatePoints } = require("../utils/request");
const logger = require("../models/logger");

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
    const Log = {
      admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
      section : "Setting",
      part : "update content points",
      success : true,
      description : `${req.admin.username}  has successfully update content points to ${like} , ${comment} , ${createForum} , ${inviteUser} `,
    }
    await logger.create(Log)
    return res.status(200).json({
      success: true,
      data: {},
    });
  }
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "update content points",
    success : true,
    description : `${req.admin.username}  has successfully update content points to ${like} , ${comment} , ${createForum} , ${inviteUser} `,
  }
  await logger.create(Log)
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
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "create transaction volume points range",
    success : true,
    description : `${req.admin.username}  has successfully create transaction volume points range with value of volume : (${volume.from} , ${volume.fromTo}) , point : ${point} `,
  }
  await logger.create(Log)
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
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "update transaction volume points range",
    success : true,
    description : `${req.admin.username}  has successfully update transaction volume points range ${id} to volume : (${volume.from} , ${volume.fromTo}) , point : ${point} `,
  }
  await logger.create(Log)
  res.status(200).json({
    success: true,
    data:update,
  });
});
exports.removeTransactionVolumePointRange=asyncHandler(async (req, res, next) => {
  const id=req.params.id
   const v= TransactionVolumePoint.findById(id)
  await TransactionVolumePoint.findByIdAndDelete(id)
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "remove transaction volume points range",
    success : true,
    description : `${req.admin.username}  has successfully remove transaction volume points range with value of volume : (${v.volume.from} , ${v.volume.fromTo} ) , point : ${v.point} `,
  }
  await logger.create(Log)
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
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "create transaction count points range",
    success : true,
    description : `${req.admin.username}  has successfully create transaction count points range with value of count : (${count.from},${count.fromTo}) , point : ${point} `,
  }
  await logger.create(Log)
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
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "update transaction count points range",
    success : true,
    description : `${req.admin.username}  has successfully create transaction count points range to :( ${count.from} , ${count.fromTo}) , point : ${point} `,
  }
  await logger.create(Log)
  res.status(200).json({
    success: true,
    data:update,
  });
});

exports.removeTransactionCountPointRange=asyncHandler(async (req, res, next) => {
  const id=req.params.id
   const v= TransactionCountPoint.findById(id)
  await TransactionCountPoint.findByIdAndDelete(id)
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "update transaction count points range",
    success : true,
    description : `${req.admin.username}  has successfully remove transaction count points range  : (${v.count.from} , ${v.count.fromTo} ), point : ${v.point} `,
  }
  await logger.create(Log)
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
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "create cancel point",
    success : true,
    description : `${req.admin.username}  has successfully create cancel points with value of : (${count.from} , ${count.fromTo}) , ${point} `,
  }
  await logger.create(Log)
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
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "update cancel point",
    success : true,
    description : `${req.admin.username}  has successfully update cancel points to count : (${count.from} , ${count.fromTo}) , point : ${point} `,
  }
  await logger.create(Log) 
  res.status(200).json({
    success: true,
    data:update,
  });
});
exports.removeCancelPoint=asyncHandler(async (req, res, next) => {
  const id=req.params.id
   
  await CancelPoint.findByIdAndDelete(id)
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "remove cancel point",
    success : true,
    description : `${req.admin.username}  has successfully remove cancel points with value of count : (${count.from} , ${count.fromTo}) , point : ${point} `,
  }
  await logger.create(Log)
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


