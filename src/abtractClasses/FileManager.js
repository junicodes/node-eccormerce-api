

import res from "express/lib/response";
import Cloudinary from "../services/Cloudinary";
import ImageKit   from "../services/ImageKit";


class FileManager {

    constructor(service, file) {
        this.service = service;
        this.cloudinary = new Cloudinary(file);
        this.imageKit = new ImageKit(file);
    }

    //For Images 
    upload() {
        if(this.service === "cloudinary") {
            return this.cloudinary.upload();
        }
        if(this.service === "imagekit") {
            return this.imageKit.upload();
        }
    }

    find() {
        if(this.service === "cloudinary") {
            return this.cloudinary.find();
        }
        if(this.service === "imagekit") {
            return this.imageKit.find();
        }
    }

    delete() {
        if(this.service === "cloudinary") {
            return this.cloudinary.delete();
        }
        if(this.service === "imagekit") {
            return this.imageKit.delete();
        }
    }

}


export default  FileManager;