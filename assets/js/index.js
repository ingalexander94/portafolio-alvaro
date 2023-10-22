(() => {
  const $d = document;
  const links = $d.querySelectorAll("header nav.navbar ul li");
  const checkbox = $d.querySelector("header nav input[type='checkbox']");
  let linkActive = null;

  function hashRouterListener() {
    checkbox.checked = false;
    const { hash } = window.location;
    links.forEach((link) => {
      link.classList.remove("active");
      if (hash === link.firstChild.hash) {
        linkActive = link;
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("hashchange", hashRouterListener);

  hashRouterListener();

  function handleScroll() {
    const scrollPosition = window.scrollY;

    const section1Offset = $d.getElementById("home").offsetTop - 80;
    const section2Offset = $d.getElementById("experience").offsetTop - 80;
    const section3Offset = $d.getElementById("skills").offsetTop - 80;
    const section4Offset = $d.getElementById("contact").offsetTop - 80;

    if (scrollPosition >= section1Offset && scrollPosition < section2Offset) {
      linkActive &&
        linkActive !== links[0] &&
        linkActive.classList.remove("active");
      linkActive = links[0];
      links[0].classList.add("active");
    } else if (
      scrollPosition >= section2Offset &&
      scrollPosition < section3Offset
    ) {
      linkActive &&
        linkActive !== links[1] &&
        linkActive.classList.remove("active");
      linkActive = links[1];
      links[1].classList.add("active");
    } else if (
      scrollPosition >= section3Offset &&
      scrollPosition < section4Offset
    ) {
      linkActive &&
        linkActive !== links[2] &&
        linkActive.classList.remove("active");
      linkActive = links[2];
      links[2].classList.add("active");
    } else if (scrollPosition >= section4Offset) {
      linkActive &&
        linkActive !== links[3] &&
        linkActive.classList.remove("active");
      linkActive = links[3];
      links[3].classList.add("active");
    }
  }

  window.addEventListener("scroll", handleScroll);
})();
