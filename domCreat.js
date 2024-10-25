let divcontainer=document.getElementById("contain");
let container=document.createElement("div");

let image=document.createElement("img");
image.setAttribute("src","https://m.media-amazon.com/images/I/9118-EhUbPL._AC_UF894,1000_QL80_.jpg");
image.style.width="400px";
// image.style.height="80%";
// image.style.backgroundSize="fill"
let pTag=document.createElement("p");
pTag.textContent="This is carnation Flowers";
let spanT=document.createElement("span");
spanT.textContent="$ 2000";
spanT.style.display="block"
let btn=document.createElement("button")
btn.innerText="Buy Now"
btn.style.background="skyblue"
divcontainer.style.border="2px solid black"
divcontainer.style.display="inline-block"
container.append(image,pTag,spanT,btn);
divcontainer.append(container);
divcontainer.style.display="flex"
divcontainer.style.flexDirection="column"
divcontainer.style.alignItems="center"
divcontainer.style.background=`linear-gradient(skyblue,pink)`
container.style.display="inline-block"
container.style.border="2px solid black"
container.style.margin="20px"
container.style.textAlign="center"
container.style.padding="10px"
container.style.background="white"

document.body.appendChild(divcontainer);