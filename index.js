const timeline = document.querySelector('[data-timeline]');

timeline.addEventListener('pointerdown', (e) => {
  timeline.setPointerCapture(e.pointerId);

  setTimelinePosition(e);
  timeline.addEventListener('pointermove', setTimelinePosition);

  timeline.addEventListener('pointerup', () => {
    timeline.removeEventListener('pointermove', setTimelinePosition);
  });
});

function setTimelinePosition (e) {
  let shift = e.clientX - e.target.parentElement.offsetLeft;

  if (shift <= 0) {
    shift = 0;
  }
  if (shift >= e.target.clientWidth) {
    shift = e.target.clientWidth;
  }

  timeline.style.setProperty('--handle-position', `${shift / e.target.clientWidth * 100}%`);
}

