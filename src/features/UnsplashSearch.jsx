import React, { useState, useEffect } from "react";
import MasonryScroller from "../components/MasonryScroller";
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
    <div >
      <SearchBar currentTerm={searchTerm} onChange={handleChange} />
      <h1>searchterm = {searchTerm}</h1>
      <h1>page = {page}</h1>

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
