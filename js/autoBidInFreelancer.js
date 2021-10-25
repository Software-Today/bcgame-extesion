
function doRobot() {
  console.log("In Do Robot function")
    const targetNode = document;
    if(targetNode == null) return;
  
    const config = { childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
      
      let button = document.getElementsByClassName('c-link--button p-message_pane__degraded_banner__reload_cta')[0]
      if(button != undefined){
        button.click();
      }
        
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}

doRobot();
