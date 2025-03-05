import React, { useState } from "react";
import styles from "./FileUpload.module.scss";

export const FileUpload = ({ name, setFieldValue }) => {
  const [preview, setPreview] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFieldValue(name, selectedFile); // Устанавливаем файл в Formik
      setPreview(URL.createObjectURL(selectedFile)); // Обновляем превью
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setFieldValue(name, droppedFile); // Устанавливаем файл в Formik
      setPreview(URL.createObjectURL(droppedFile)); // Обновляем превью
    }
  };

  return (
    <div
      className={`${styles.dropZone} ${dragging ? styles.dragging : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <input
        id="file"
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={handleChange}
      />
      <label htmlFor="file" className={styles.uploadButton}>
        {preview ? (
          <img src={preview} alt="Preview" className={styles.preview} />
        ) : (
          "Перетащите фото сюда"
        )}
      </label>
    </div>
  );
};

export default FileUpload;
