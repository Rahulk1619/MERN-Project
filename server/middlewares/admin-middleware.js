const adminMiddleware = async(req, res, next) => {
    try {
        // console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res  
                .status(403)
                .json({message: "Access denied. User is not Admin"});
        }
        // res.status(200).json({msg: req.user.isAdmin});
        // If user is an admin,proceed to tha next middleware
        next();      
    } catch (error) {
        next(error);
    }
};


module.exports = adminMiddleware;