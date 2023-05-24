
  function changeFilter(filter) {
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  
    const tabs = document.querySelectorAll('.tabs-container .tab');
    tabs.forEach(tab => {
      if (tab.textContent.toLowerCase() === filter) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
  
  function changeTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach((tab, tabIndex) => {
      if (tabIndex === index) {
        tab.classList.add('active');
        contents[tabIndex].classList.add('active');
      } else {
        tab.classList.remove('active');
        contents[tabIndex].classList.remove('active');
      }
    });
  }

  function loadMore() {
    const hiddenItems = document.querySelectorAll('.work-item[style="display: none;"]');
    for (let i = 0; i < 12; i++) {
      if (hiddenItems[i]) {
        hiddenItems[i].style.display = 'block';
      }
    }
  
    const remainingHiddenItems = document.querySelectorAll('.work-item[style="display: none;"]');
    const loadMoreButton = document.querySelector('.load-more-button');
    if (remainingHiddenItems.length === 0) {
      loadMoreButton.style.display = 'none';
    }
  }
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let activeIndex = 0;

function changeCarouselItem(index) {
  carouselItems.forEach(item => item.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  carouselItems[index].classList.add('active');
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    activeIndex = index;
    changeCarouselItem(activeIndex);
  });
});

arrowLeft.addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
  changeCarouselItem(activeIndex);
});

arrowRight.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % carouselItems.length;
  changeCarouselItem(activeIndex);
});