const DatatableSection = ({ children }) => {
  return (
    <div className="container border rounded-lg shadow p-4 overflow-x-auto max-w-[98vw]  sm:max-w-full">
      {children}
    </div>
  );
};

export default DatatableSection;
