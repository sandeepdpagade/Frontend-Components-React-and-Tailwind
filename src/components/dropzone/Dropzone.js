import React, { useState } from "react";
import { FaRegImages, FaTrash } from "react-icons/fa";

const Dropzone = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    // Add new files to the existing files array
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [
      ...prevFiles,
      ...newFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ]);
  };

  const handleRemoveFile = (fileToRemove) => {
    // Filter out the file to be removed
    const updatedFiles = files.filter((file) => file !== fileToRemove);
    setFiles(updatedFiles);
    // Revoke the URL to free up memory
    URL.revokeObjectURL(fileToRemove.preview);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        {/* Only show placeholder if no files are present */}
        {files.length === 0 && (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FaRegImages className="w-8 h-8 mb-4 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Upload product images</span> or
              drag and drop
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
          </div>
        )}
        {files.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={file.preview}
                  alt={`preview ${index}`}
                  className="w-24 h-24 rounded-md"
                />
                <button
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  onClick={() => handleRemoveFile(file)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          id="dropzone-file"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>
    </div>
  );
};

export default Dropzone;
