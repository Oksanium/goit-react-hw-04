import { useEffect, useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { Blocks as Loader } from "react-loader-spinner";

import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import LoadMore from "./components/LoadMore/LoadMore";
import ImageModal from "./components/ImageModal/ImageModal";
import getPhotos from "./getPhotos";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [picObj, setPicObj] = useState({});
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [morePhotosAvailable, setMorePhotosAvailable] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (query === "") return;
    setLoaderVisible(true);
    (async () => {
      try {
        const { data } = await getPhotos(query, page);
        setPhotos([...photos, ...data.hits]);
        setMorePhotosAvailable(data.totalHits - page * perPage > 0);
        if (data.totalHits === 0) toast("no results");
      } catch {
        toast("fail");
      } finally {
        setLoaderVisible(false);
      }
    })();
  }, [query, page]);

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target[0].value.trim() === "") {
      toast("query is empty");
      return;
    }
    setMorePhotosAvailable(false);
    setPhotos([]);
    setQuery(e.target[0].value);
  }

  return (
    <>
      <Toaster />
      <Header
        setQuery={setQuery}
        setPhotos={setPhotos}
        setMorePhotosAvailable={setMorePhotosAvailable}
        handleSubmit={handleSubmit}
      />
      {photos.length > 0 && (
        <Gallery
          photos={photos}
          setModalIsOpen={setModalIsOpen}
          setPicObj={setPicObj}
        />
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {morePhotosAvailable && <LoadMore setPage={setPage} page={page} />}
        {loaderVisible && (
          <Loader
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        )}{" "}
      </div>
      <ImageModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        picObj={picObj}
      />
    </>
  );
}

export default App;
