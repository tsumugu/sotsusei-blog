import { visit } from "unist-util-visit";

const rehypeMyNotation = () => {
  const transformer = (tree: any) => {
    visit(tree, "text", (node, index, parent) => {
      const regex = /!L\(([^)]+)\)/gs;
      const match = regex.exec(node.value);
      if (match) {
        const url = match[1];
        const imageNode = {
          type: "element",
          tagName: "toi",
          properties: {
            src: `h${url}`,
          },
          children: [],
        };
        parent.children[index!] = imageNode;
      }
    });
  };

  return transformer;
};
export default rehypeMyNotation;
