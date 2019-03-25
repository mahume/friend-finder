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
    console.log(`User Scores: ${userScores}`)

    for (let i = 0; i < friendsData.length; i++) {
        const currentScore = totalDifference(friendsData[i].scores, userScores)
        console.log(`Current Score: ${currentScore}`)
        console.log(`Best Score: ${bestScore}`)
        if (currentScore <= bestScore) {
            bestScore = currentScore
            console.log(`Best score TRUE: ${bestScore}`)
        } else {
            console.log('not better')
        }
    }
    console.log(`New Friend: ${newFriend}`)
})

function totalDifference(arr1, arr2) {
    arr1Sum = arr1.reduce((acc, cur) => acc + cur)
    console.log(`Arr 1 Sum: ${arr1Sum}`)
    arr2Sum = arr2.reduce((acc, cur) => acc + cur)
    console.log(`Arr 2 Sum: ${arr2Sum}`)
    console.log(Math.abs(`Absolute diff: ${arr1Sum - arr2Sum}`))
}

module.exports = router