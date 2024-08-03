const asyncHandler = require("../middleware/async");

const UploadFile = require("../models/UploadFile");
const Grade=require("../models/Grade")
const Deposite=require("../models/DepositePersent")


exports.getAllSetting = asyncHandler(async (req, res, next) => {
   const uploadSetting=await UploadFile.find()
   const gradeSetting=await Grade.find()
   const depositeSetting=await Deposite.find()
   
   console.log(uploadSetting[0],gradeSetting,depositeSetting[0]);
    
   let gradeArray=[]
   gradeSetting.map(item=>{
     const grade=item.grade
     const price=item.price
     const obj={grade,price}
     gradeArray.push(obj)

   })

   const data={
    fileLimitSize:uploadSetting[0].maxSize,
    depositePercent:depositeSetting[0].depositePercent,
    grades:gradeArray
   }


   res.status(200).json({success:true,data})


});
