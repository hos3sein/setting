const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Permission = require("../models/Permission");
const Group = require("../models/Group");
const { refresh } = require("../utils/request");

// @desc      create Permission
// @route     POST /api/v1/admins/permission/create
// @access    private
exports.create = asyncHandler(async (req, res, next) => {
  const { name, number,description,iconName} =
    req.body;

  const create = await Group.create({
    name,
    number,
    description,
    iconName,
  });

  // const ref = await refresh();

  // if (!ref.success) {
  //   console.log("erroooooooooor");
  // }

  // if (ref.success) {
  //   console.log("success");
  // }

  res.status(200).json({
    success: true,
    data: create,
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/up/:id
// @access    private
exports.update = asyncHandler(async (req, res, next) => {
  const { number, description, iconName} = req.body;

  const find = await Group.findById(req.params.id);

  await find.updateOne({
    number,
    description,
    iconName
  });

  // const ref = await refresh();
  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/up/:id
// @access    private
exports.updatePerm = asyncHandler(async (req, res, next) => {
  const { permissions, add } = req.body;

  const find = await Group.findById(req.params.id);

  permissions.forEach(async (element) => {
    if (add) {
      await Group.findByIdAndUpdate(find._id, {
        $push: { permissions: element },
      });
    }

    if (!add) {
      await Group.findByIdAndUpdate(find._id, {
        $pull: { permissions: element },
      });
    }
  });

  // const ref = await refresh();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// ! perm nadare va estefade nemishe
// @desc      create Permission
// @route     POST /api/v1/admins/permission/up/:id
// @access    private
exports.delPerm = asyncHandler(async (req, res, next) => {
  const { permissions } = req.body;

  const find = await Group.findById(req.params.id);

  permissions.forEach(async (element) => {
    const perm = await Permission.findById(element);

    await Group.findByIdAndUpdate(find._id, {
      $pull: { permissions: element },
    });
  });

  // const ref = await refresh();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/rm/:id
// @access    private
exports.remove = asyncHandler(async (req, res, next) => {
  const find = await Group.findById(req.params.id);

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
  const findAll = await Group.find()

  res.status(200).json({
    success: true,
    data: findAll,
  });
});

// @desc      create Permission
// @route     POST /api/v1/admins/permission/all/:id
// @access    private
exports.one = asyncHandler(async (req, res, next) => {
  const findAll = await Group.findById(req.params.id)
  res.status(200).json({
    success: true,
    data: findAll,
  });
});
