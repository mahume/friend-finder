const express = require('express')
const router = express.Router()
const friendsData = require('../data/friends')

router.get('/api/friends', (req, res) => {
    res.json(friendsData)
})

router.post('/api/friends', (req, res) => {
    const userInput = req.body
    const userScores = userInput.surveyAnswers.map(x => parseInt(x))
    let bestScore = 40
    let newFriend
    
    for (let i = 0; i < friendsData.length; i++) {
        const currentScore = totalDifference(friendsData[i].scores, userScores)
        
        if (currentScore <= bestScore) {
            bestScore = currentScore
            newFriend = friendsData[i].name
        }
    }
    
    console.log(`New Friend: ${newFriend}`)
})

function totalDifference(arr1, arr2) {
    arr1Sum = arr1.reduce((acc, cur) => acc + cur)
    arr2Sum = arr2.reduce((acc, cur) => acc + cur)
    return Math.abs(arr1Sum - arr2Sum)
}

module.exports = router