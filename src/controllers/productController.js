import User from "../models/User";
import Product from "../models/Product";
import FileManager from "../abtractClasses/FileManager";


export const getOne = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        const {password, ...others} = user._doc;

        res.status(200).json({
            message: "User account deleted succesfully!",
            data: others
        });

    } catch (error) {
         res.status(500).json(error);
    }
};

export const getAll = async (req, res) => {
  const query = req.query.new;

  try {
    const users = query 
        ? await User.find().sort({ _id: -1 }).limit(req.query.limit)
        : await User.find();
    
    res.status(200).json({
        message: "All user in this application!",
        data: users,
    });

  } catch (error) {
    res.status(500).json(error);
  }
};

export const create = async (req, res) => {

    //Or if this doesn't work
    const newProduct = new Product(req.body);

    //get The File upload Manageer
    const fileUpload = new FileManager(process.env.MEDIA_STORAGE_SERVICE, req.file); //indicate the service type for upload (check .env file)

    try { 

        //Perform Upload
        const fileRes = await fileUpload.upload();

        console.log(fileRes, "line");

        if(fileRes.status != 200) {
          res.status(fileRes.status).json(fileRes);
        }


        return false;

        //Add File path to request body before save
        console.log(req.body)

        const savedProduct = await newProduct.save();

        res.status(200).json({
            message: "Product created succesfully!",
            data: savedProduct,
        });

    } catch (error) {
        res.status(500).json(error);
    }
}

export const update = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      message: "User Profile updated succesfully!",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const destroy = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "User account deleted succesfully!"
        });

    } catch (error) {
         res.status(500).json(error);
    }
}