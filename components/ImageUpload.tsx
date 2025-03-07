'use client';
import config from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload, ImageKitContext } from "imagekitio-next";

const authenticater=async()=>{
  try {
    const response=await fetch(`${config.env.apiEndPoint}/api/auth/imagekit`);
    
    if(!response.ok){
      const errorText=await response.text();
      throw new Error(`Request failed with status ${response.status},${errorText}`)
    }

   const data=response.json();
   const { signature,expire,token }= await data;

   return { token,expire,signature}



  } catch (error:any) {
    throw new Error(`Authentication request Failed: ${error.message}`)
    
  }

}

const ImageUpload = () => {
  return (
    <div>ImageUpload</div>
  )
}

export default ImageUpload