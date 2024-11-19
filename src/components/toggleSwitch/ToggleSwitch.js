import React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

// Custom Styled Toggle Switch
const CustomToggleSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#4CAF50", // Active color
    "&:hover": {
      backgroundColor: "rgba(76, 175, 80, 0.1)",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#4CAF50", // Active background color
  },
  "& .MuiSwitch-switchBase": {
    color: "#FF5252", // Inactive color
    "&:hover": {
      backgroundColor: "rgba(255, 82, 82, 0.1)",
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#FF5252", // Inactive background color
  },
}));

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
    <CustomToggleSwitch
      checked={isChecked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default ToggleSwitch;
