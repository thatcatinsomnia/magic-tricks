(() => {
  const button = document.querySelector('button');

  button.addEventListener('click', e => {
    // 計算 ripple 相對於 button 的 absolute 位置
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const span = document.createElement('span');
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    button.append(span);

    span.addEventListener('animationend', e => {
      span.remove();
    });
  });
})();