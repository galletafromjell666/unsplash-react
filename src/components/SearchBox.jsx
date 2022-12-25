import React, { useState, useEffect } from "react";
import { useGetPhotosQuery } from "../features/apiSlice";
import MasonryInfiniteScroller from "react-masonry-infinite";
const SearchBox = () => {
  const [test1, setTest1] = useState("");
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [result, setResult] = useState(false);

  const {
    data: singleUserData,
    isLoading,
    isError,
    isSuccess,
    isFetching,
  } = useGetPhotosQuery({ test1, page }, { skip: !test1 });

  useEffect(() => {
    setResult(true)
  }, [singleUserData]);

  //forcing update state
  console.log(`Data = `, singleUserData);
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
    setResult(false)
    setPage(1);
  };
  console.log(`page = ${page}`);
  return (
    <div>
      {isFetching && <h1>isFetching</h1>}
      {isSuccess && <h1>isSuccess</h1>}
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
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setResult(!result);
        }}
      >
        BUTTON TEST 1
      </button>
      {/* 
       {singleUserData &&
        singleUserData.results.map((el) => {
          return <img src={el.urls.thumb} alt={el.description}></img>;
        })} 
      */}

      {isSuccess && result && (
        <div className="container">
          <MasonryInfiniteScroller
          sizes={[{ columns: 1, gutter: 20 }, { mq: '768px', columns: 2, gutter: 20 }, { mq: '1024px', columns: 3, gutter: 20 }]}
            className="masonry"
            hasMore={page < 4}
            loadMore={() => {
              isLoading || isFetching || setPage(page + 1);
            }}
          >
            {singleUserData.results.map((el) => (
              <div
                className="card"
                key={el.id}
                style={{ height: "350px", width: "500px" }}
              >
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
