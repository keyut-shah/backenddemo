import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
const registeruser = asyncHandler(async (req, res) => {
    
 
        const {username,email,password,fullname,} = req.body

        console.log(" Username ",username , " email ",email ,  " password ",password ," fullname ", fullname)

        if(
                [fullname,email,password,username].some((field)=>
                field?.trim() == "")
        ){
                throw new ApiError(400,"All fields are required")
        }

        const existedUSer = await User.findOne({$or :[{username},{email}]})
        if(existedUSer){
                throw new ApiError(409,"username or email already exist")
        }
        console.log("req files ",req.files)
        // const {avatar,coverImage} = req.files

      const  avatarlocalfile =  req.files?.avatar[0]?.path 
      const coverimagelocalfile = req.files?.coverImage[0]?.path


      if(!avatarlocalfile){
        throw new ApiError(400,"avatar is required")
      }

      await uploadOnCloudinary(avatarlocalfile)
      await uploadOnCloudinary(coverimagelocalfile)

      const user = User.create({

        fullname,
        avatar:avatar.url,
        coverImage : coverImage?.url || "",
        email : 
        password,
        username:username.toLowerCase()

      })

     const createduser = await  User.findById(user._id).select(
        "-password -refreshToken"
     )
     if(!createduser)
     {
        throw new ApiError(500,"Something went wrong while registering")
     }

     return res.staus(201).json(
        new ApiResponse(200 , createduser , "User Register successfully")
     )

})


export {registeruser}