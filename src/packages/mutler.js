import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, 'uploads/');
    },
    filename: function (req, file, next) {
        next(null, new Date().toISOString() + '-' + file.originalname)
    }
});


const fileFilter = (req, file, next) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        next(null, true);
    }else {
        next({ message: 'Unsupported file format'}, false)
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 }, //1024 * 1024
    fileFilter: fileFilter
})

export default upload;