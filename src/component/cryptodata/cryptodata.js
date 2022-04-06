import React from "react";
import "./cryptodata.css";

function Cryptodata({ Tabledata }) {
  console.log(Tabledata);

  return (
    <>
      {Tabledata.map((element, index) => {
        let updown = element.price_change_percentage_24h > 0 ? "👍" : "👎";
        return (
          <tr>
            <td>{index + 1}</td>
            <td>
              <img src={element.image} />
              {element.name}
            </td>
            <td>{element.symbol.toUpperCase()}</td>
            <td>${element.current_price.toLocaleString("en-US")}</td>
            <td>${element.total_volume.toLocaleString("en-US")}</td>
            <td
              style={{
                color: `${
                  element.price_change_percentage_24h > 0 ? "green" : "red"
                }`,
              }}
            >
              {updown}
              {Math.abs(element.price_change_percentage_24h.toFixed(2))}%
            </td>
            <td>${element.market_cap.toLocaleString("en-US")}</td>
          </tr>
        );
      })}
    </>
  );
}

export default Cryptodata;
