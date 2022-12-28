import React, { useEffect, useState } from "react";
import MasonryInfiniteScroller from "react-masonry-infinite";
import Image from "./Image";
import { ImSpinner7 } from "react-icons/im";

const MasonryScroller = ({ responseData, page, setPage }) => {
  //get window width
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  //finish width
  const loadMore = () => {
    setTimeout(() => {
      setPage(page + 1);
    }, 500);
  };

  return (
    <div className="flex w-full justify-center pt-6 md:pt-12">
      <MasonryInfiniteScroller
        style={{ width: "100%" }}
        sizes={[
          { columns: 1, gutter: 10 },
          { mq: "690px", columns: 2, gutter: 20 },
          { mq: "1024px", columns: 3, gutter: 30 },
        ]}
        hasMore={responseData.results.length < responseData.total}
        loadMore={loadMore}
        loader={
          <div key={0} className="flex items-center justify-center my-12">
            <ImSpinner7 className="text-8xl animate-spin text-black" />
          </div>
        }
      >
        {responseData.results.map((el) => (
          <Image key={el.id} {...{ ...el, windowSize }} />
        ))}
      </MasonryInfiniteScroller>
    </div>
  );
};

export default MasonryScroller;
