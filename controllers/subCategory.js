const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const { refresh } = require("../utils/request");

// @desc      create Category
// @route     POST /api/v1/admins/category/create/:id
// @access    private
exports.create = asyncHandler(async (req, res, next) => {
  const { name, number } = req.body;

  const create = await SubCategory.create({
    name,
    number,
  });

  await Category.findByIdAndUpdate(req.params.id, {
    $push: { subCategory: create._id },
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

  const find = await SubCategory.findById(req.params.id);

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
// @route     POST /api/v1/admins/permission/rm/:id
// @access    private
exports.remove = asyncHandler(async (req, res, next) => {
  const find = await SubCategory.findById(req.params.id);

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
  const findAll = await SubCategory.find();

  res.status(200).json({
    success: true,
    data: findAll,
  });
});
