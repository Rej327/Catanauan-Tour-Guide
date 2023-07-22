import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import All from "./Tabs/All";

const RestoBodyMobile = () => {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="px-4 md:hidden">
      <Select value={selectedOption} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Restaurants">Restaurants</option>
        <option value="Bar & Pub's">Bar & Pub's</option>
        <option value="Cafe's">Cafe's</option>
        <option value="Food & Drink Tours">Food & Drink Tours</option>
      </Select>

      {/* Always show the content based on the selected option */}
      {selectedOption === "All" && <All />}
      {selectedOption === "Restaurants" && <p>Restaurants content here</p>}
      {selectedOption === "Bar & Pub's" && <p>Bar & Pub's content here</p>}
      {selectedOption === "Cafe's" && <p>Cafe's content here</p>}
      {selectedOption === "Food & Drink Tours" && (
        <p>Food & Drink Tours content here</p>
      )}
    </div>
  );
};

export default RestoBodyMobile;
