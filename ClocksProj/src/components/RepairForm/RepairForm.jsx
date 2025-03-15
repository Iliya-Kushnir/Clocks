import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./RepairForm.module.scss";
import { initialValues, schemas } from "./helper.js";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import axios from "axios";
import FileUpload from "../MapSection/ConsultationForm/FileUpload/FileUpload.jsx";

const RepairForm = ({ isModalOpen, setIsModalOpen }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isDisabled, timer]);

  // Функция для отправки данных на сервер
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);
    if (values.file) {
      formData.append("file", values.file);
    }
  
    try {
      const response = await axios.post("https://clocksshopserver.onrender.com/email", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      toast.success("Данные успешно отправлены!"); // Показываем тост
  
      setTimeout(() => {
        resetForm(); 
        setIsModalOpen(false); // Закрываем модалку через 2 секунды
      }, 2000);
  
    } catch (error) {
      toast.error("Ошибка отправки данных!");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <>
      <ToastContainer />
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeModal} type="button" onClick={() => setIsModalOpen(false)}>X</button>
            <Formik
              initialValues={initialValues}
              validationSchema={schemas.custom}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, isSubmitting }) => (
                <Form className={styles.consultationForm}>
                  <h1 className={styles.formLabel}>Записаться на ремонт</h1>
                  <p className={styles.paragraph}>Запишите ваши данные и мы с вами свяжемся как только сможем, ожидание может составлять 1-2 дня</p>

                  <Input name="name" id="name" placeholder="Ваше имя" />
                  <Input name="email" id="email" placeholder="Ваш email" />
                  <Input name="message" id="message" placeholder="Описание проблемы" />
                  <FileUpload name="file" setFieldValue={setFieldValue} />

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Отправка..." : "Записаться"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default RepairForm;
