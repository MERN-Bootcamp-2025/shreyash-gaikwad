import React from "react";

const InfoCard = ({ data }) => {

  return (
    <div style={{
      border: "1px solid black",
      padding: "20px",
      marginTop: "20px",
      borderRadius: "10px",
      backgroundColor: "lightblue",
      maxWidth: "300px"
    }}>
      <h3>Submitted Info</h3>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Team:</strong> {data.team}</p>
    </div>
  );
};

export default InfoCard;
