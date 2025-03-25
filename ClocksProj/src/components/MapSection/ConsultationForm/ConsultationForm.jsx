import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ConsultationForm.module.scss";
import { initialValues, schemas } from "./helper";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import axios from "axios";
import { useLanguage } from "../../../LanguageContext/LanguageContext.jsx"; // Импортируем хук для перевода

const ConsultationForm = () => {
  const { t } = useLanguage(); // Используем функцию перевода
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
          if (isDisabled) return;

          setIsDisabled(true);
          setTimer(15);

          if (true) {
            toast.success(t("form.successMessage"), {
              position: "bottom-right",
              autoClose: 3000,
            });
            resetForm();
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.consultationForm}>
            <h1 className={styles.fromLabel}>{t("form.title")}</h1>

            <Input name="Name" id="Name" placeholder={t("form.namePlaceholder")} />
            <Input name="phone" id="phone" placeholder={t("form.phonePlaceholder")} />
            <Button
              type="submit"
              disabled={isDisabled}
              style={{
                backgroundColor: isDisabled ? "#ccc" : "#0D6EFD",
                cursor: isDisabled ? "not-allowed" : "pointer",
              }}
            >
              {isDisabled ? `${t("form.waitMessage")} ${timer} сек` : t("form.submitButton")}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ConsultationForm;
