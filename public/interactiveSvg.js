document.addEventListener("DOMContentLoaded", function () {
    runProgram();
  });
  
  async function runProgram() {
    // 1. Load SVG
    let mySvg = await fetch("fatman_interactive.svg");
    let svgContent = await mySvg.text();
    document.querySelector("#map").innerHTML = svgContent;
  
    // 2. Vent kort og find elementerne
    setTimeout(() => {
      let pointsGroup = document.querySelector("#map #points");
      let peaceSymbol = document.querySelector("#map #peace");
      let loveSymbol = document.querySelector("#map #love");
      let cakeSymbol = document.querySelector("#map #cake");
  
      let point1 = document.querySelector("#map #point1");
      let point2 = document.querySelector("#map #point2");
      let point3 = document.querySelector("#map #point3");
  
      if (!pointsGroup) {
        console.error("Gruppen 'points' blev ikke fundet i SVG'en.");
        return;
      }
      if (!peaceSymbol || !loveSymbol || !cakeSymbol || !point1 || !point2 || !point3) {
        console.error("Symbolerne eller punkterne blev ikke fundet i SVG'en.");
        return;
      }
  
      // Skjul symbolerne fra start
      peaceSymbol.style.visibility = "hidden";
      loveSymbol.style.visibility = "hidden";
      cakeSymbol.style.visibility = "hidden";
  
      // Tilføj event listeners til punkterne
      point1.addEventListener("click", () => toggleElements(point1, peaceSymbol));
      point2.addEventListener("click", () => toggleElements(point2, loveSymbol));
      point3.addEventListener("click", () => toggleElements(point3, cakeSymbol));
  
      // Tilføj event listeners til symbolerne for at skifte tilbage
      peaceSymbol.addEventListener("click", () => toggleElements(peaceSymbol, point1));
      loveSymbol.addEventListener("click", () => toggleElements(loveSymbol, point2));
      cakeSymbol.addEventListener("click", () => toggleElements(cakeSymbol, point3));
    }, 100);
  }
  
  // 3. Funktion til at vise/skjule elementer
  function toggleElements(hideElement, showElement) {
    if (!hideElement || !showElement) return;
    
    // Skjul det ene element
    hideElement.style.visibility = "hidden";
    
    // Vis det andet element
    showElement.style.visibility = "visible";
  }
  