const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');
dotenv.config();
const requireJWT = (req, res, next) => {
    let token = req.headers['x-access-token']
    if(!token){
        return res.status(401).send({auth: false, message: "No token provided"})
    }
    else if(jwt.verify(token, process.env.RSA_PRIVATE_KEY, (err, decoded)=>{
        if(err){
            return res.status(500).send({auth: false, message: "Token Incorrect"})
        }
        else{
            next()
        }
    })){

    }
}

module.exports = requireJWT