const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Permission = require("../models/Permission");
const Group = require("../models/Group");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const Variable = require("../models/Variable");
const Point = require("../models/Point");

const { refresh } = require("../utils/request");

// PERMISSION

// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
exports.allPer = asyncHandler(async (req, res, next) => {
  const findAll = await Permission.find();

  res.status(200).json({
    success: true,
    data: findAll,
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/create
// @access    private
exports.createPerm = asyncHandler(async (req, res, next) => {
  const data = req.body.data ? req.body.data : req.body;

  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    await Permission.create(element);
  }

  // await refresh();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// POINT

// @desc      create Point
// @route     POST /api/v1/admins/point/create
// @access    private
exports.createPoint = asyncHandler(async (req, res, next) => {
  const { like, comment, createForum } = req.body;

  const create = await Point.create({
    like,
    comment,
    createForum,
  });

  res.status(200).json({
    success: true,
    data: create,
  });
});

// @desc      create Point
// @route     POST /api/v1/admins/point/create
// @access    private
exports.allPoint = asyncHandler(async (req, res, next) => {
  const create = await Point.find();

  res.status(200).json({
    success: true,
    data: create[0],
  });
});

// @desc      remove Point
// @route     POST /api/v1/admins/Point/rm/:id
// @access    private
exports.removePoint = asyncHandler(async (req, res, next) => {
  const find = await Point.findById(req.params.id);

  await find.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// GROUP

// @desc      create Permission
// @route     POST /api/v1/admins/permission/create
// @access    private
exports.createGroup = asyncHandler(async (req, res, next) => {
  for (let i = 0; i < req.body.data.length; i++) {
    const element = req.body.data[i];

    await Group.create(element);
  }

  // await refresh();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
exports.allGroup = asyncHandler(async (req, res, next) => {
  const findAll = await Group.find().populate({ path: "permissions" });

  res.status(200).json({
    success: true,
    data: findAll,
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
exports.one = asyncHandler(async (req, res, next) => {
  const findAll = await Group.findById(req.params.id).populate({
    path: "permissions",
  });

  res.status(200).json({
    success: true,
    data: findAll,
  });
});

// DELETE

// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
exports.delAll = asyncHandler(async (req, res, next) => {
  await Group.remove();
  await Permission.remove();
  await Category.remove();
  await SubCategory.remove();
  await Variable.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
exports.allVars = asyncHandler(async (req, res, next) => {
  const findAll = await Variable.find();

  res.status(200).json({
    success: true,
    data: findAll,
  });
});
