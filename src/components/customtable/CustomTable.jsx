import React from "react";
import "./customtable.css";

export default function CustomTable({ data = null, columns , title }) {
  const getCaps = (str) => {
    return str.toUpperCase();
  };

  return (
    <div className="customtable">
      <div className="customTableContainer">
        <h3 className="customTableTitle">{title}</h3>
        <table>
          <thead>
            <tr>
              {columns.map((head) => (
                <th className="heading">{getCaps(head.header)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr>
                {/* <td>{row.Year}</td> */}
                {columns?.map((col) => (
                  <td>{row[col.field]} </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data ? null : <p>No Data to Show</p>}
      </div>
    </div>
  );
}
