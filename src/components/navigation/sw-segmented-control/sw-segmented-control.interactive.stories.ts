import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import meta, {
  type SwSegmentedControlMeta,
  type SwSegmentedControlStory,
} from "./sw-segmented-control.stories";

export default {
  ...meta,
  title: "Interaction Tests/Navigation/sw-segmented-control",
} as SwSegmentedControlMeta;

export const VisualTestRenderSegmentedControl: SwSegmentedControlStory = {
  name: "Render segmented controls",
};

export const VisualTestRenderSegmentedControlWithContext: SwSegmentedControlStory = {
  name: "Render segmented controls with context",
  args: {
    disableContext: false,
  },
};

export const VisualTestRenderSegmentedControlWithPopoverBase: SwSegmentedControlStory = {
  name: "Render segmented controls with popover base",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByText("Label F");

    await userEvent.click(button);

    const popoverContent = document.getElementsByClassName("sw-popover__content")[0];
    if (!popoverContent) {
      throw new Error("Popover content not found");
    }

    // Look inside the popover
    const popover = within(popoverContent as HTMLElement);

    const firstLevel = await popover.getByText("First level");
    await expect(firstLevel).toBeInTheDocument();
  },
};

export const VisualTestRenderSegmentedControlWithPopoverSecondLevel: SwSegmentedControlStory = {
  name: "Render segmented controls with popover second level",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByText("Label F");

    await userEvent.click(button);

    const popoverContent = document.getElementsByClassName("sw-popover__content")[0];
    if (!popoverContent) {
      throw new Error("Popover content not found");
    }

    // Look inside the popover
    const popover = within(popoverContent as HTMLElement);

    const goToSecondLevel = await popover.getByText("Go to second level");
    await userEvent.click(goToSecondLevel);

    const secondLevel = await popover.getByText("Second level");
    await expect(secondLevel).toBeInTheDocument();

    const goToThirdLevel = await popover.getByText("Go to third level");
    await expect(goToThirdLevel).toBeInTheDocument();
  },
};
