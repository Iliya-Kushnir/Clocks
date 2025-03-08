import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ConsultationForm from "./ConsultationForm.jsx";
import { ToastContainer } from "react-toastify";
import axios from "axios";
jest.mock("axios");

describe("ConsultationForm", () => {
  test("renders form elements", () => {
    render(
      <>
        <ToastContainer />
        <ConsultationForm />
      </>
    );

    expect(screen.getByPlaceholderText("Ваше имя")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Номер телефона")).toBeInTheDocument();
    expect(screen.getByText("Записаться")).toBeInTheDocument();
  });

  test("shows validation errors when submitting empty form", async () => {
    render(<ConsultationForm />);
    fireEvent.click(screen.getByText("Записаться"));

    expect(await screen.findByText(/обязательно/i)).toBeInTheDocument();
  });

  test("submits the form successfully", async () => {
    axios.post.mockResolvedValue({ status: 200 });

    render(
      <>
        <ToastContainer />
        <ConsultationForm />
      </>
    );

    fireEvent.change(screen.getByPlaceholderText("Ваше имя"), {
      target: { value: "Иван" },
    });
    fireEvent.change(screen.getByPlaceholderText("Номер телефона"), {
      target: { value: "+380123456789" },
    });

    fireEvent.click(screen.getByText("Записаться"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("http://localhost:9000/phone-email", {
        phoneNumber: "+380123456789",
        fullName: "Иван",
      });
    });

    await waitFor(() => {
      expect(screen.getByText("Форма успешно отправлена!")).toBeInTheDocument();
    });
  });
});