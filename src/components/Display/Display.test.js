import { render, screen } from "@testing-library/react";
import DisplayContextProviderTest from "../../contexts/DisplayContextProviderTest";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When it receives '96487'", () => {
    test("Then it should display '96487'", () => {
      const text = "96487";

      render(
        <DisplayContextProviderTest>
          <Display></Display>
        </DisplayContextProviderTest>
      );

      const number = screen.queryByText(text);

      expect(number).toBeInTheDocument();
    });
  });
});
