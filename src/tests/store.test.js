import { componentsActions as actions } from "../store/components";
import { getStore } from "../store";

describe("store", () => {
  const newStoreWithAppliedActions = (actions) => {
    const store = getStore();
    for (const action of actions) {
      store.dispatch(action);
    }

    return store;
  };

  it("handles sequence of actions #1", () => {
    const actionsToDispatch = [
      actions.addComponent({
        layout: "h1",
        id: "c1dffeae-43b7-4d29-980c-1206edb3abca",
      }),
    ];
    const store = newStoreWithAppliedActions(actionsToDispatch);

    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "components": Object {
          "currentlyEdited": Object {
            "id": "c1dffeae-43b7-4d29-980c-1206edb3abca",
            "layout": "h1",
            "values": Object {},
          },
          "items": Array [
            Object {
              "id": "c1dffeae-43b7-4d29-980c-1206edb3abca",
              "layout": "h1",
              "values": Object {},
            },
          ],
        },
      }
    `);
  });

  it("handles sequence of actions #2", () => {
    const actionsToDispatch = [
      actions.addComponent({
        id: "c1dffeae-43b7-4d29-980c-1206edb3abca",
        layout: "h1",
      }),
      actions.updateComponent({
        id: "c1dffeae-43b7-4d29-980c-1206edb3abca",
        data: {
          values: "Header 1",
        },
      }),
      actions.addComponent({
        id: "b1148702-180c-4d8d-8fc7-3169c0db6d00",
        layout: "h2",
      }),
      actions.updateComponent({
        id: "b1148702-180c-4d8d-8fc7-3169c0db6d00",
        data: {
          values: "Header 2",
        },
      }),
    ];
    const store = newStoreWithAppliedActions(actionsToDispatch);

    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "components": Object {
          "currentlyEdited": null,
          "items": Array [
            Object {
              "id": "c1dffeae-43b7-4d29-980c-1206edb3abca",
              "layout": "h1",
              "values": "Header 1",
            },
            Object {
              "id": "b1148702-180c-4d8d-8fc7-3169c0db6d00",
              "layout": "h2",
              "values": "Header 2",
            },
          ],
        },
      }
    `);
  });

  it("handles sequence of actions #3", () => {
    const actionsToDispatch = [
      actions.addComponent({
        id: "c1dffeae-43b7-4d29-980c-1206edb3abca",
        layout: "h1",
      }),
      actions.updateComponent({
        id: "c1dffeae-43b7-4d29-980c-1206edb3abca",
        data: {
          values: "Header 1",
        },
      }),
      actions.addComponent({
        id: "b1148702-180c-4d8d-8fc7-3169c0db6d00",
        layout: "h2",
      }),
      actions.updateComponent({
        id: "b1148702-180c-4d8d-8fc7-3169c0db6d00",
        data: {
          values: "Header 2",
        },
      }),
      actions.removeComponent({ id: "c1dffeae-43b7-4d29-980c-1206edb3abca" }),
    ];
    const store = newStoreWithAppliedActions(actionsToDispatch);

    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "components": Object {
          "currentlyEdited": null,
          "items": Array [
            Object {
              "id": "b1148702-180c-4d8d-8fc7-3169c0db6d00",
              "layout": "h2",
              "values": "Header 2",
            },
          ],
        },
      }
    `);
  });

  it("handles sequence of actions #4", () => {
    const actionsToDispatch = [
      actions.addComponent({
        id: "c1dffeae-43b7-4d29-980c-1206edb3abca",
        layout: "h1",
      }),
      actions.updateComponent({
        id: "c1dffeae-43b7-4d29-980c-1206edb3abca",
        data: {
          values: "Header 1",
        },
      }),
      actions.addComponent({
        id: "b1148702-180c-4d8d-8fc7-3169c0db6d00",
        layout: "h2",
      }),
      actions.updateComponent({
        id: "b1148702-180c-4d8d-8fc7-3169c0db6d00",
        data: {
          values: "Header 2",
        },
      }),
      actions.removeComponent({ id: "c1dffeae-43b7-4d29-980c-1206edb3abca" }),
      actions.setEditedComponent({
        component: {
          id: "b1148702-180c-4d8d-8fc7-3169c0db6d00",
          layout: "h2",
          values: "Header 2",
        },
      }),
    ];
    const store = newStoreWithAppliedActions(actionsToDispatch);

    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "components": Object {
          "currentlyEdited": Object {
            "id": "b1148702-180c-4d8d-8fc7-3169c0db6d00",
            "layout": "h2",
            "values": "Header 2",
          },
          "items": Array [
            Object {
              "id": "b1148702-180c-4d8d-8fc7-3169c0db6d00",
              "layout": "h2",
              "values": "Header 2",
            },
          ],
        },
      }
    `);
  });
});
