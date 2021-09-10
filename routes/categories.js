const axios = require("axios")
const express= require('express')

const router = express.Router();

router.get("/", async(req, res)=>{
    try {
        const {data} = await axios.get('https://api.chucknorris.io/jokes/categories')
        console.log({data});
        res.send(data)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;