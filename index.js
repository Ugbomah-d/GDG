const express = require("express")
const cors = require("cors") 
const morgan = require("morgan") 
const main_router = require("./router/route")
const connectDB = require("./db/compose")
const dotenv = require("dotenv").config()

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use("", main_router)

app.get("/", async(req, res) => {
    res.status(200).json({
        message: "You have complied succesfully",
        code: 200, 
    })
})

app.listen(port, () => {
    connectDB(process.env.DATABASE_URL)
    console.log(`Listening on port ${port}`)
})