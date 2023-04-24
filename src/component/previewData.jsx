import React from "react";
import "../Styles/styles.css";

const PreviewData = () => {
  return (
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
          <tr className=" text-black">
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p className=" bookedClass"> custom_file.csv</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p> 6094910</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p> 53061051927</p>
            </td>
            <td className="px-6 py-4 text-center">
              <p> 322</p>
            </td>
            <td className="px-6 py-4 text-center">
              <p>TESLA</p>
            </td>
            <td className="px-6 py-4 text-center">
              <span> MODEL 3 </span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p> 2020</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p> Battery Electric Vehicle (BEV)</p>
            </td>
            <td className="px-6 py-4">
              <p> Clean Alternative Fuel Vehicle Eligible</p>
            </td>
          </tr>
          {/* <!-- Row 2 --> */}
          <tr className=" text-black">
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p className=" bookedClass"> custom_file.csv</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p> 6094910</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p> 53061051927</p>
            </td>
            <td className="px-6 py-4 text-center">
              <p> 322</p>
            </td>
            <td className="px-6 py-4 text-center">
              <p>TESLA</p>
            </td>
            <td className="px-6 py-4 text-center">
              <span> MODEL 3 </span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p> 2020</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p> Battery Electric Vehicle (BEV)</p>
            </td>
            <td className="px-6 py-4">
              <p> Clean Alternative Fuel Vehicle Eligible</p>
            </td>
          </tr>
          {/* <!-- Row 3 --> */}
          <tr className=" text-black">
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p className=" bookedClass"> custom_file.csv</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p> 6094910</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p> 53061051927</p>
            </td>
            <td className="px-6 py-4 text-center">
              <p> 322</p>
            </td>
            <td className="px-6 py-4 text-center">
              <p>TESLA</p>
            </td>
            <td className="px-6 py-4 text-center">
              <span> MODEL 3 </span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <p> 2020</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p> Battery Electric Vehicle (BEV)</p>
            </td>
            <td className="px-6 py-4">
              <p> Clean Alternative Fuel Vehicle Eligible</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PreviewData;
