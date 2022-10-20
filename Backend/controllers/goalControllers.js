const asyncHandler = require('express-async-handler')

//desc Get goal
//rout GET api/goals
//access private
const getGoals = asyncHandler(async (req, res) => {
    console.log("hbello");
    res.status(200).json({ message: 'Get Goals' })
})

//desc Set goal
//rout POST/  api/goals
//access private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field ')
    }
    res.status(200).json({ message: 'set Goal' })
})

//desc update goal
//rout PUT api/goals/:id
//access private
const putGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
})

//desc Delete  goal
//rout DELETE api/goals
//access private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
})
module.exports = {
    getGoals, putGoals, setGoals, deleteGoals
}