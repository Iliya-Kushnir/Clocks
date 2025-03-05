import React from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styles from "./ConsultationForm.module.scss";
import { initialValues, schemas } from "./helper";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import axios from "axios";
import FileUpload from "./FileUpload/FileUpload.jsx";

const ConsultationForm = () => {
  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={schemas.custom}
        onSubmit={(values, { resetForm }) => {

          axios
            .post("http://localhost:9000/phone-email", {
              phoneNumber: values.phone,
              fullName: values.Name
            }, {
            })
            .then((response) => {
              if (response.status === 200) {
                toast.success("Форма успешно отправлена!", {
                  position: "bottom-right",
                  autoClose: 3000,
                });
                resetForm(); // Очистка формы только при успешном запросе
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
            <Button type="submit">Записаться</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};


export default ConsultationForm;
