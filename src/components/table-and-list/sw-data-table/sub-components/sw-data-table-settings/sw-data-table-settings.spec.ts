import { mount } from "@vue/test-utils";
import SwDataTableSettings from "./sw-data-table-settings.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useI18n } from "vue-i18n";
import flushPromises from "flush-promises";

vi.mock("vue-i18n", () => ({
  useI18n: vi.fn(() => {
    return {
      t: (tKey: string) => tKey,
    };
  }),
}));

// mock resizeOvserver
global.ResizeObserver = class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
};

async function createWrapper({ disableInitialOpen = false } = {}) {
  const wrapper = mount(SwDataTableSettings, {
    props: {
      columns: [
        { label: "Name", property: "name", renderer: "text", position: 0, cellWrap: "normal" },
        {
          label: "Manufacturer",
          property: "manufacturer.name",
          renderer: "text",
          position: 100,
          cellWrap: "normal",
        },
        {
          label: "Description",
          property: "test",
          renderer: "text",
          position: 200,
          width: 120,
          allowResize: false,
        },
        {
          label: "Price",
          property: "price",
          renderer: "price",
          rendererOptions: {
            currencyId: "b7d2554b0ce847cd82f3ac9bd1c0dfca",
            currencyISOCode: "EUR",
            source: "gross",
          },
          position: 300,
          cellWrap: "nowrap",
          width: 150,
        },
        { label: "Stock", property: "stock", renderer: "number", position: 400, visible: false },
        { label: "Available", property: "available", renderer: "number", position: 500 },
      ],
    },
    global: {
      mocks: {
        $t: (value: string) => value,
      },
      stubs: {
        "sw-icon": true,
      },
    },
  });

  if (!disableInitialOpen) {
    // open the floating UI
    await wrapper.find(".sw-button").trigger("click");
  }

  return wrapper;
}

