
import cloudinary from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


class Cloudinary {
    
    constructor(file) {
        this.file = file;
    }

    async upload() {
        console.log("in here for cloudinary")
        console.log(this.file,this.file.length)

        if(this.file && this.file.length > 0) {
            console.log(this.file.length, "y")
            return true;
        }

        // return {
        //     status: 400,
        //     message: "You have an error",
        //     info: "Your Image file was not uploaded, please referesh and try again"
        // };
    }

    async find() {
        
    }

    async delete() {
        
    }

}


export default Cloudinary;