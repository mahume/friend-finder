const data = require('../data/friends')

module.exports = app => {
    app.get('api/friends', (req, res) => {
        res.json(data)
    })
    app.post('api/friends', (req, res) => {
        console.log(req.body)
    })
}

const testAnswers1 = [5, 5, 2, 4, 1, 2, 4, 1, 2, 4]
const testAnswers2 = [1, 2, 3, 4, 2, 2, 5, 3, 1, 4]

function totalDifference(arr1, arr2) {
    arr1Sum = arr1.reduce((acc, cur) => acc + cur)
    arr2Sum = arr2.reduce((acc, cur) => acc + cur)
    console.log(Math.abs(arr1Sum - arr2Sum))
}
totalDifference(testAnswers1, testAnswers2)