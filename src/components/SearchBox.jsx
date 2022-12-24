import React, { useState } from "react";
import { useGetPhotosQuery } from "../features/apiSlice";
const SearchBox = () => {
  const [test1, setTest1] = useState("");
  const [name, setName] = useState("");

  const {
    data: singleUserData,
    isLoading,
    isError,
    isSuccess,
  } = useGetPhotosQuery(test1, { skip: !test1 });

  console.log(singleUserData);

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
          setTest1(1);
        }}
      >
        BUTTON TEST 1
      </button>
      {singleUserData &&
        singleUserData.results.map((el) => {
          return <img src={el.urls.thumb} alt={el.description}></img>;
        })}
      {singleUserData && <div>{JSON.stringify(singleUserData)}</div>}
    </div>
  );
};

export default SearchBox;
