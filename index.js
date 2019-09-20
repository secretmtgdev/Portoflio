(function() {
  var VisualSegmentEnum = {
    GENERAL: 0,
    SUBTITLE: 1,
    SECTION: 2,
    PARAGRPAPH: 3
  };

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

  /**
   * Method to assist those with visual impairments
   */
  function adjustTextSize(visualSegmentEnum, fontSize, color) {
    // detect internet explorer
    let rootStylesheet = inIE()
      ? document.styleSheets[0].rules[visualSegmentEnum]
      : document.styleSheets[0].cssRules[visualSegmentEnum];
    specificRule.style.fontSize = fontSize;
    specificRule.style.color = color;
  }

  /**
   * Checks to see if we are in internet explorer
   */
  function inIE() {
    let userAgent = navigator.userAgent;
    return userAgent.includes("MSIE") || userAgent.includes("Trident");
  }
})();
