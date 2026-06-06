var loadingScreen = document.getElementById("loading-screen");
window.addEventListener("load", function () {
  // Exemplo de quando o loading acaba:
  setTimeout(() => {
    document.getElementById("loading-screen").style.opacity = "0";
    document.getElementById("loading-screen").style.pointerEvents = "none";

    // Garanta que o body use a rolagem automática assim que o carregamento sumir!
    document.body.style.overflowY = "auto";
  }, 3000);
});
