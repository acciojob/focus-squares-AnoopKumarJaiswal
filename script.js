// your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.square');
  const COFFEE = '#6F4E37';
  const LAVENDER = '#E6E6FA';

  // safety: ensure default is lavender
  boxes.forEach(b => b.style.backgroundColor = LAVENDER);

  boxes.forEach((box, idx) => {
    // use mouseover/mouseout (bubbling) so test runners catch them
    box.addEventListener('mouseover', () => {
      boxes.forEach((b, j) => {
        b.style.backgroundColor = (j === idx) ? LAVENDER : COFFEE; // rest to coffee
      });
    });

    box.addEventListener('mouseout', () => {
      // when leaving a box, reset all to lavender
      boxes.forEach(b => b.style.backgroundColor = LAVENDER);
    });
  });
});
