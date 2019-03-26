
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"container { width: 95%; margin: 0 auto; text-align: center; }\n",],undefined,{path:"./pages/ucenter/ucenter.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/ucenter/ucenter.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      