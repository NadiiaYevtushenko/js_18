import $ from 'jquery';

function createStatistics() {
  let counter: number = 0;
  let isDestroyed: boolean = false;
  const listener = (): number => counter++;

  $(document).on("click", listener);

  return {
    destroy() {
      $(document).off("click", listener);
      isDestroyed = true;
      return "Statistics fully destroyed";
    },

    getClicks() {
      if (isDestroyed) return "Statistics is destroyed";
      return counter;
    },
  };
}

;(window as any).statistics = createStatistics();
