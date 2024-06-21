import axios from 'axios';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchArticles } from '../../features/article/articleSlice';
import { authorData } from '../../services/utils/data';
import Spinner from '../login/components/spinner';
import TextEditor from './textEditor';

function NewArticleForm() {
  const { articles } = useSelector((state) => state.articles);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadPoster] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('Somdatta Saha');
  const [isLoading, setIsLoading] = useState(false);
  const uploadPosterRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function textHandler(data) {
    setDescription(data.replace(/<\/?p>/g, ''));
  }

  async function uploadPosterHandler(event) {
    // const poster = event.target.files[0];
    // const posterRef = ref(storage, `articles/${poster.name + uuidv4()}`);
    // const res = await uploadBytes(posterRef, poster);
    // const url = await getDownloadURL(res.ref);
    // setUploadPoster(url);
  }

  async function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    const [selectedAuthorData] = authorData.filter(
      (item) => item.author === selectedAuthor,
    );

    const article = {
      id: uuidv4(),
      title,
      description,
      img: uploadPoster,
      author: selectedAuthor,
      profile: selectedAuthorData.profile,
      uploadDate: new Date().toISOString(),
    };

    const nerArticles = [...articles];
    nerArticles.push(article);
    try {
      const { data } = await axios.put(
        'http://localhost:3001/articles.json',
        JSON.stringify(nerArticles),
      );
      setIsLoading(false);

      dispatch(fetchArticles(data));
      navigate('/', { replace: true });
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="title" className="pb-2 pl-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            className={` md:w-[60%] lg:w-[40%] border border-gray-500  rounded-2xl py-2 px-6 `}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4">
          <TextEditor textHandler={textHandler} />
        </div>
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
        <div className="flex flex-col mt-4 basis-full md:w-[40%]">
          <label htmlFor="" className="pb-2 pl-2">
            author
          </label>
          <select
            id="author"
            name="author"
            className="border border-gray-500  rounded-2xl py-2 px-6  "
            onChange={(e) => setSelectedAuthor(e.target.value)}
          >
            <option value="Somdatta Saha">Somdatta Saha</option>
            <option value="Pragya Subedy">Pragya Subedy</option>
            <option value="Gauri Rohatgi">Gauri Rohatgi</option>
            <option value="Priyaja Bakshi">Priyaja Bakshi</option>
          </select>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="bg-mainBlue hover:bg-darkerBlue text-white py-2 basis-full md:basis-[14%] rounded-xl cursor-pointer mr-2 w-full sm:w-auto"
          >
            {isLoading ? <Spinner /> : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewArticleForm;
