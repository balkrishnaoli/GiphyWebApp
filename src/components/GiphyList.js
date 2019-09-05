import React from "react";
import GiphyCard from "./GiphyCard";
import "./GiphyList.css";
import InfiniteScroll from "react-infinite-scroll-component";

const GiphyList = ({ giphyList, fetchGiphy }) => {
  const giphys = giphyList.map(giphy => {
    const url = giphy.images.downsized_large.url;
    return <GiphyCard key={giphy.id} url={url} />;
  });
  return (
    <InfiniteScroll
      dataLength={giphyList.length}
      next={fetchGiphy}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="giphy-list">{giphys}</div>
    </InfiniteScroll>
  );
};

export default GiphyList;
