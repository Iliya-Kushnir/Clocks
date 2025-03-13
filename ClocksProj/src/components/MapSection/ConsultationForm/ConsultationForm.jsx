import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ConsultationForm.module.scss";
import { initialValues, schemas } from "./helper";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import axios from "axios";
//import FileUpload from "./FileUpload/FileUpload.jsx";

const ConsultationForm = () => {
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

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={schemas.custom}
        onSubmit={(values, { resetForm }) => {
          if (isDisabled) return; // Если кнопка заблокирована — ничего не делаем

          setIsDisabled(true);
          setTimer(15); // запуск таймера на 15 секунд

          axios
            .post("https://clocksshopserver.onrender.com/phone-email", {
              phoneNumber: values.phone,
              fullName: values.Name,
            })
            .then((response) => {
              if (response.status === 200) {
                toast.success("Форма успешно отправлена!", {
                  position: "bottom-right",
                  autoClose: 3000,
                });
                resetForm();
              }
            })
            .catch((error) => {
              toast.error("Ошибка отправки. Попробуйте снова.", {
                position: "bottom-right",
                autoClose: 3000,
              });
              console.error("Ошибка запроса:", error);
            });
        }}
        className={styles.consultationForm}
      >
        {({ errors, touched }) => (
          <Form className={styles.consultationForm}>
            <h1 className={styles.fromLabel}>Записаться на консультацию</h1>

            <Input name="Name" id="Name" placeholder="Ваше имя" />
            <Input name="phone" id="phone" placeholder="Номер телефона" />
            <Button
              type="submit"
              disabled={isDisabled}
              style={{
                backgroundColor: isDisabled ? "#ccc" : "#0D6EFD",
                cursor: isDisabled ? "not-allowed" : "pointer",
              }}
            >
              {isDisabled ? `Подождите ${timer} сек` : "Записаться"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ConsultationForm;
