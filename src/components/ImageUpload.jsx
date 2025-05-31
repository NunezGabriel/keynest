"use client";

import { useRef, useState } from "react";
import { RiUploadLine } from "react-icons/ri";

const ImageUpload = ({ onImageSelect, imageFiles = [] }) => {
  const fileInputRef = useRef(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file => file.size <= 5 * 1024 * 1024); // max 5MB

    if (validFiles.length < selectedFiles.length) {
      setError("Algunas imágenes superan el tamaño máximo de 5MB y fueron omitidas.");
    } else {
      setError("");
    }

    onImageSelect(validFiles);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">FOTOS</h2>
        <p className="text-sm text-gray-600">Sube tantas fotos como quieras</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleButtonClick}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-[8px] transition"
        >
          <RiUploadLine className="text-xl" />
          ELIJE UN ARCHIVO
        </button>
        <span className="text-sm text-gray-500">
          {imageFiles.length === 0 ? "No hay archivos seleccionados" : `${imageFiles.length} archivo(s) seleccionado(s)`}
        </span>
      </div>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />

      <p className="text-xs text-gray-500">Solo imágenes, max 5MB</p>
      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* Previsualización */}
      {imageFiles.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {imageFiles.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Preview ${index}`}
              className="w-full h-32 object-cover rounded border"
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 text-sm italic border rounded p-4">
          Sin fotos aún
        </div>
      )}
    </div>
  );
};

export default ImageUpload;







/* "use client";
import { useState } from "react";

const ImageUpload = ({ onImageSelect }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageSelect(file);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <label className="text-sm font-medium">Sube una imagen:</label>
      <input type="file" onChange={handleFileChange} />
      {preview && (
        <img
          src={preview}
          alt="preview"
          className="w-40 h-40 object-cover mt-2 rounded"
        />
      )}
    </div>
  );
};

export default ImageUpload;
 */