import React, { useState } from "react";
import { useGetPhotosQuery } from "../features/apiSlice";
import MasonryInfiniteScroller from "react-masonry-infinite";
const SearchBox = () => {
  const [test1, setTest1] = useState("");
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const {
    data: singleUserData,
    isLoading,
    isError,
    isSuccess,
  } = useGetPhotosQuery({ test1, page }, { skip: !test1 });

  console.log(singleUserData);
  const cardData = singleUserData?.results ?? [];
  console.log(`cardData final = `, cardData)
  if (isLoading) {
    return <h1>Loading... owo</h1>;
  }
  if (isError) {
    return <h1>ERROR u.u</h1>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    setTest1(name);
  };
console.log(`page = ${page }`)
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
      Sucess!!
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        BUTTON TEST 1
      </button>
      {/*
      {singleUserData &&
        singleUserData.results.map((el) => {
          return <img src={el.urls.thumb} alt={el.description}></img>;
        })} */}
      {singleUserData && (
        <div className="container">
        <MasonryInfiniteScroller
        className="masonry"
          hasMore={page < 4}
          loadMore={()=> {
            console.log('loadMore');setPage(page+1)}}
        >
          {cardData.map((el) => (
            <div className="card" key={el.id} style={{height: "1600px", width: '500px'}}>
              <img src={el.urls.thumb} alt={el.description}></img>
            </div>
          ))}
        </MasonryInfiniteScroller>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
