const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Permission = require("../models/Permission");
const { refresh } = require("../utils/request");

// @desc      create Permission
// @route     POST /api/v1/admins/permission/create
// @access    private
exports.create = asyncHandler(async (req, res, next) => {
  const {
    name,
    number,
    description,
    iconName,
    serviceName,
    prefixName,
    funcName,
    libIconName,
  } = req.body;

  const create = await Permission.create({
    name,
    number,
    description,
    iconName,
    libIconName,
    serviceName,
    prefixName,
    funcName,
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
  const { name, number, description, iconName, libIconName } = req.body;

  const find = await Permission.findById(req.params.id);

  await find.updateOne({
    name,
    number,
    description,
    iconName,
    libIconName,
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
  const find = await Permission.findById(req.params.id);

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
  const findAll = await Permission.find();

  res.status(200).json({
    success: true,
    data: findAll,
  });
});
