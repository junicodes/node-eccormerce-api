import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({
            message: "You are not authenticated!"
        });
    }

    const token = authHeader.split(" ")[1];
    
    //Verify the user
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {{
        if(err) {
            return res.status(403).json({
                message: "Token is not valid!"
            });
        }

        req.user = user;
        next();
    }});
}