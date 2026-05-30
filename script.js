function getCookie(name) {
  let cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    let [key, value] = cookie.trim().split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

///// Apply saved preferences on page load
window.onload = function () {
  let savedFontSize = getCookie("fontsize");
  let savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      savedFontSize + "px"
    );
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor
    );
    document.getElementById("fontcolor").value = savedFontColor;
  }
};

//// Save preferences
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let fontSize = document.getElementById("fontsize").value;
  let fontColor = document.getElementById("fontcolor").value;

  ////Save cookies
  document.cookie = `fontsize=${fontSize}; path=/`;
  document.cookie = `fontcolor=${fontColor}; path=/`;

  // Apply styles immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    fontSize + "px"
  );
  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});