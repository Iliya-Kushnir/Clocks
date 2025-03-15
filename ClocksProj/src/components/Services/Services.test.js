import React from "react";
import { render, screen } from "@testing-library/react";
import Services from "./Services.jsx";
import ServiceCard from "./ServiceCard/ServiceCard.jsx";

// Мокаем `ServiceCard`, чтобы проверить, как `Services` передает в него данные
jest.mock("./ServiceCard/ServiceCard.jsx", () => ({
  __esModule: true,
  default: jest.fn(({ serviceName }) => <div data-testid="service-card">{serviceName}</div>),
}));

describe("Services Component", () => {
  const mockCards = [
    { serviceName: "Service 1", serviceSrc: "/compressed/service1.jpg", serviceAlt: "Service 1" },
    { serviceName: "Service 2", serviceSrc: "/compressed/service2.jpg", serviceAlt: "Service 2" },
  ];

  it("renders the correct number of service cards", () => {
    render(<Services cards={mockCards} />);
    
    const serviceCards = screen.getAllByTestId("service-card");
    expect(serviceCards).toHaveLength(mockCards.length);
  });

  it("renders correct service names", () => {
    render(<Services cards={mockCards} />);

    mockCards.forEach(({ serviceName }) => {
      expect(screen.getByText(serviceName)).toBeInTheDocument();
    });
  });

  it("renders without errors when no cards are provided", () => {
    render(<Services cards={[]} />);
    expect(screen.queryAllByTestId("service-card")).toHaveLength(0);
  });
});
