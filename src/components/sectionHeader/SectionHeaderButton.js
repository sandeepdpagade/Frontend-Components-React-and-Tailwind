// SectionHeaderButton.js
import { useNavigate } from "react-router-dom";

const SectionHeaderButton = ({ redirectPath, label }) => {
  const navigate = useNavigate();

  const handleSaveClick = () => {
    navigate(redirectPath);
  };


  return (
    <button
      onClick={handleSaveClick}
      className="px-4 py-2 bg-[#681312] text-white rounded-md"
    >
      {label}
    </button>
  );
};

export default SectionHeaderButton;
