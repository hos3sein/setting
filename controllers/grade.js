const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

const Grade = require("../models/Grade");


// @desc      create Permission
// @route     POST /api/v1/admins/permission/create
// @access    private
exports.create = asyncHandler(async (req, res, next) => {
  
  const { grade, price } =
    req.body;

  const create = await Grade.create({
    grade,
    price
  });

  res.status(200).json({
    success: true,
    data: create,
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/up/:id
// @access    private
exports.update = asyncHandler(async (req, res, next) => {
  const { grade, price } = req.body;

  const find = await Grade.findById(req.params.id);

  await find.updateOne({
    grade,
    price
  });

  // const ref = await refresh();
  res.status(200).json({
    success: true,
    data: {},
  });
});


exports.remove = asyncHandler(async (req, res, next) => {
  const find = await Grade.findById(req.params.id);

  await find.remove();

  // const ref = await refresh();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
exports.all = asyncHandler(async (req, res, next) => {
  const findAll = await Grade.find()

  res.status(200).json({
    success: true,
    data: findAll,
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
