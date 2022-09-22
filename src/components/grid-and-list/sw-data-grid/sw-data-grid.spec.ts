import { mount } from "@vue/test-utils";
import SwDataGrid from "./sw-data-grid.vue";
import SwDataGridFixtures from "./sw-data-grid.fixtures.json";

const columnsFixture = [
  {
    label: "Name",
    property: "name",
    renderer: "text",
    position: 0,
    width: 200,
  },
  {
    label: "Manufacturer",
    property: "manufacturer.name",
    renderer: "text",
    position: 100,
  },
  {
    label: "Active",
    property: "active",
    renderer: "checkmark",
    position: 200,
    width: 100,
  },
  {
    label: "Price",
    property: "price",
    renderer: "price",
    position: 300,
  },
  {
    label: "Stock",
    property: "stock",
    renderer: "number",
    position: 400,
    width: 100,
  },
  {
    label: "Available",
    property: "available",
    renderer: "number",
    position: 500,
    width: 100,
  },
];

function createWrapper() {
  return mount(SwDataGrid, {
    propsData: {
      dataSource: SwDataGridFixtures,
      columns: columnsFixture,
    },
  });
}

describe("sw-data-grid", () => {
  beforeEach(() => {
    // @ts-expect-error - mock was set via jest
    if (console.error.mockRestore) {
      // @ts-expect-error - mock was set via jest
      console.error.mockRestore();
    }
  });

  it("should render the component", () => {
    const wrapper = createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  it("should throw an console error if columns aren't correctly defined", async () => {
    // spy for console.error calls
    jest.spyOn(console, "error").mockImplementation(() => {});

    const wrapper = createWrapper();

    await wrapper.setProps({
      columns: [
        {
          labesdfl: "Name",
          property: "name",
          renderer: "text",
          position: 0,
          width: 200,
        },
      ],
    });

    expect(console.error).toHaveBeenCalled();
    // @ts-expect-error - mock was set from jest
    expect(console.error.mock.calls[0][0]).toContain(
      `Invalid prop: custom validator check failed for prop "columns"`
    );
  });
});
