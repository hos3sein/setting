const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

const UploadFile = require("../models/UploadFile");
const logger = require("../models/logger");

exports.setUploadSetting = asyncHandler(async (req, res, next) => {
  const { maxSize, count } = req.body;

  const find = await UploadFile.find();
  console.log(find);
  if (find.length == 0) {
    // if not exist  create
    const create = await UploadFile.create({
      maxSize,
      count,
    });
    const Log = {
      admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
      section : "Setting",
      part : "update file size",
      success : true,
      description : `${req.admin.username}  has successfully update file size to : ${maxSize} , ${count} `,
    }
    await logger.create(Log)
    return res.status(200).json({
      success: true,
      data: create,
    });
  }

  const finded = await UploadFile.findById(find[0]._id); // if exist already update

  const updated = await finded.updateOne({
    maxSize,
    count,
  });
  const Log = {
    admin : {username :req.admin.username , phone : req.admin.phone , adminRole : req.admin?.adminRole , group :  req.admin?.group , firstName : req.admin?.firstName , lastName : req.admin?.lastName},
    section : "Setting",
    part : "create file size",
    success : true,
    description : `${req.admin.username}  has successfully create file size with value of : ${maxSize} , ${count} `,
  }
  await logger.create(Log)
  res.status(200).json({
    success: true,
    data: {},
  });
});

exports.getUploadSetting = asyncHandler(async (req, res, next) => {
  const find = await UploadFile.find();
  const maxSize=find[0].maxSize
  const count=find[0].count
   const data={maxSize:maxSize,count:count}

  if (find.length == 0) {
    // if not exist  create

    return res.status(500).json({
      success: false,
      data: "no setting exist",
    });
  }

  res.status(200).json({
    success: true,
    data: data,
    adminData:find[0]
  });
});
