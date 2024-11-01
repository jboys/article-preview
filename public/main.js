function togglePanel() {
  const panel = document.getElementById("panel");
  toggle(panel);
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  toggle(menu);
}

function toggle(element) {
  if (element.classList.contains("hidden")) {
    show(element);

    // Listen for outside clicks and escape key
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleEscapeKey);
  } else {
    hide(element);

    // Remove listeners
    document.removeEventListener("click", handleClickOutside, true);
    document.removeEventListener("keydown", handleEscapeKey);
  }
}

function show(element) {
  element.classList.remove("hidden");
  requestAnimationFrame(() => {
    element.classList.remove("opacity-0");
    element.classList.add("opacity-100");
  });
}

function hide(element) {
  element.classList.remove("opacity-100");
  element.classList.add("opacity-0");

  element.addEventListener(
    "transitionend",
    () => {
      element.classList.add("hidden");
    },
    { once: true },
  );
}

function handlePanelKeyDown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent spacebar from scrolling
    togglePanel();
  }
}

function handleMenuKeyDown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent spacebar from scrolling
    toggleMenu();
  }
}

function handleClickOutside(event) {
  // Close panel if it is open
  const panel = document.getElementById("panel");
  if (!panel.classList.contains("hidden")) {
    if (!panel.contains(event.target)) {
      togglePanel();
    }
  }

  // Close menu if it is open
  const menu = document.getElementById("menu");
  if (!menu.classList.contains("hidden")) {
    if (!menu.contains(event.target)) {
      toggleMenu();
    }
  }
}

function handleEscapeKey(event) {
  if (event.key === "Escape") {
    // Close panel if it is open
    if (!panel.classList.contains("hidden")) {
      togglePanel();
    }
    // Close menu if it is open
    if (!menu.classList.contains("hidden")) {
      toggleMenu();
    }
  }
}
