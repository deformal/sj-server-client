import express from "express"
import cors from "cors"

const port = 9000
const app = express()

app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.text())


app.post("/sum", async (req, res) => {
    const num1 = parseInt(req.body.num1)
    const num2 = parseInt(req.body.num2)
    const sum = num1 + num2
    res.status(200).json({
        sum
    })
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})
