let allPlus = document.querySelectorAll(".plus");
// let content = document.querySelectorAll(".content")


allPlus.forEach((item) => {
  
  item.addEventListener("click", (eo) => {
    let content =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "content"
      )[0];
    // console.log();

    content.style.height = `${content.scrollHeight}px`;
    // content.style.opacity = '1'

    // eo.target.innerText = "-"
    // content.classList.add("active")

    if (content.classList.contains("active")) {
      content.classList.remove("active");
      eo.target.innerText = "+";
      content.style.height = `0px`;
    } else {
      content.classList.add("active");
      eo.target.innerText = "-";
    }
  });

});
