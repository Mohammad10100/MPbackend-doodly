// Import the required modules
const express = require("express")
const router = express.Router()

// importing controllers
const { top5rank } = require("../controllers/Rank")

//route path
router.get("/top5rank", top5rank)

// Export the router for use in the main application
module.exports = router