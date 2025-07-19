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
import { useLanguage } from "../../LanguageContext/LanguageContext.jsx";

const RepairForm = ({ isModalOpen, setIsModalOpen }) => {
  const {t} = useLanguage()
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
  
      toast.success("Данные успешно отправлены!"); 
  
      setTimeout(() => {
        resetForm(); 
        setIsModalOpen(false); 
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
                  <h1 className={styles.formLabel}>{t("repairForm.title")}</h1>
                  <p className={styles.paragraph}>{t("repairForm.paragraph")}</p>

                  <Input name="name" id="name" placeholder={t("repairForm.name")} />
                  <Input name="email" id="email" placeholder={t("repairForm.email")} />
                  <Input name="message" id="message" placeholder={t("repairForm.description")} />
                  <FileUpload name="file" setFieldValue={setFieldValue} />

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? t("repairForm.send") : t("repairForm.book")}
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
