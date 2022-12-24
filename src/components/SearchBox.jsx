import React, { useState } from "react";
import { useGetUsersQuery, useGetUserQuery } from "../features/apiSlice";
const SearchBox = () => {
  const [test1, setTest1] = useState("");
  const [name, setName] = useState("");
  const {
    data: allUsersData,
    isLoading,
    isSuccess,
    isError,
  } = useGetUsersQuery();
  const { data: singleUserData } = useGetUserQuery(test1, { skip: !test1 });
  console.log(allUsersData);
  console.log(singleUserData);

  if (isLoading) {
    return <h1>Loading... owo</h1>;
  }
  if (isError) {
    return <h1>ERROR u.u</h1>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit')
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
      {isSuccess && (
        <div>
          {allUsersData.map((u) => {
            return <h1 key={u.id}>{`name: ${u.name} email: ${u.email}`}</h1>;
          })}
        </div>
      )}
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
      
      {singleUserData && <div>{JSON.stringify(singleUserData)}</div>}
     
    </div>
  );
};

export default SearchBox;
