(function() {
  const paths = document.querySelectorAll('path');

  paths.forEach(path => {
    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = totalLength + 10;
    path.style.strokeDashoffset = totalLength + 10;
  });
})();