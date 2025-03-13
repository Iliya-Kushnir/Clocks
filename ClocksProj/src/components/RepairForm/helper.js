import * as Yup from "yup";

const regx = {
  name: /^[A-Яа-яA-Za-z]{2,20}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const schemas = {
  custom: Yup.object().shape({
    name: Yup.string()
      .matches(regx.name, "Используйте кириллицу или латиницу, от 2 до 20 символов")
      .required("Введите свое имя"),
    email: Yup.string()
      .matches(regx.email, "Email введен неправильно")
      .required("Email обязателен"),
    message: Yup.string().required("Опишите свою проблему"),
    file: Yup.mixed()
      .test("file", "Переместите сюда фото", (value) => {
        return value instanceof File;
      }),
  }),
};

export const initialValues = {
  email: "",
  name: "",
  message: "",
  file: null, // Файл должен быть `null`, а не строка
};
