const express = require("express")
const categoriesRoute = require("./routes/categories")
const jokesRoute = require("./routes/jokes")

const app = express();
app.use("/categories", categoriesRoute)
app.use("/jokes", jokesRoute)

app.get("/", (req,res)=>{
    res.send("Weolcome to chucknoris api");
})



const PORT = process.env.port || 5001
app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))