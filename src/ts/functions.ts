export namespace SW {
  /**
   * Scrolls to the top of the target element
   * TODO: Clear interval at the bottom of the page if speed is less than 0 (going down)
   * @param targetElement Target Element
   * @param t Time
   */
  export function VerticalScroll(
    targetElement: HTMLElement,
    t = 300,
    offset = 0
  ) {
    let distance = targetElement.getBoundingClientRect().top + offset;
    let time = t;

    let speed = (distance / time) * 10;

    let windowScrollInterval = setInterval(() => {
      let stopScrollInterval = setInterval(() => {
        clearInterval(windowScrollInterval);
        clearInterval(stopScrollInterval);
      }, time);

      window.addEventListener("keydown", () => {
        clearInterval(windowScrollInterval);
      });

      window.addEventListener("wheel", () => {
        clearInterval(windowScrollInterval);
      });

      window.addEventListener("touchstart", () => {
        clearInterval(windowScrollInterval);
      });

      if (
        Math.abs(targetElement.getBoundingClientRect().top + offset) >
        Math.abs(speed)
      ) {
        window.scroll(0, window.pageYOffset + speed);
      } else {
        window.scroll(
          0,
          window.pageYOffset +
            targetElement.getBoundingClientRect().top +
            offset
        );
        clearInterval(stopScrollInterval);
        clearInterval(windowScrollInterval);
      }
    }, 10);
  }

  export function ToggleClass(el: HTMLElement, className: string) {
    if (el.classList.contains(className)) el.classList.remove(className);
    else el.classList.add(className);
  }
}
