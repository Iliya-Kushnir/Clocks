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

const RepairForm = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
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

    return (
        <>
        <ToastContainer />
        <button className={styles.openModalButton} onClick={() => setIsModalOpen(true)}>
          Открыть форму
        </button>
        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button className={styles.closeModal} type="button" onClick={() => setIsModalOpen(false)}>X</button>
              <Formik
                initialValues={initialValues}
                validationSchema={schemas.custom}
                onSubmit={(values, { resetForm }) => {
                    console.log(values, resetForm);

                    axios
                    .post("https://clocksshopserver.onrender.com/email", {
                      name: values.name,
                      email: values.email,
                      message: values.message,
                      file: values.file
                    })
                    .then((response) => {
                      if (response.status === 200) {
                        toast.success("Форма успешно отправлена!", {
                          position: "bottom-right",
                          autoClose: 3000,
                        });
                        resetForm();
                        setIsModalOpen(false);
                      }
                    })
                    .catch(() => {
                      toast.error("Ошибка отправки. Попробуйте снова.", {
                        position: "bottom-right",
                        autoClose: 3000,
                      });
                    });
                }}
                className={styles.repairForm}
              >
                {({ setFieldValue, touched, errors }) => (
                  <Form className={styles.consultationForm}>
                    <h1 className={styles.formLabel}>Записаться на ремонт</h1>

                    <Input name="name" id="name" placeholder="Ваше имя" />
                    <Input name="email" id="email" placeholder="Ваш email" />
                    <Input name="message" id="message" placeholder="Описание проблемы"/>
                    <FileUpload setFieldValue={setFieldValue} />

                    <button type="submit">Записаться</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
        </>
    );
}

export default RepairForm;
