const numbersSection = document.querySelector('[numbers]');
const numberElements = document.querySelectorAll('[numbers-val]');
const speed = 200;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) 
      [...numberElements].forEach(elem => {
        const updateCount = () => {
          const array = [...elem.getAttribute('numbers-val')]
          const value = parseInt(elem.getAttribute('numbers-val'));
          const inner = parseInt(elem.innerText);
          const increment = Math.floor(value / speed) + 1;
          const time = increment > 1 ? 5 : 50;

          if (inner < value) {
            elem.innerText = inner + increment;
            setTimeout(updateCount, time);
          } else {
            elem.innerText = `${value} ${array.includes('+') ? '+' : ''}`;
          }
        };
        updateCount();
      })

  })
},
{
  threshold: .2
}
)

window.onload = function () {
  observer.observe(numbersSection);
};

