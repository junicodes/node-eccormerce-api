
import User from "../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";




export const register = async (req, res) => {

    try {

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_REC).toString()
        })

        const saveUser = await newUser.save();

        res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const login = async (req, res) => {

        try {
            
        const user = await User.findOne({ username: req.body.username });

        //Validate if user exists
        if(!user) {
            return res.status(401).json({message: "Wrong credentials"});
        } 

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_REC
        );

        const orignalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        
        //Validate if the password is correct
        if(orignalPassword !== req.body.password) {
            return res.status(401).json({message: "Wrong credentials"});
        }

        //generate a jwt token
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
                user: user,
            }, 
            process.env.JWT_SEC,
            {expiresIn: "3d"}
        );
        
        //Remove the password from payload
        const { password, ...others } = user._doc;

        res.status(200).json({
            data: others,
            accessToken
        });
    } catch (error) {
        res.status(500).json(error)
    }
}
