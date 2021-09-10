const axios = require("axios")
const express= require('express')

const router = express.Router();

router.get("/", async(req, res)=>{
    const {category} = req.query;
    if(!category) return res.status(400).send({error: "No query for category"});
    try {
        const {data} = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        console.log({data});
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;