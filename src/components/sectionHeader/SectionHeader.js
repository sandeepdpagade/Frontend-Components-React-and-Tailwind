import { useNavigate } from "react-router-dom";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const Sectionheader = ({ title, children }) => {
  return (
    <>
      <Breadcrumb />

      <div className="flex justify-between items-center p-4 pl-0">
        <h1 className="md:text-2xl font-medium text-gray-900">{title}</h1>
        {children}
      </div>
      <hr className="mb-4"></hr>
    </>
  );
};

export default Sectionheader;
