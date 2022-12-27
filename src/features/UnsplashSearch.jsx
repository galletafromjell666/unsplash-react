import React, { useState, useEffect } from "react";
import MasonryScroller from "../components/MasonryScroller";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { useGetPhotosQuery } from "../features/apiSlice";
const UnsplashSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  //used to force a render when data changes
  const [result, setResult] = useState(false);
  function handleChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
    setPage(1);
    setResult(false);
  }
  //RTK Query hook
  const {
    data: responseData,
    isLoading,
    isError,
  } = useGetPhotosQuery({ searchTerm, page }, { skip: !searchTerm });

  useEffect(() => {
    setResult(true);
  }, [responseData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>ERROR u.u</h1>;
  }
  console.log(responseData);
  return (
    <div>
      <NavBar currentTerm={searchTerm} onChange={handleChange}/>
      {responseData && (
        <div className="bg-gray-100  py-4 pl-4">
          <h1 className="text-4xl font-bold">{responseData.term}</h1>
          <h2 className="text-2xl">Photos: {responseData.total > 1000 ? Math.round(responseData.total/1000) + "K" : responseData.total }</h2>
        </div>
      )}

      {responseData && result && (
        <MasonryScroller
          responseData={responseData}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default UnsplashSearch;
