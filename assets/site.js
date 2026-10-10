const buttons = document.querySelectorAll("[data-language-button]");
const panels = document.querySelectorAll("[data-language-panel]");

function selectLanguage(language) {
  document.documentElement.lang = language;
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.languageButton === language));
  });
  panels.forEach((panel) => {
    panel.hidden = panel.dataset.languagePanel !== language;
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => selectLanguage(button.dataset.languageButton));
});

const preferredLanguage = navigator.language?.toLowerCase().startsWith("tr") ? "tr" : "en";
selectLanguage(preferredLanguage);
