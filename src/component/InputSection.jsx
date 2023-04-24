import React, { useState } from "react";
import "../Styles/styles.css";

const InputSection = () => {
  const [sentence, setSentence] = useState("");
  const [results, setResults] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    setSentence(event.target.sentence.value);
    console.log(sentence);

    try {
      const response = await fetch("http://localhost:9000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sentence }),
      });
      if (response.ok) {
        const responseObj = await response.json();
        setResults(responseObj);
        console.log(results);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    // <!-- Input section -->
    <>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero inputform" onSubmit={handleSubmit}>
            {/* <!-- search --> */}
            <div className="search_input">
              <p>Search Here .. </p>
              <div className="flex flex-row">
                <input
                  id="sentence"
                  className="outline-none px-2 py-2 w-full"
                  name="sentence"
                  required
                ></input>
              </div>
            </div>
            <button className="searchButton" type="submit">
              <span className="text-sm">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="table-container">
        <table className="infoData-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th className="text-center">File Name</th>
              <th className="text-center">DOL VID</th>
              <th className="text-center">Electric Utility</th>
              <th className="text-center">Electric Range</th>
              <th className="text-center">Make</th>
              <th className="text-center">Model</th>
              <th className="text-center">ModelYear</th>
              <th className="text-center">Type</th>
              <th className="text-center">Clean Alternative Fuel Vehicle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300/20">
            {/* <!-- Row 1 --> */}
            {results?.map((result) => (
              <tr className=" text-black">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <p className=" bookedClass"> {result.g}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <p> {result.DOL_Vehicle_ID}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p> {result.Electric_Utility}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p> {result.electricRange}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p>{result.make}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <span> {result.model} </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <p> {result.modelYear}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p> {result.type}</p>
                </td>
                <td className="px-6 py-4">
                  <p> {result.Clean_Alternative_Fuel_Vehicle}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InputSection;
