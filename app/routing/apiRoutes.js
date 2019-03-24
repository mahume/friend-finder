const express = require('express')
const router = express.Router()
const friendsData = require('../data/friends')

router.get('/api/friends', (req, res) => {
    res.json(friendsData)
})

router.post('/api/friends', (req, res) => {
    console.log(req.body)
    console.log(res)
    friendsData.push(req.body)



})

module.exports = router
/*
const testAnswers1 = [5, 5, 2, 4, 1, 2, 4, 1, 2, 4]
const testAnswers2 = [1, 2, 3, 4, 2, 2, 5, 3, 1, 4]

function totalDifference(arr1, arr2) {
    arr1Sum = arr1.reduce((acc, cur) => acc + cur)
    arr2Sum = arr2.reduce((acc, cur) => acc + cur)
    console.log(Math.abs(arr1Sum - arr2Sum))
}
totalDifference(testAnswers1, testAnswers2)
*/