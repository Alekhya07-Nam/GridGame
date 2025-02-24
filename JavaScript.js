var pageBody=document.getElementsByTagName("body")[0];
pageBody.style.display="flex";
pageBody.style.alignItems="center";
pageBody.style.flexDirection="columns";

var startButton=document.createElement('button');
startButton.textContent="Start";
startButton.style.height="50px";
startButton.style.width="150px";
startButton.style.top="+200px"
startButton.style.fontSize="25px";
startButton.style.borderRadius="40px";
startButton.style.background="linear-gradient(to right,#24B5CA,#54BF97,#79C671,#A6CF42)";
startButton.setAttribute("onClick","startClick()");
function startClick(){
    buttonDivisions.style.opacity="1";
    divisionTag.style.opacity="1";
    startButton.style.display="none";
}
pageBody.appendChild(startButton);

var divisionTag= document.createElement("div");
divisionTag.setAttribute("border", "2px solid black");
divisionTag.style.height= "400px";
divisionTag.style.width = "600px";
divisionTag.style.backgroundColor = "whitesmoke";
divisionTag.style.background='linear-gradient(#75d9e0,#FFADF5)';
divisionTag.style.display = "grid";
divisionTag.style.gridTemplateColumns="1fr 1fr 1fr 1fr";
divisionTag.gridTemplateRows="1fr 1fr 1fr 1fr";
divisionTag.style.opacity="0.1";
 
var gridItems = [];
for (var i = 1; i <= 16; i++) {
    var gridItem = document.createElement("div");
    gridItem.style.border = "1px solid black";
    gridItem.style.display = "flex";
    gridItem.style.justifyContent = "center";
    gridItem.style.alignItems = "center";
    var girdParent=gridItems[i];
    gridItem.setAttribute("onClick","parentClick(this)"); 
    divisionTag.appendChild(gridItem);
    gridItems.push(gridItem);
}

pageBody.appendChild(divisionTag);

var buttonDivisions=document.createElement("div");
buttonDivisions.setAttribute("border", "2px solid black");
buttonDivisions.style.height= "80px";
buttonDivisions.style.width = "600px";
// buttonDivisions.style.backgroundColor = "whitesmoke";
buttonDivisions.style.display="flex";
buttonDivisions.style.justifyContent="space-between";
buttonDivisions.style.alignItems="center";
buttonDivisions.style.opacity="0.1"
pageBody.appendChild(buttonDivisions);

var leftButton=document.createElement("button");
leftButton.textContent="Left";
leftButton.style.width="20%";
leftButton.style.height="60%";
leftButton.style.fontSize="25px"
leftButton.style.borderRadius="20px";
leftButton.style.background="linear-gradient(to right,#24B5CA,#54BF97,#79C671,#A6CF42)";


var topButton=document.createElement("button");
topButton.textContent="Top";
topButton.style.width="20%";
topButton.style.height="60%";
topButton.style.fontSize="25px"
topButton.style.borderRadius="20px";
topButton.style.background="linear-gradient(to right,#24B5CA,#54BF97,#79C671,#A6CF42)";



var rightButton=document.createElement("button");
rightButton.textContent="Right";
rightButton.style.width="20%";
rightButton.style.height="60%";
rightButton.style.fontSize="25px";
rightButton.style.borderRadius="20px";
rightButton.style.background="linear-gradient(to right,#24B5CA,#54BF97,#79C671,#A6CF42)";


var bottomButton=document.createElement("button");
bottomButton.textContent="Bottom";
bottomButton.style.width="20%";
bottomButton.style.height="60%";
bottomButton.style.fontSize="25px"
bottomButton.style.borderRadius="20px";
bottomButton.style.background="linear-gradient(to right,#24B5CA,#54BF97,#79C671,#A6CF42)";


var innerDiv = document.createElement("div");
innerDiv.style.width="90%";
innerDiv.style.height="90%";
innerDiv.style.background="linear-gradient(to right ,green,#006101,green)";
innerDiv.style.borderRadius="15px";
innerDiv.style.boxShadow="2px 2px 4px violet"


var firstGridItem = divisionTag.children[0];
firstGridItem.appendChild(innerDiv);



leftButton.setAttribute("onClick","leftClick()");
function leftClick(){
    leftButton.style.boxShadow="0px 0px 2px 2px violet";
    var parent = innerDiv.parentElement;
            var currentIndex = gridItems.indexOf(parent);
            if (currentIndex % 4 !== 0) {
                gridItems[currentIndex - 1].appendChild(innerDiv);
            }
}
buttonDivisions.appendChild(leftButton);

topButton.setAttribute("onClick","topClick()");
function topClick(){
    topButton.style.boxShadow="0px 0px 2px 2px violet";
    var parent = innerDiv.parentElement;
            var currentIndex = gridItems.indexOf(parent);
            if (currentIndex >= 4) {
                gridItems[currentIndex - 4].appendChild(innerDiv);
            }
    // console.log("hai");

}
buttonDivisions.appendChild(topButton);

rightButton.setAttribute("onClick","rightClick()");
function rightClick(){
    rightButton.style.boxShadow="0px 0px 2px 2px violet";
    var parent = innerDiv.parentElement;
            var currentIndex = gridItems.indexOf(parent);
            if (currentIndex % 4 !== 3) {
                gridItems[currentIndex + 1].appendChild(innerDiv);
            }
}
buttonDivisions.appendChild(rightButton);

bottomButton.setAttribute("onClick","bottomClick()");
function bottomClick(){
    bottomButton.style.boxShadow="0px 0px 2px 2px violet";
    var parent = innerDiv.parentElement;
            var currentIndex = gridItems.indexOf(parent);
            if (currentIndex < 12) {
                gridItems[currentIndex + 4].appendChild(innerDiv);
            }
}
buttonDivisions.appendChild(bottomButton);

function parentClick(girdParent){
    girdParent.appendChild(innerDiv);
    console.log("hai")
}

startButton.setAttribute("onClick","startClick()");