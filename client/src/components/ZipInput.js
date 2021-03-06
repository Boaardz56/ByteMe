import React, { useState } from "react";

const ZipInput = (props) => {
  //getting weather results
  const zipCode= props.zipCode
  //working with changing weather input
  const [hidden, setHidden] = useState(true);

  const toggleShow = () => {
    setHidden(!hidden);
  };
  
  const submit = () => {
    setHidden(true);
    if (props.handleZip) {
      props.handleZip(zipCode);
    }
  };

  return (
    <div>
  
    <div
      className="zipInput mb-3"
      style={{ 
        position: "relative", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}
    >
      <a href="#" onClick={toggleShow}>
        Want a different location?
        </a>
      <div
       className="newZipInput mb-3"
       style={{ position: "relative" }}>
      {!hidden && 
       <input 
        type="text" 
        name="zip" 
        style={{ 
          paddingTop: "5px", 
          paddingBottom: "5px",
          marginLeft: "2px",
          marginRight: "2px",
          fontFamily: "'Montserrat', sans-serif",
          borderRadius: "10px"
      }}
        placeholder="Enter ZIP Code"
        onChange={props.handleZipInputChange}
        value={props.zipCode}
       />
      }

      {!hidden && (
        <button type="button" class="btn btn-secondary" onClick={submit}>
          New Zip
        </button>
      )}
      </div>
    </div>
    </div>
  );
};

export default ZipInput;


