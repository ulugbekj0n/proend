const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    tab.classList.add("active");

    const target = tab.dataset.tab;
    if (target === "all") {
      tabContents.forEach(content => content.classList.add("active"));
    } else {
      document.getElementById(target).classList.add("active");
    }
  });
});
