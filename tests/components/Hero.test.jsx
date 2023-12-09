import { render, screen } from "@testing-library/react";
import Hero from "../../src/components/Hero";

describe("Pruebas en <Hero />", () => {
  test("Debe de mostrar correctamente el componente", () => {
    const heroapi = {
      title: "Test Title",
      subtitle: "Test Subtitle",
      img: "test-image.jpg",
      btntext: "Test Button",
      videos: [
        { imgsrc: "video1.jpg", clip: "video1.mp4" },
        { imgsrc: "video2.jpg", clip: "video2.mp4" },
      ],
      sociallinks: [{ icon: "icon1.jpg" }, { icon: "icon2.jpg" }],
    };

    render(<Hero heroapi={heroapi} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByAltText("hero-img/img")).toBeInTheDocument();
    expect(screen.getAllByAltText("img/clips")).toHaveLength(2);
    expect(screen.getAllByAltText("icon/social")).toHaveLength(2);
  });

  test("should not render videos and social links when arrays are empty", () => {
    const heroapi = {
      title: "Test Title",
      subtitle: "Test Subtitle",
      img: "test-image.jpg",
      btntext: "Test Button",
      videos: [],
      sociallinks: [],
    };

    render(<Hero heroapi={heroapi} />);

    expect(screen.queryByAltText("img/clips")).not.toBeInTheDocument();
    expect(screen.queryByAltText("icon/social")).not.toBeInTheDocument();
  });
});
