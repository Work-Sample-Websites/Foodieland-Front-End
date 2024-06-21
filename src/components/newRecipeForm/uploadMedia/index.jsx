import { useRef } from 'react';
// import { storage } from "../../../services/firebase";

function UploadMedia({ setUploadPoster, setUploadVideo }) {
  const uploadPosterRef = useRef();
  const uploadVideoRef = useRef();

  async function uploadPosterHandler(event) {
    // const poster = event.target.files[0];
    // const posterRef = ref(storage, `recipes/${poster.name + uuidv4()}`);
    // const res = await uploadBytes(posterRef, poster);
    // const url = await getDownloadURL(res.ref);
    // setUploadPoster(url);
  }

  async function uploadVideoHandler(event) {
    // const video = event.target.files[0];
    // const videoRef = ref(storage, `videos/${video.name + uuidv4()}`);
    // const res = await uploadBytes(videoRef, video);
    // const url = await getDownloadURL(res.ref);
    // setUploadVideo(url);
  }

  return (
    <div className="flex justify-between">
      <div className="flex flex-col mt-4">
        <input
          type="file"
          className="md:w-[60%] lg:w-[100%] border border-gray-500  rounded-2xl py-2 px-6  hidden"
          onChange={uploadPosterHandler}
          ref={uploadPosterRef}
        />
        <button
          type="button"
          className="bg-lameBlue  text-mainBlue py-2 basis-full md:basis-[14%] px-4  rounded-xl cursor-pointer mr-2 w-full sm:w-auto"
          onClick={() => uploadPosterRef.current.click()}
        >
          upload poster
        </button>
      </div>
      <div className="flex flex-col mt-4">
        <input
          type="file"
          className="md:w-[60%] lg:w-[100%] border border-gray-500  rounded-2xl py-2 px-6 hidden"
          onChange={uploadVideoHandler}
          ref={uploadVideoRef}
        />
        <button
          className="bg-lameBlue  text-mainBlue py-2 basis-full md:basis-[14%] px-4  rounded-xl cursor-pointer mr-2 w-full sm:w-auto"
          type="button"
          onClick={() => uploadVideoRef.current.click()}
        >
          Upload Video
        </button>
      </div>
    </div>
  );
}

export default UploadMedia;
