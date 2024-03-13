import { v2 as cloudinary} from "cloudinary";
import fs from "fs"

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath)=>{
  try{
    if (!localFilePath){
      return null // or return error method  that  no file path find 
    }
    else{
    const response =  await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
      })
      // file uploaded successfully

      console.log("File uploaded successfully on cloudinary");
      print("Response of the cloudinary",response);
      return response;
    }
  }
  catch(error){
    fs.unlink(localFilePath)
  }
}
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });


  export {uploadOnCloudinary}