const express = require('express')
const { putNewLogs, allLogs, getAdminLog, getTimeLogs, getRangeTimeLogs } = require('../controllers/logerr')


const router = express.Router()


router.get('/test' , (req , res , next)=>{
    console.log('test pass from here.....')
})

router.get('/getAll' , allLogs)

router.get('/getAdminLog/:admin' , getAdminLog)

router.get('/getlogsbytime/:time' ,getTimeLogs)

router.get('/getrangelogs/:time1/:time2' , getRangeTimeLogs)

router.get('/lastlogs' , (req , res , next)=>{
    console.log('test pass from here.....')
})


router.post('/putlog' , putNewLogs)

router.patch('/deletelogs' , (req , res , next)=>{
    console.log('delete last logs....')
})




module.exports = router


