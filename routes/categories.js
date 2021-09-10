const axios = require("axios")
const express= require('express')

const router = express.Router();

router.get("/", async(req, res)=>{
    try {
        const {data} = await axios.get('https://api.chucknorris.io/jokes/categories')
        console.log({data});
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;