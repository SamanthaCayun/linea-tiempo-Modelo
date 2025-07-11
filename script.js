function scrollTimeline(direction) {
  const timeline = document.getElementById('timeline');
  const scrollAmount = 300;
  timeline.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
