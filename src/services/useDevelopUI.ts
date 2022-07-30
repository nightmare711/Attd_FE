export const onMoveAnimation = (_id: string, animation: string) => {
  const root = document.querySelector(`#${_id}`) as HTMLElement;
  try {
    if (root) {
      root.style.animation = `${animation} .3s`;
      root.style.animationFillMode = "forwards";
    }
  } catch (err: any) {
    console.log(err.message);
  }
};
