const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Category = require("../models/Category");
const { refresh, upNameCat, remcontentByCat } = require("../utils/request");

// @desc      create Category
// @route     POST /api/v1/admins/category/create
// @access    private
exports.create = asyncHandler(async (req, res, next) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return next(new ErrorResponse("Please add name and number", 401));
  }

  console.log("name, number", name, number);
  const create = await Category.create({
    name,
    number,
  });

  // await refresh();

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

  await find.updateOne({
    name,
    number,
  });

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

  await find.remove();

  // await refresh();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
exports.all = asyncHandler(async (req, res, next) => {
  const findAll = await Category.find();
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