describe("sw-data-table-settings", () => {
  let wrapper: any;

  beforeEach(async () => {
    if (wrapper) {
      await wrapper.unmount();
    }

    await flushPromises();

    // document.body.innerHTML = '';
  });

  it("should render the component", async () => {
    wrapper = await createWrapper();

    expect(wrapper.vm).toBeTruthy();
  });

  it("should render the base view by default", async () => {
    wrapper = await createWrapper();

    const popoverContent = document.querySelector(".sw-popover__content");
    expect(popoverContent).toBeTruthy();
    expect(popoverContent?.querySelector(".sw-popover__header")?.textContent).toBe(
      "sw-data-table-settings.title",
    );

    const popoverItems = popoverContent?.querySelectorAll(".sw-popover-item");

    expect(popoverItems).toHaveLength(6);

    // The "Columns" popover item should have the correct label and should render the number of columns
    expect(popoverItems?.[0]?.textContent).toContain("sw-data-table-settings.columnOrder.title");
    expect(popoverItems?.[0]?.textContent).toContain("6");

    // The popover items should have the correct label
    expect(popoverItems?.[1]?.textContent).toContain("sw-data-table-settings.showNumberedColumn");
    expect(popoverItems?.[2]?.textContent).toContain("sw-data-table-settings.showStripedRows");
    expect(popoverItems?.[3]?.textContent).toContain("sw-data-table-settings.showOutlines");
    expect(popoverItems?.[4]?.textContent).toContain("sw-data-table-settings.frameOutlines");
    expect(popoverItems?.[4]?.textContent).toContain(
      "sw-data-table-settings.frameOutlinesMetaCopy",
    );
    expect(popoverItems?.[5]?.textContent).toContain("sw-data-table-settings.resetAllChanges");
  });

  it("should switch to columns view", async () => {
    wrapper = await createWrapper();

    let popoverContent = document.querySelector(".sw-popover__content");

    // Click on "Columns" label to switch to the columns view
    const columnsPopoverItemLabel =
      popoverContent?.querySelectorAll(".sw-popover-item__label")?.[0];
    expect(columnsPopoverItemLabel?.textContent).toContain(
      "sw-data-table-settings.columnOrder.title",
    );
    await columnsPopoverItemLabel?.dispatchEvent(new Event("click"));
    await flushPromises();

    // Check if the columns view header title is rendered
    popoverContent = document.querySelector(".sw-popover__content");
    expect(popoverContent?.querySelector(".sw-popover__header")?.textContent).toBe(
      "sw-data-table-settings.columnOrder.title",
    );

    // Check if every column is rendered correctly
    const columns = document.querySelectorAll(".sw-popover-item-result__option_item");
    expect(columns).toHaveLength(6);

    expect(columns[0]?.textContent).toContain("Name");
    expect(columns[1]?.textContent).toContain("Manufacturer");
    expect(columns[2]?.textContent).toContain("Description");
    expect(columns[3]?.textContent).toContain("Price");
    expect(columns[4]?.textContent).toContain("Available");
    expect(columns[5]?.textContent).toContain("Stock");
  });

  it("should emit the correct events when the columns are changed", async () => {
    wrapper = await createWrapper();

    // Click on "Columns" label to switch to the columns view
    const columnsPopoverItemLabel = document
      .querySelector(".sw-popover__content")
      ?.querySelectorAll(".sw-popover-item__label")?.[0];
    await columnsPopoverItemLabel?.dispatchEvent(new Event("click"));

    // Trigger a column change from sw-popover-item-result
    const SwPopoverItemResult = wrapper.findComponent({ name: "SwPopoverItemResult" });
    await SwPopoverItemResult.vm.$emit("change-order", {
      itemId: "price",
      dropZone: "before",
      dropId: "manufacturer.name",
    });

    await wrapper.vm.$nextTick();

    // Check if the change-column-order event was emitted correctly
    expect(wrapper.emitted()["change-column-order"]).toBeTruthy();
    expect(wrapper.emitted()["change-column-order"]![0]).toStrictEqual([
      {
        itemId: "price",
        dropZone: "before",
        dropId: "manufacturer.name",
      },
    ]);

    // Check if the change-column-visibility was emitted correctly
    expect(wrapper.emitted()["change-column-visibility"]).toBeTruthy();
    expect(wrapper.emitted()["change-column-visibility"]![0]).toStrictEqual(["price", true]);
  });

  it("should emit the correct events when the columns are changed with visibility to false", async () => {
    wrapper = await createWrapper();

    // Click on "Columns" label to switch to the columns view
    const columnsPopoverItemLabel = document
      .querySelector(".sw-popover__content")
      ?.querySelectorAll(".sw-popover-item__label")?.[0];
    await columnsPopoverItemLabel?.dispatchEvent(new Event("click"));

    // Trigger a column change from sw-popover-item-result
    const SwPopoverItemResult = wrapper.findComponent({ name: "SwPopoverItemResult" });
    await SwPopoverItemResult.vm.$emit("change-order", {
      itemId: "active",
      dropZone: "before",
      dropId: "stock",
    });

    await wrapper.vm.$nextTick();

    // Check if the change-column-order event was emitted correctly
    expect(wrapper.emitted()["change-column-order"]).toBeTruthy();
    expect(wrapper.emitted()["change-column-order"]![0]).toStrictEqual([
      {
        itemId: "active",
        dropZone: "before",
        dropId: "stock",
      },
    ]);

    // Check if the change-column-visibility was emitted correctly
    expect(wrapper.emitted()["change-column-visibility"]).toBeTruthy();
    expect(wrapper.emitted()["change-column-visibility"]![0]).toStrictEqual(["active", false]);
  });

  it("should change the visibility of all non-pinned column items to false when click on group header of visibility", async () => {
    wrapper = await createWrapper();

    // Click on "Columns" label to switch to the columns view
    const columnsPopoverItemLabel = document
      .querySelector(".sw-popover__content")
      ?.querySelectorAll(".sw-popover-item__label")?.[0];
    await columnsPopoverItemLabel?.dispatchEvent(new Event("click"));

    // Trigger a group change from sw-popover-item-result
    const visibleGroupHeader = document.querySelectorAll(
      ".sw-popover-item-result__group-action",
    )?.[0];
    expect(visibleGroupHeader?.textContent).toContain(
      "sw-data-table-settings.columnOrder.columnGroups.actionLabelShown",
    );
    await visibleGroupHeader?.dispatchEvent(new Event("click"));

    await wrapper.vm.$nextTick();

    // Check if the change-column-visibility was emitted correctly to false for all columns
    expect(wrapper.emitted()["change-column-visibility"]).toBeTruthy();
    expect(wrapper.emitted()["change-column-visibility"]!).toHaveLength(5);
    wrapper.emitted()["change-column-visibility"].forEach((emit: boolean[]) => {
      expect((emit as boolean[])[1]).toBeFalsy();
    });
  });

  it("should change the visibility of all non-pinned column items to true when click on group header of hidden", async () => {
    wrapper = await createWrapper();

    // Click on "Columns" label to switch to the columns view
    const columnsPopoverItemLabel = document
      .querySelector(".sw-popover__content")
      ?.querySelectorAll(".sw-popover-item__label")?.[0];
    await columnsPopoverItemLabel?.dispatchEvent(new Event("click"));

    // Trigger a group change from sw-popover-item-result
    const visibleGroupHeader = document.querySelectorAll(
      ".sw-popover-item-result__group-action",
    )?.[1];
    expect(visibleGroupHeader?.textContent).toContain(
      "sw-data-table-settings.columnOrder.columnGroups.actionLabelHidden",
    );
    await visibleGroupHeader?.dispatchEvent(new Event("click"));

    await wrapper.vm.$nextTick();

    // Check if the change-column-visibility was emitted correctly to false for all columns
    expect(wrapper.emitted()["change-column-visibility"]).toBeTruthy();
    expect(wrapper.emitted()["change-column-visibility"]!).toHaveLength(5);
    wrapper.emitted()["change-column-visibility"]!.forEach((emit: boolean[]) => {
      expect((emit as boolean[])[1]).toBeTruthy();
    });
  });

  it("should emit reset-all-changes event", async () => {
    wrapper = await createWrapper();

    // Click on "Reset" button to reset all changes
    const resetButton = document.querySelectorAll(".sw-popover-item__label")?.[5];
    expect(resetButton?.textContent).toContain("sw-data-table-settings.resetAllChanges");
    await resetButton?.dispatchEvent(new Event("click"));

    // Check if the reset-all-changes event was emitted
    expect(wrapper.emitted("reset-all-changes")).toBeTruthy();
  });
});
