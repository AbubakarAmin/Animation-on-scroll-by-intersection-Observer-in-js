let moon = document.querySelector('.moon');
console.log(moon);

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("moonShines");
    }
    else{entry.target.classList.remove("moonShines");}
  });
});

observer.observe(moon);
