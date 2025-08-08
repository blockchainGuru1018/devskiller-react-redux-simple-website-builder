import React from "react";
import { render } from "@testing-library/react";

import { A } from "../components/Components/A.js";

describe("<A>", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <A
        values={{
          href: "http://www.google.com",
          label: "Click me!",
        }}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          href="http://www.google.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Click me!
        </a>
      </div>
    `);
  });
});
