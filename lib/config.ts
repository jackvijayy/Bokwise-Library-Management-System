const config={
    env:{
        apiEndPoint:process.env.NEXT_PUBLIC_API_ENDPOINT!,
        imageKit:{
            publicKey:process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            urlEndPoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            privatekey:process.env.IMAGEKIT_PRIVATE_KEY!,


        }
    }

}

export default config;