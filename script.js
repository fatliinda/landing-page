const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const button = item.querySelector(".accordion-button");
  const collapse = item.querySelector(".accordion-collapse");

  button.addEventListener("click", () => {
    button.classList.toggle("show");

    collapse.classList.toggle("show");

    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector(".accordion-button").classList.remove("show");
        otherItem.querySelector(".accordion-collapse").classList.remove("show");
      }
    });
  });

  collapse.addEventListener("click", () => {
    if (collapse.classList.contains("show")) {
      button.classList.remove("show");
      collapse.classList.remove("show");
    }
  });
});
