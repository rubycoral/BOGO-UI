const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  const radio = box.querySelector('input[type="radio"]');
  radio.addEventListener('change', () => {
    boxes.forEach(b => b.querySelector('.content').style.display = 'none');
    if (radio.checked) {
      box.querySelector('.content').style.display = 'block';
    }
  });
});
