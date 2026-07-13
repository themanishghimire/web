// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Gentle pulse animation for hero node graph (if present)
  var nodes = document.querySelectorAll('.hero-graph .node');
  nodes.forEach(function (node, i) {
    node.style.animationDelay = (i * 0.35) + 's';
  });
});
