import { waitUntilRendered } from "../../../_internal/test-helper";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import meta, { type SwPopoverMeta, type SwPopoverStory } from "./sw-popover.stories";

export default {
  ...meta,
  title: "Interaction Tests/Overlay/sw-popover",
} as SwPopoverMeta;

export const VisualTestRenderPopoverTrigger: SwPopoverStory = {
  name: "Should render only the popover trigger",
};

export const VisualTestRenderPopover: SwPopoverStory = {
  name: "Should render the popover",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitUntilRendered(() => document.body.textContent?.includes("Toggle popover"));

    const popoverToggle = canvas.getByText("Toggle popover");
    await userEvent.click(popoverToggle);

    const popover = within(document.querySelector(".sw-floating-ui__content") as HTMLElement);
    expect(popover.getByText("Popover example")).toBeInTheDocument();
  },
};

export const VisualTestRenderChildView: SwPopoverStory = {
  name: "Should render the popover with child view",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitUntilRendered(() => document.body.textContent?.includes("Toggle popover"));

    const popoverToggle = canvas.getByText("Toggle popover");
    await userEvent.click(popoverToggle);

    const popover = within(document.querySelector(".sw-floating-ui__content") as HTMLElement);
    expect(popover.getByText("Popover example")).toBeInTheDocument();

    const columnsItem = popover.getByText("Columns");

    await userEvent.click(columnsItem);
  },
};

export const VisualTestRenderWithoutFloat: SwPopoverStory = {
  name: "Should render the popover with disabled float and without trigger",
  args: {
    disableFloat: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitUntilRendered(() => document.body.textContent?.includes("Popover example"));

    expect(canvas.getByText("Popover example")).toBeInTheDocument();
  },
};
