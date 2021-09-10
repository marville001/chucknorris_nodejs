const axios = require("axios")

exports.getCategories = async(req, res)=>{
    try {
        const {data} = axios.get('https://api.chucknorris.io/jokes/categories')
        console.log({data});
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}