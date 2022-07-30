export const onMoveAnimation = (ele: string, animation: string) => {
  const root = document.querySelector(`#${ele}`) as HTMLElement;
  if (root) {
    root.style.animation = `${animation} .3s`;
    root.style.animationFillMode = "forwards";
  }
};
