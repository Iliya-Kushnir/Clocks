import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Banner from "./Banner.jsx";
import ImageSwitcher from "../../HomePage/ImageAttempt/ImageAttempt.jsx";

// Мокаем ImageSwitcher, чтобы проверить, какие изображения передаются
jest.mock("../../HomePage/ImageAttempt/ImageAttempt.jsx", () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="image-switcher" />),
  }));
  

describe("Banner Component", () => {
  it("renders main and secondary text", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Banner mainText="Главный заголовок" secondaryText="Дополнительный текст" />
      </MemoryRouter>
    );

    expect(screen.getByText("Главный заголовок")).toBeInTheDocument();
    expect(screen.getByText("Дополнительный текст")).toBeInTheDocument();
  });

  it("renders ImageSwitcher with correct images for homepage", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Banner mainText="Test" secondaryText="Test" />
      </MemoryRouter>
    );

    expect(ImageSwitcher).toHaveBeenCalledWith(
      { images: ["/images/HomeBanner.png", "/images/HomeBanner2.jpg", "/images/HomeBanner3.jpg"] },
      {}
    );
  });

  it("renders ImageSwitcher with default image for unknown route", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <Banner mainText="Test" secondaryText="Test" />
      </MemoryRouter>
    );

    expect(ImageSwitcher).toHaveBeenCalledWith(
      { images: ["/images/DefaultBanner.jpg"] },
      {}
    );
  });

  it("renders the button only on the homepage", () => {
    // На главной странице должна быть кнопка
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Banner mainText="Test" secondaryText="Test" />
      </MemoryRouter>
    );
    expect(screen.getByText("Бесплатная консультация")).toBeInTheDocument();

    // На другой странице кнопки быть не должно
    render(
      <MemoryRouter initialEntries={["/PriceList"]}>
        <Banner mainText="Test" secondaryText="Test" />
      </MemoryRouter>
    );
    expect(screen.queryByText("Бесплатная консультация")).not.toBeInTheDocument();
  });
});
