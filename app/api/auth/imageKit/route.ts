import config from "@/lib/config";
import ImageKit from "imagekit";



const imageKit = new ImageKit({
    publicKey:config.env.imageKit.publicKey,
    privateKey:config.env.imageKit.privatekey,
    urlEndpoint:config.env.imageKit.urlEndPoint,
});
