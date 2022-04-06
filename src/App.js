import React, { useEffect, useState } from "react";
import Header from "./component/header/header.js";
import Search from "./component/searchbar/search.js";
import Axiosapi from "./component/tablehead/tablehead.js";
import axios from "axios";
import Headingtable from "./component/tablehead/tablehead.js";

//this section is for fetch api using  Axios ....................
const App = () => {
  const [crypto, setCrypto] = useState([]);
  const [tracker, setTracker] = useState([]);
  const data = async () => {
    return await axios.get(
      " https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
  };

  useEffect(() => {
    data()
      .then((response) => {
        return setCrypto(response.data), setTracker(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // ...........this is section is for  search cryptocurrency .................
  function handleSearch(e) {
    console.log("button is clicked");
    const newdata = tracker.filter((element, index) => {
      return (
        element.name.toLowerCase().includes(e.toLowerCase()) ||
        e === String(index + 1)
      );
    });
    setCrypto(newdata);
  }

  var array = [...tracker];
  const handleButton = () => {
    console.log(array);
    setCrypto(array.reverse());
    setTracker(tracker.reverse());
  };

  return (
    <>
      <Header />
      <Search
        data={crypto}
        handlesearch={handleSearch}
        handlebutton={handleButton}
      />
      <Headingtable data={crypto} />
    </>
  );
};

export default App;
