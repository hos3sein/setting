const asyncHandler = require("../middleware/async");
const logger = require("../models/logger");



exports.putNewLogs = asyncHandler(async(req , res , next)=>{
    const {admin , section , part , success , description} = req.body;

    if (!admin || !section || !part || !success || !description){
        res.status(400).json({
            success : false,
            payload : {
                data : null,
                error : 'the body is not complete...'
            }
        })
    }

    new logger(req.body).save().then((resault)=>{
        res.status(200).json({
            success : true,
            payload : {
                data : resault,
                error : null
            }
        })
    }).catch((err)=>{
        res.status(503).json({
            success : false,
            payload : {
                data : null,
                error : `${err}`
            }
        })
    })
})


exports.allLogs =asyncHandler(async(req , res , next)=>{
    const logs = await logger.find()
    res.status(200).json({
        success : true,
        data : logs
    })
}) 


exports.getAdminLog = asyncHandler(async(req , res , next)=>{
    const logs = await logger.find({'admin.phone' : req.params.phone })
    res.status(200).json({
        success : true,
        data : logs
    })
})


exports.getTimeLogs = asyncHandler(async(req , res , next)=>{
    let time;
    if (req.params.time == 1){
    let date = new Date(Date.now() - 86400000)
    let now = new Date()
    let logs = await logger.find({$and : [
        {createdAt : {$gt:date}},
        {createdAt : {$lt:now}},
    ]})
    res.status(200).json({
        success : true,
        data : logs
    })
    }
    if (req.params.time == 2){
        let date = new Date(Date.now() - 172800000)
        let now = new Date()
        let logs = await logger.find({$and : [
            {createdAt : {$gt:date}},
            {createdAt : {$lt:now}},
        ]})
        res.status(200).json({
            success : true,
            data : logs
        })
    }
    if (req.params.time == 3){
        let date = new Date(Date.now() - 604800000)
        let now = new Date()
        let logs = await logger.find({$and : [
            {createdAt : {$gt:date}},
            {createdAt : {$lt:now}},
        ]})
        res.status(200).json({
            success : true,
            data : logs
        })
    }
    if (req.params.time == 4){
        let date = new Date(Date.now() - 1209600000)
        let now = new Date()
        let logs = await logger.find({$and : [
            {createdAt : {$gt:date}},
            {createdAt : {$lt:now}},
        ]})
        res.status(200).json({
            success : true,
            data : logs
        })
    }
    if (req.params.time == 5){
        let date = new Date(Date.now() - 2592000000)
        let now = new Date()
        let logs = await logger.find({$and : [
            {createdAt : {$gt:date}},
            {createdAt : {$lt:now}},
        ]})
        res.status(200).json({
            success : true,
            data : logs
        })
    }
    if (req.params.time == 6){
        let date = new Date(Date.now() - 7776000000)
        let now = new Date()
        let logs = await logger.find({$and : [
            {createdAt : {$gt:date}},
            {createdAt : {$lt:now}},
        ]})
        res.status(200).json({
            success : true,
            data : logs
        })
    }
    if (req.params.time == 7){
        let date = new Date(Date.now() - 15552000000)
        let now = new Date()
        let logs = await logger.find({$and : [
            {createdAt : {$gt:date}},
            {createdAt : {$lt:now}},
        ]})
        res.status(200).json({
            success : true,
            data : logs
        })
    }
    if (req.params.time == 8){
        let date = new Date(Date.now() - 31536000000)
        let now = new Date()
        let logs = await logger.find({$and : [
            {createdAt : {$gt:date}},
            {createdAt : {$lt:now}},
        ]})
        res.status(200).json({
            success : true,
            data : logs
        })
    }
    if (req.params.time == 9){
        let logs = await logger.find()
        res.status(200).json({
            success : true,
            data : logs
        })
    }
})


exports.getRangeTimeLogs = asyncHandler(async(req , res , next)=>{
    const now = new Date(req.params.time1)
    const now2 = new Date(req.params.time2)
    const logs = await logger.find({$and:[
        {createdAt : {$lt : now2}},
        {createdAt : {$gt : now}},
    ]})
    res.status(200).json({
        success : true,
        data : logs
    })
})