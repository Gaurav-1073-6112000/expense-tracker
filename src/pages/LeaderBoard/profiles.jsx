import React from "react";

export default function profiles({ data }) {
  return <div id="profile">{Item(data)}</div>;
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <div className="info">
              <h3 className="name text-dark">{value.username}</h3>
            </div>
          </div>
          <div className="item">
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}
