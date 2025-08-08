import React from "react";
import { render } from "@testing-library/react";

import { Img } from "../components/Components/Img.js";

describe("<Img>", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Img
        values={{
          alt: "Cool image",
          src: "https://via.placeholder.com/400x200",
        }}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <img
          alt="Cool image"
          src="https://via.placeholder.com/400x200"
        />
      </div>
    `);
  });
});
