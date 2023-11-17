import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//Upload a video
export const uploadVideo = async (reqBody)=>{
        return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

//get all videos from json server
export const getAllVideos = async ()=>{
    //make get http request to  http://localhost:4000/vidoes to get all videos from json server and return response to view component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}
//get a video from json server
export const getAVideo = async (id)=>{
        //make get http request to  http://localhost:4000/vidoes/id to get all videos from json server and return response to vidoeCard component

    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

//remove a videos from json server
export const deleteAVideo = async (id)=>{
    //make delete http request to  http://localhost:4000/vidoes to remove a video from json server and return response to view component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}