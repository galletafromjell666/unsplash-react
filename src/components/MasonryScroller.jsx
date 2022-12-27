import React from "react";
import MasonryInfiniteScroller from "react-masonry-infinite";
import Image from "./Image";
import { ImSpinner7 } from "react-icons/im";


const MasonryScroller = ({ responseData, page, setPage }) => {
  const loadMore = () => {
    setTimeout(() => {
      setPage(page + 1);
    }, 500);
  };

  return (
    <div className="flex justify-center pt-12">
      <MasonryInfiniteScroller
        sizes={[
          { columns: 1, gutter: 20 },
          { mq: "768px", columns: 2, gutter: 20 },
          { mq: "1024px", columns: 3, gutter: 20 },
        ]}
        className="masonry"
        hasMore={page < 4}
        loadMore={loadMore}
        loader={
          <div className="flex items-center justify-center my-12">
          <ImSpinner7 className="text-8xl animate-spin text-black" />
        </div>
        }
      >
        {responseData.results.map((el) => (
          <Image key={el.id} {...el} />
        ))}
      </MasonryInfiniteScroller>
    </div>
  );
};

export default MasonryScroller;
