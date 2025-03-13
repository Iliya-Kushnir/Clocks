import * as Yup from 'yup';

const regx = {
  Name: /^[A-Яа-яA-Za-z]{2,20}$/,
  phone: /^(\+380|0)[679][0-9]{8}$/
};

export const schemas = {
    custom: Yup.object().shape({
        Name: Yup.string()
        .matches(regx.Name, "Используйте кириллицу или латиницу, от 2 до 20 символов")
        .required("Введите свое имя"),
        phone: Yup.string()
        .matches(regx.phone, "Номер телефона введен неправильно.")
        .required("Введите свой номер телефона")
    }),
  };

  export const initialValues = {
    phone: "", 
    Name: "",
  };