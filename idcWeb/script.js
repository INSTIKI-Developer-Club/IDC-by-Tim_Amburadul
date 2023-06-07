var variantHome = document.querySelectorAll('.home');

    variantHome.forEach((home, index) => {
        home.dataset.aos = 'fade-down';
        home.dataset.aosDuration = 1500;
        home.dataset.aosDelay = index * 100;
    })
    AOS.init({
        once: true
      });