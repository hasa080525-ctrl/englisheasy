document.querySelectorAll('.faq-q').forEach(q => {
  if(!q.parentElement.classList.contains('faq-item')) return;
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
});
