import React from "react";
import Switch from "@mui/material/Switch";

// Define a functional component ToggleSwitch
const ToggleSwitch = ({ checked, onChange }) => {
  // Use the React useState hook to manage the Switch's checked state
  const [isChecked, setIsChecked] = React.useState(checked);

  // Define a function that updates the isChecked state and calls the onChange prop function
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
  };


  return (
    <div>
      <Switch
        checked={isChecked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
};

export default ToggleSwitch;
