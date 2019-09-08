import React, { useEffect, useState } from "react";
import GiphyList from "./GiphyList";
import giphyApi from "../api/giphy";

const Home = ({ query }) => {
  const [giphys, setGiphy] = useState([]);
  const [limit, setLimit] = useState(15);

  const fetchGiphy = async () => {
    let apiCallLimit = 10;
    apiCallLimit = limit + apiCallLimit;
    setLimit(apiCallLimit);
    const response = await giphyApi.get(query + "&limit=" + apiCallLimit);
    setGiphy(response.data.data);
  };
  useEffect(() => {
    fetchGiphy();
  }, [query]);
  return (
    <div className="ui container">
      <GiphyList fetchGiphy={fetchGiphy} giphyList={giphys} />
    </div>
  );
};

export default Home;
