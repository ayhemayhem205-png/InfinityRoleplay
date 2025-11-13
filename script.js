// التنقل بين التبويبات
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.tab;
    sections.forEach(section => {
      if(section.id === target) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});

// الأكوردين (لوحة القوانين القابلة للطي)
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    if(item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      accordionHeaders.forEach(h => h.parentElement.classList.remove('active'));
      item.classList.add('active');
    }
  });
});
