const express = require("express")

const app = express();

app.get("/", (req,res)=>{
    res.send("Weolcome to chucknoris api");
})

const PORT = process.env.port || 5001
app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))