import { authenticate } from "./authenticate"

export const isOnlyAdmin = (req, res, next) => {
    
    if(!req.user.isAdmin) {
        return res.status(403).json({
            message: "You are not permitted to access this route!"
        });
    }

    next();
}