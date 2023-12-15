const startTime = performance.now();

window.onload = function (){
    let linksContainer = document.getElementById("id456");
    // console.log("links", linksContainer)

    let links = linksContainer.getElementsByTagName('a');
    // console.log(links)
    let url = document.location.href;
    // console.log(url)

    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    for (let i = 0; i < links.length; i++) {
        if (url === links[i].href) {

            links[i].className += " active";
        }

    const resTime = performance.now() - startTime;
    // console.log(resTime)
    let elem = document.getElementById("id345")
    // console.log(elem)
    elem.innerHTML = "Page load time in JS: " + (resTime / 1000).toFixed(4) + " seconds";
}
}
