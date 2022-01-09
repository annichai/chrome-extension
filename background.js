function reddenPage() {
    var links = document.links;
    for(var i = 0; i < links.length; i++) {
        links[i].style.textDecoration = "underline";
      }
  }
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  });