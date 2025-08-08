import { componentsActions as actions } from "../store/components";
import {
  initialState as emptyInitialState,
  componentsReducer as reducer,
} from "../store/components";

describe("componentsReducer", () => {
  it("handles ADD_COMPONENT action", () => {
    const state = reducer(
      emptyInitialState,
      actions.addComponent({
        id: "d218f6d3-e81e-4eb4-951c-4c4c7f99f0c2",
        layout: "h1",
      })
    );

    expect(state).toMatchInlineSnapshot(`
      Object {
        "currentlyEdited": Object {
          "id": "d218f6d3-e81e-4eb4-951c-4c4c7f99f0c2",
          "layout": "h1",
          "values": Object {},
        },
        "items": Array [
          Object {
            "id": "d218f6d3-e81e-4eb4-951c-4c4c7f99f0c2",
            "layout": "h1",
            "values": Object {},
          },
        ],
      }
    `);
  });

  it("handles UPDATE_COMPONENT action", () => {
    const initialState = {
      items: [
        {
          id: "b8bf157b-bbfe-4b1a-afe0-87e138236b12",
          layout: "h1",
          values: { text: "Header 1" },
        },
        {
          id: "e00ce72c-2018-4485-a644-f1176287ab86",
          layout: "h2",
          values: { text: "Header 2" },
        },
      ],
    };

    const state = reducer(
      initialState,
      actions.updateComponent({
        id: "e00ce72c-2018-4485-a644-f1176287ab86",
        data: {
          values: { text: "Some Different Header" },
        },
      })
    );

    expect(state).toMatchInlineSnapshot(`
      Object {
        "currentlyEdited": null,
        "items": Array [
          Object {
            "id": "b8bf157b-bbfe-4b1a-afe0-87e138236b12",
            "layout": "h1",
            "values": Object {
              "text": "Header 1",
            },
          },
          Object {
            "id": "e00ce72c-2018-4485-a644-f1176287ab86",
            "layout": "h2",
            "values": Object {
              "text": "Some Different Header",
            },
          },
        ],
      }
    `);
  });

  it("handles REMOVE_COMPONENT action", () => {
    const initialState = {
      items: [
        {
          id: "87d51e19-6c65-4bef-afd1-d26bd082c294",
          layout: "h1",
          values: { text: "Header 1" },
        },
        {
          id: "4b8f2569-e062-4e20-b118-392c297f4d1f",
          layout: "h2",
          values: { text: "Header 2" },
        },
      ],
    };

    const state = reducer(
      initialState,
      actions.removeComponent({ id: "87d51e19-6c65-4bef-afd1-d26bd082c294" })
    );

    expect(state).toMatchInlineSnapshot(`
      Object {
        "currentlyEdited": null,
        "items": Array [
          Object {
            "id": "4b8f2569-e062-4e20-b118-392c297f4d1f",
            "layout": "h2",
            "values": Object {
              "text": "Header 2",
            },
          },
        ],
      }
    `);
  });

  it("handles SET_EDITED_COMPONENT action", () => {
    const initialState = {
      items: [
        {
          id: "22b9e9fb-22ba-4be6-a2fd-ec106f8cc49c",
          layout: "h1",
          values: { text: "Header 1" },
        },
        {
          id: "13455573-c742-4a15-8cef-c78b4c6188f1",
          layout: "h2",
          values: { text: "Header 2" },
        },
      ],
    };

    const state = reducer(
      initialState,
      actions.setEditedComponent({
        component: {
          id: "13455573-c742-4a15-8cef-c78b4c6188f1",
          layout: "h2",
          values: { text: "Header 2" },
        },
      })
    );

    expect(state).toMatchInlineSnapshot(`
      Object {
        "currentlyEdited": Object {
          "id": "13455573-c742-4a15-8cef-c78b4c6188f1",
          "layout": "h2",
          "values": Object {
            "text": "Header 2",
          },
        },
        "items": Array [
          Object {
            "id": "22b9e9fb-22ba-4be6-a2fd-ec106f8cc49c",
            "layout": "h1",
            "values": Object {
              "text": "Header 1",
            },
          },
          Object {
            "id": "13455573-c742-4a15-8cef-c78b4c6188f1",
            "layout": "h2",
            "values": Object {
              "text": "Header 2",
            },
          },
        ],
      }
    `);
  });
});
