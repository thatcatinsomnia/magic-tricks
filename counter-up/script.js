(() => {
  const STEP = 200;
  let requestAnimationFrameId = null;
  let status = [false, false, false];

  const counters = [...document.querySelectorAll('.js-counter')];

  const init = () => {
    render();
  };

  const render = () => {
    const isDone = status.every((s) => s === true);

    if (isDone) {
      cancelAnimationFrame(requestAnimationFrameId);
      return;
    }

    counters.forEach((counter, i) => {
      let currentCount = +counter.textContent;
      const max = +counter.getAttribute('data-max');
      
      const increment = parseInt(max / STEP);
      currentCount += increment;
      
      if (currentCount > max) {
        currentCount = max;
        status[i] = true;
      }
      counter.textContent = currentCount;
    });

    requestAnimationFrameId = requestAnimationFrame(render);
  }

  init();
})();