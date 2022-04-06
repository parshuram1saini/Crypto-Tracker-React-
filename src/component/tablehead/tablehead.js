import React from "react";
import "./tablehead.css";
import Cryptodata from "../cryptodata/cryptodata";
// ...................................
function Headingtable({ data }) {
  //  this section is for display data.........................

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="theading">Sr_No</th>
            <th className="theading">Cryptocurrency</th>
            <th className="theading">symbol</th>
            <th className="theading">current_price</th>
            <th className="theading">Price_volume</th>
            <th className="theading">Price_percentage(24h)</th>
            <th className="theading">Market_cap(24h)</th>
          </tr>
        </thead>
        <tbody>
          <Cryptodata Tabledata={data} />
        </tbody>
      </table>
    </div>
  );
}

export default Headingtable;
