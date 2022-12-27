import React from "react";
import MasonryInfiniteScroller from "react-masonry-infinite";
import Image from "./Image";
const MasonryScroller = ({ responseData, page, setPage }) => {
  const loadMore = () => {
    setTimeout(() => {
      setPage(page + 1);
    }, 500);
  };

  return (
    <div className="flex justify-center ">
      <MasonryInfiniteScroller
        sizes={[
          { columns: 1, gutter: 20 },
          { mq: "768px", columns: 2, gutter: 20 },
          { mq: "1024px", columns: 3, gutter: 20 },
        ]}
        className="masonry"
        hasMore={page < 4}
        loadMore={loadMore}
      >
        {responseData.results.map((el) => (
          <Image key={el.id} {...el} />
        ))}
      </MasonryInfiniteScroller>
    </div>
  );
};

export default MasonryScroller;
