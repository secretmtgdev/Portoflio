(function() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", appendDefaults);
  } else {
    appendDefaults();
  }

  function appendDefaults() {
    getNavigationComp();
    getHomeComp();
  }

  function getNavigationComp() {
    $("header").load("./components/navigation/navigation.html");
  }

  function getHomeComp() {
    $("main").load("./components/home/home.html");
  }
})();
