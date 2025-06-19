import React, { useState } from "react";
import Form from "./component/From";
import InfoCard from "./component/InfoCard";

const App = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (data) => {
    setSubmissions(test => [...test, data]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Form onSubmit={handleFormSubmit} />
      </div>

      <hr />

      <div style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center"
      }}>
        {submissions.map((data, index) => (
          <InfoCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
