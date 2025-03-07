const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (imagePath: string) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath);
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

// Example usage
uploadImage("/path/to/your/image.png").then((url) => console.log(url));
