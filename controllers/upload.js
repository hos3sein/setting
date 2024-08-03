const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

const UploadFile = require("../models/UploadFile");

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
