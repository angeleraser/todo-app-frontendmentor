export const handleItemDragStart = ({ target: item, clientX, clientY }) => {
  let swapItem = document.elementFromPoint(clientX, clientY) || item;
  const list = item.parentNode;
  item.classList.add("ondrag");
  if (list === swapItem.parentNode) {
    swapItem = swapItem !== item.nextSibling ? swapItem : swapItem.nextSibling;
    list.insertBefore(item, swapItem);
  }
};

export const handleItemDragEnd = ({ target }) => {
    target.classList.remove("ondrag");
  };