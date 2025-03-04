export function createRectangles(i:number, nodes: SceneNode[]) {
  const rect = figma.createRectangle();
  rect.x = i * 150;
  rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
  figma.currentPage.appendChild(rect);
  nodes.push(rect);
}