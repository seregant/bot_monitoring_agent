const config = require('../config/config')

exports.tokenValidation = (req,res,next)=>{
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ')
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send({status:'401',message:'unauthorized'})
            } else {
                let token = authorization[1]
                if(token != config.key){
                    return res.status(401).send({status:'401',message:'unauthorized'})
                }else{
                    return next()
                }
            }
        } catch (err) {
            return res.status(403).send({status:'403',message:'forbidden'})
        }
    } else {
        return res.status(401).send({status:'401',message:'unauthorized'})
    }
}