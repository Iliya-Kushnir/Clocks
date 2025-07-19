import React from "react";
import { render, screen } from "@testing-library/react";
import MapSection from "./MapSection.jsx";
import IslandMap from "./isLandMap/isLandMap.jsx";
import ConsultationForm from "./ConsultationForm/ConsultationForm.jsx";

jest.mock("./isLandMap/isLandMap.jsx", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="island-map" />),
}));

jest.mock("./ConsultationForm/ConsultationForm.jsx", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="consultation-form" />),
}));

describe("MapSection Component", () => {
  it("renders the IslandMap component", () => {
    render(<MapSection />);
    expect(screen.getByTestId("island-map")).toBeInTheDocument();
  });

  it("renders the correct address", () => {
    render(<MapSection />);
    expect(screen.getByText(/Адрес мастерской: Харьков, Полтавский Шлях 31 офисный центр, офис 311/i)).toBeInTheDocument();
  });

  it("renders the correct phone numbers", () => {
    render(<MapSection />);
    expect(screen.getByText(/\+38 097-075-40-94 \+38 095-739-86-14/i)).toBeInTheDocument();
  });

  it("renders the ConsultationForm component", () => {
    render(<MapSection />);
    expect(screen.getByTestId("consultation-form")).toBeInTheDocument();
  });
});
