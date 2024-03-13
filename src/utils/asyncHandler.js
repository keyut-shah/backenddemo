
// async handler with promise
const asyncHandler = (requestHandler) =>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>{next(err)})
    }
}



export {asyncHandler}



//   const asyncHandler = (fn)=>{ async ()=>{}}    or const asyncHandler = (fn)=> async(req,res,next)=>{}  // both are same 


// this is async handler with try catch 
//  const asyncHandler = (fn)=>async(req,res,next)=>{
//         try{
//             await fn(req,res,next)
//         }
//         catch(error){
//             res.status(err.code || 500 ).json({
//                 success:false,
//                 message:err.message
//             })
//         }
// }