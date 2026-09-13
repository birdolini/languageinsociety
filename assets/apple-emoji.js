(() => {
  const emojiPattern = /(\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\p{Emoji_Modifier})?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\p{Emoji_Modifier})?)*)/gu;
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.nodeValue.trim() || parent.closest('script, style, textarea, .logo-emoji')) {
        return NodeFilter.FILTER_REJECT;
      }
      emojiPattern.lastIndex = 0;
      return emojiPattern.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    let cursor = 0;
    for (const match of node.nodeValue.matchAll(emojiPattern)) {
      fragment.append(node.nodeValue.slice(cursor, match.index));
      const image = document.createElement('img');
      image.className = 'apple-emoji';
      image.src = `https://emojicdn.elk.sh/${encodeURIComponent(match[0])}?style=apple`;
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      image.draggable = false;
      fragment.append(image);
      cursor = match.index + match[0].length;
    }
    fragment.append(node.nodeValue.slice(cursor));
    node.replaceWith(fragment);
  });
})();
