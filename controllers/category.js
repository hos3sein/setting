const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Category = require("../models/Category");
const { refresh, upNameCat, remcontentByCat } = require("../utils/request");
const logger = require("../models/logger");


// @desc      create Category
// @route     POST /api/v1/admins/category/create
// @access    private
exports.create = asyncHandler(async (req, res, next) => {
  const { name, number } = req.body;
  console.log('>><<>><' , req.admin)
  if (!name || !number) {
    return next(new ErrorResponse("Please add name and number", 401));
  }

  console.log("name, number", name, number);
  const exitstance = await Category.findOne({name : name})
  if (exitstance){
    return next(new ErrorResponse("this number is already using", 400));
  }
   const numberExistance = await Category.findOne({number : number})
  if (numberExistance){
    const allCategory = await Category.find()
    allCategory.forEach(async elem=>{
      if (elem.number >= number){
        elem.number += 1
        await Category.findByIdAndUpdate(elem._id , elem)
      }
    }) 
  }
  const create = await Category.create({
    name,
    number,
  });
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "create new Category",
    success : true,
    description : `${req.admin.username}  has successfully create a new category with the name ${name} and number ${number}`,
  }

  await logger.create(Log)

  res.status(200).json({
    success: true,
    data: create,
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/up/:id
// @access    private
exports.update = asyncHandler(async (req, res, next) => {
  const { name, number } = req.body;

  // const body = {
  //   category: name,
  // };

  const find = await Category.findById(req.params.id);

  const body = {
    current: find.name,
    new: name,
  };
  await upNameCat(body);
  
  const numberExistance = await Category.findOne({number : number})
  if (numberExistance){
    const allCategory = await Category.find()
    allCategory.forEach(async elem=>{
      if (elem.number >= number){
        elem.number += 1
        await Category.findByIdAndUpdate(elem._id , elem)
      }
    }) 
  }
  
  
  await find.updateOne({
    name,
    number,
  });
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.user?.lastName},
    section : "Setting",
    part : "update a Category",
    success : true,
    description : `${req.admin.username}  has successfully update a category with the name ${find.name} and number ${find.number} to ${name} and ${number}`,
  }

  await logger.create(Log)
  // await refresh();
  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/up/:id
// @access    private
exports.updateSub = asyncHandler(async (req, res, next) => {
  const { subCategory, add } = req.body;

  const find = await Category.findById(req.params.id);

  subCategory.forEach(async (element) => {
    console.log(element);
    if (add) {
      await Category.findByIdAndUpdate(req.params.id, {
        $push: { subCategory: element },
      });
    }

    if (!add) {
      console.log(add);

      await Category.findByIdAndUpdate(req.params.id, {
        $pull: { subCategory: element },
      });
    }
  });

  // await refresh();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/rm/:id
// @access    private
exports.remove = asyncHandler(async (req, res, next) => {
  const find = await Category.findById(req.params.id);
  await remcontentByCat(find.name);
  console.log('lets check ittttttttt',req.admin)
  await find.remove();

  // await refresh();
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "remove a Category",
    success : true,
    description : `${req.admin.username}  has successfully remove a category with the name ${find.name} and number ${find.number}`,
  }
  await logger.create(Log)
  res.status(200).json({
    success: true,
    data: {},
  });
});


// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
exports.all = asyncHandler(async (req, res, next) => {
  const findAll = await Category.find().sort({'number' : 1})
  res.header("Access-Control-Allow-Origin", "*");
  await res.set("Access-Control-Allow-Origin", "*");

  console.log(
    "findAll=======================================================================================================================",
    findAll
  );
  res.status(200).json({
    success: true,
    data: findAll,
  });
});

// ! beyn servici beshe
// ! bayad jodsh konm
// @desc      one category
// @route     POST /api/v1/setting/category/one/:id
// @access    private
exports.one = asyncHandler(async (req, res, next) => {
  const findOne = await Category.findById(req.params.id).populate({
    path: "subCategory",
  });

  res.status(200).json({
    success: true,
    data: findOne,
  });
});
