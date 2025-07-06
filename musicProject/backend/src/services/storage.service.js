import ImageKit from "imagekit";
import dotenv from "dotenv";


dotenv.config(); // this is essential to load environment variables from .env file

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL,
});

export let uploadAudio = (file) => {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        // ye upload method imagekit ka hai jo file ko upload karega
        file: file,
        fileName: "audio_" + Date.now(), // file ka naam jo upload hoga
        folder: "musicProject", //imagekit ma ye folder create ho jayega agar na ho tho bhi aur file is me upload ho jayegi
      },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};


