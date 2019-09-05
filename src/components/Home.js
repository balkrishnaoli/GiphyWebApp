import React, { useEffect, useState } from "react";
import GiphyList from "./GiphyList";
import giphyApi from "../api/giphy";

const Home = ({ query }) => {
  const [giphys, setGiphy] = useState([]);
  const [limit, setLimit] = useState(0);
  const config = {
    params: {
      limit: limit
    }
  };
  const fetchGiphy = async () => {
    setLimit(limit + 30);
    const response = await giphyApi.get(query, config);
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
