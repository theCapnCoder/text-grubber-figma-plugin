import { createRectangles } from "./rectangle-module";

figma.showUI(__html__);

figma.ui.onmessage = (msg: { type: string; count: number }) => {
  if (msg.type === "create-shapes") {
    const numberOfRectangles = msg.count;

    const nodes: SceneNode[] = [];
    for (let i = 0; i < numberOfRectangles; i++) {
      createRectangles(i, nodes);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};
