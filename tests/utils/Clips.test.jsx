import { fireEvent, render, screen } from "@testing-library/react";
import Clips from "../../src/utils/Clips";

describe("Pruebas en <Clips />", () => {
  test("debe de renderizar correctamente el componenete", () => {
    const imgsrc = "valid-image-source";
    const clip = "valid-video-source";

    render(<Clips imgsrc={imgsrc} clip={clip} />);

    expect(screen.getByAltText("img/clips")).toBeInTheDocument();
  });

  test("should start playing the video when hovering over the image", () => {
    const imgsrc = "valid-image-source";
    const clip = "valid-video-source";

    render(<Clips imgsrc={imgsrc} clip={clip} />);

    fireEvent.mouseEnter(screen.getByAltText("img/clips"));

    expect(screen.getByTestId("video-clip")).toHaveAttribute("autoplay");
  });
});
