const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Variable = require("../models/Variable");
const { refresh } = require("../utils/request");
const logger = require("../models/logger");
// @desc      create Variable
// @route     POST /api/v1/admins/variable/create
// @access    private
exports.createAndUpdate = asyncHandler(async (req, res, next) => {
  const {
    commerceBidAmount,
    commerceDepositeAmount,
    truckBidAmount,
    truckDepositeAmount,
    commerceVipAmount,
    cancelCommerceSellPenalty,
    cancelTruckPenalty,
    cancelLineMakerBookTime,
    inspectorAmount,
    appComistionAmountTruck,
    appComistionAmountCommerce,
    appComistionAmountTransport,
    getQuoteAmount
  }=req.body
  
  const changer = [ 'commerceBidAmount',
    'commerceDepositeAmount',
    'truckBidAmount',
    'truckDepositeAmount',
    'commerceVipAmount',
    'cancelCommerceSellPenalty',
    'cancelTruckPenalty',
    'cancelLineMakerBookTime',
    'inspectorAmount',
    'appComistionAmountTruck',
    'appComistionAmountCommerce',
    'appComistionAmountTransport',
    'getQuoteAmount']

  let check = await Variable.find()

  if(check.length>0){
    // console.log("here");
    const id=check[0]._id 
    // console.log("nice",id);
    const update=await Variable.findByIdAndUpdate(id,req.body)
    console.log("update",update);
    let check2 = await Variable.find()
    let lastChange = []
    let variablesChange = []
    // console.log(check)
    changer.forEach(elem=>{
        console.log(check[0][elem] , check2[0][elem])
        if (check[0][elem] != check2[0][elem]){
            lastChange.push(elem)
            variablesChange.push(check2[0][elem])
        }
    })    
    
    const Log = {
      admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
      section : "Setting",
      part : "update variables",
      success : true,
      description : `${req.admin.username}  has successfully update variables named ${lastChange} to ${variablesChange}`
    }
    await logger.create(Log)
   return res.status(201).json({
      success:true,
      date:update
    })
  }else{
   const create= Variable.create({
    commerceBidAmount,
    commerceDepositeAmount,
    truckBidAmount,
    truckDepositeAmount,
    commerceVipAmount,
    cancelCommerceSellPenalty,
    cancelTruckPenalty,
    cancelLineMakerBookTime,
    inspectorAmount,
    appComistionAmountTruck,
    appComistionAmountCommerce,
    appComistionAmountTransport,
    getQuoteAmount
   })
   const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "create variables",
    success : true,
    description : `${req.admin.username}  has successfully create variables with value of ${req.body}`,
  }
  await logger.create(Log)
   return res.status(200).json({
    success:true,
    date:create
  })
  }
});


// @desc      update Variable
// @route     POST /api/v1/admins/Variable/up/:id
// @access    private
exports.update = asyncHandler(async (req, res, next) => {
  console.log("first", req.body);
  const { name, amount, check } = req.body;

  const find = await Variable.findById(req.params.id);
  const oldName = find.name;
  const oldAmount = find.amount;

  await find.updateOne({
    name,
    amount,
    check,
  });

  // const ref = await refresh();

  // if (!ref.success) {
  //   await find.updateOne({
  //     name: oldName,
  //     amount: oldAmount,
  //   });

  //   return next(new ErrorResponse("try again", 401));
  // }

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      remove Variable
// @route     POST /api/v1/admins/Variable/rm/:id
// @access    private
exports.remove = asyncHandler(async (req, res, next) => {
  const find = await Variable.findById(req.params.id);

  await find.remove();

  // await refresh();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      all Variable
// @route     POST /api/v1/admins/Variable/all/:id
// @access    private
exports.all = asyncHandler(async (req, res, next) => {
  const findAll = await Variable.find();
  const all=findAll[0]
  res.status(200).json({
    success: true,
    data:all ,
  });
});
