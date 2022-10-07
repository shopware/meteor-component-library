import { mount } from "@vue/test-utils";
import SwDataTable from "./sw-data-table.vue";
import SwDataTableFixtures from "./sw-data-table.fixtures.json";

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

const DEFAULT_MIN_WIDTH = '100px';

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

function createWrapper() {
  return mount(SwDataTable, {
    propsData: {
      dataSource: SwDataTableFixtures,
      columns: columnsFixture,
      title: 'Data table',
      subtitle: 'This is the subline',
      currentPage: 1,
      paginationTotalItems: 182,
      paginationLimit: 25
    },
    mocks: {
      $t: (v) => v,
    }
  });
}

describe("sw-data-table", () => {
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

  describe("should throw an console error if columns aren't correctly defined", () => {
    it("missing label", async () => {
      // spy for console.error calls
      jest.spyOn(console, "error").mockImplementation(() => {});

      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
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

    it("missing property", async () => {
      // spy for console.error calls
      jest.spyOn(console, "error").mockImplementation(() => {});

      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "name",
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

    it("missing renderer", async () => {
      // spy for console.error calls
      jest.spyOn(console, "error").mockImplementation(() => {});

      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "name",
            property: "name",
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

    it("missing position", async () => {
      // spy for console.error calls
      jest.spyOn(console, "error").mockImplementation(() => {});

      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "name",
            property: "name",
            renderer: "text",
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

    it("wrong label property", async () => {
      // spy for console.error calls
      jest.spyOn(console, "error").mockImplementation(() => {});

      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: 1,
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

    it("wrong property property", async () => {
      // spy for console.error calls
      jest.spyOn(console, "error").mockImplementation(() => {});

      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: 1,
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

    it("wrong renderer property", async () => {
      // spy for console.error calls
      jest.spyOn(console, "error").mockImplementation(() => {});

      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "name",
            property: "name",
            renderer: 1,
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

    it("wrong position property", async () => {
      // spy for console.error calls
      jest.spyOn(console, "error").mockImplementation(() => {});

      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: "0",
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

  describe("Should render the table header cells correctly", () => {
    it("should render table header cells everytime with 'fit-content' in the 'max-width' property", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0,
            width: 200,
          },
        ],
      });

      const firstColumnHeader = wrapper.findAll('th').at(0);
      expect(firstColumnHeader.attributes().style).toContain('max-width: fit-content');
    });
    it("should render table header cells with default minimum column width and auto main width when given width is undefined", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0,
          },
        ],
      });

      const firstColumnHeader = wrapper.findAll('th').at(0);
      expect(firstColumnHeader.attributes().style).toContain(`min-width: ${DEFAULT_MIN_WIDTH}`);
      expect(firstColumnHeader.attributes().style).toContain('width: auto');
    });
    it("should render table header cells with defined column width when width is defined", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0,
            width: 789
          },
        ],
      });

      const firstColumnHeader = wrapper.findAll('th').at(0);
      expect(firstColumnHeader.attributes().style).toContain('min-width: 789px');
      expect(firstColumnHeader.attributes().style).toContain('width: 789px');
    });
  });

  describe("Should render the table data cells correctly", () => {
    it("should render table data cells with 'max-width' to 'auto' when 'cellWrap' is 'normal'", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0,
            width: 789,
            cellWrap: 'normal'
          },
        ],
      });

      const firstColumnData = wrapper.findAll('td').at(0);
      expect(firstColumnData.attributes().style).toContain('max-width: auto');
    });
    it("should render table data cells with 'max-width' to 'XXXpx' when 'cellWrap' is 'nowrap' and 'width' is defined", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0,
            width: 789,
          },
        ],
      });

      const firstColumnData = wrapper.findAll('td').at(0);
      expect(firstColumnData.attributes().style).toContain('max-width: 789px');
    });
    it("should render table data cells with 'max-width' to fallback width when 'cellWrap' is 'nowrap' and 'width' is undefined", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0
          },
        ],
      });

      const firstColumnData = wrapper.findAll('td').at(0);
      expect(firstColumnData.attributes().style).toContain(`max-width: ${DEFAULT_MIN_WIDTH}`);
    });
    it("should render table data cells with nowrap white-space when cellWrap is undefined", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0
          },
        ],
      });

      const firstColumnData = wrapper.findAll('td').at(0);
      expect(firstColumnData.attributes().style).toContain('white-space: nowrap');
    });
    it("should render table data cells with 'normal' white-space when cellWrap is 'normal'", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0,
            cellWrap: 'normal'
          },
        ],
      });

      const firstColumnData = wrapper.findAll('td').at(0);
      expect(firstColumnData.attributes().style).toContain('white-space: normal');
    });
    it("should render table data cells with default minimum column width when width is undefined", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0
          },
        ],
      });

      const firstColumnData = wrapper.findAll('td').at(0);
      expect(firstColumnData.attributes().style).toContain(`min-width: ${DEFAULT_MIN_WIDTH}`);
    });
    it("should render table data cells with defined column width when width is defined", async () => {
      const wrapper = createWrapper();

      await wrapper.setProps({
        columns: [
          {
            label: "Name",
            property: "name",
            renderer: "text",
            position: 0,
            width: 789
          },
        ],
      });

      const firstColumnData = wrapper.findAll('td').at(0);
      expect(firstColumnData.attributes().style).toContain('min-width: 789px');
    });
  });

  describe("Should render the card props correctly", () => {
    it('should render the title', () => {
      const wrapper = createWrapper();

      const title = wrapper.find('.sw-card__title');
      
      expect(title.exists()).toBe(true);
      expect(title.text()).toBe('Data table');
    });

    it('should render the subtitle', () => {
      const wrapper = createWrapper();

      const subtitle = wrapper.find('.sw-card__subtitle');

      expect(subtitle.exists()).toBe(true);
      expect(subtitle.text()).toBe('This is the subline');
    });

    it('should not render the title', async () => {
      const wrapper = createWrapper();
      await wrapper.setProps({
        title: undefined
      })

      const title = wrapper.find('.sw-card__title');
      
      expect(title.exists()).toBe(false);
    });

    it('should not render the subtitle', async () => {
      const wrapper = createWrapper();
      await wrapper.setProps({
        subtitle: undefined
      })

      const subtitle = wrapper.find('.sw-card__subtitle');

      expect(subtitle.exists()).toBe(false);
    });
  });

  describe("Should render the general props correctly", () => {
    it('should not render the reload button', async () => {
      const wrapper = createWrapper();

      const reloadButton = wrapper.find('.sw-button[aria-label="reload-data"]');

      expect(reloadButton.exists()).toBe(false);
    });

    it('should render the reload button', async () => {
      const wrapper = createWrapper();
      await wrapper.setProps({
        enableReload: true
      })

      const reloadButton = wrapper.find('.sw-button[aria-label="reload-data"]');

      expect(reloadButton.exists()).toBe(true);
    });
  });

  describe("Should execute the functionalities correctly", () => {
    it('should emit the reload on event on clicking the reload button', async () => {
      const wrapper = createWrapper();
      await wrapper.setProps({
        enableReload: true
      })

      const reloadButton = wrapper.find('.sw-button[aria-label="reload-data"]');

      expect(wrapper.emitted().reload).toBeFalsy()

      await reloadButton.trigger('click');

      expect(wrapper.emitted().reload).toBeTruthy()
    });
  });
});
