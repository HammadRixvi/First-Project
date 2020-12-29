var body = document.getElementsByTagName("body")[0];
body.style.backgroundImage = "url(../image./image.jpg)"
var headingDiv = document.createElement("div");
body.appendChild(headingDiv);
headingDiv.setAttribute("id","headingDiv");
headingDiv.style.width = "200px";
headingDiv.style.height = "50px";
headingDiv.style.textAlign = "center";
headingDiv.style.backgroundColor = "black";
headingDiv.style.color = "white";
headingDiv.style.fontSize = "30px";
headingDiv.style.margin = "auto";
var peratext = document.createElement("p");
peratext.setAttribute("id","peraid");
peratext.style.padding = "7px";
var text = document.createTextNode("HEADING");
peratext.appendChild(text);
headingDiv.appendChild(peratext);
//***********************************************/

var imgdiv = document.createElement("div");
body.appendChild(imgdiv);
imgdiv.setAttribute("id","imgdiv");
var img = document.createElement("img");
img.setAttribute("src","../image./image1.jpg");
img.style.width = "1000px";
img.style.height = "500px";
imgdiv.appendChild(img);
imgdiv.style.marginTop = "20px";
imgdiv.style.marginLeft = "100px";

//***********************************************/

var tbldiv = document.createElement("div");
tbldiv.style.marginLeft = "530px";
tbldiv.style.marginTop = "30px";
body.appendChild(tbldiv);
tbldiv.setAttribute("id","tbldiv");
var tbl = document.createElement("table");
tbldiv.appendChild(tbl);
tbl.setAttribute("border","2");
tbl.setAttribute("bgcolor","lightgreen");
var tblrow1 = document.createElement("tr");
tbl.appendChild(tblrow1);
var tblhed1 = document.createElement("th");
tblrow1.appendChild(tblhed1);
var tblh1 = document.createTextNode("HEADING 1");
tblhed1.appendChild(tblh1);
var tblhed2 = document.createElement("th");
tblrow1.appendChild(tblhed2);
var tblh2 = document.createTextNode("HEADING 2");
tblhed2.appendChild(tblh2);
var tblrow2 = document.createElement("tr");
tbl.appendChild(tblrow2);
var tbldat1 = document.createElement("td");
tblrow2.appendChild(tbldat1);
var tbld1 = document.createTextNode("DATA 1");
tbldat1.appendChild(tbld1);
var tbldat2 = document.createElement("td");
tblrow2.appendChild(tbldat2);
var tbld2 = document.createTextNode("DATA 2");
tbldat2.appendChild(tbld2);


//***********************************************/


var anidiv = document.createElement("div");
body.appendChild(anidiv);
anidiv.style.width = "1260px";
anidiv.style.backgroundColor = "black";
anidiv.style.height = "200px";
anidiv.style.marginTop = "30px";
var div1 = document.createElement("div");
anidiv.appendChild(div1);
div1.style.backgroundColor = "red";
div1.style.width = "50px";
div1.style.height = "50px";
div1.style.position = "absolute";
div1.style.marginTop = "75px";
var div2 = document.createElement("div");
anidiv.appendChild(div2);
div2.style.backgroundColor = "green";
div2.style.width = "50px";
div2.style.height = "50px";
div2.style.position = "absolute";
div2.style.marginLeft = "1210px";
div2.style.marginTop = "75px";

//***********************************************/


var btndiv = document.createElement("div");
body.appendChild(btndiv);
btndiv.style.marginTop = "10px";
btndiv.style.marginLeft = "600px";
var btn = document.createElement("button");
btndiv.appendChild(btn);
btn.style.width = "70px"
btn.style.height = "50px"
btn.style.backgroundColor = "black"
btn.style.color = "white"
btn.style.fontSize = "20px";
var btntext = document.createTextNode("PLAY");
btn.appendChild(btntext);
btn.setAttribute("onClick","playbtn()")


//***********************************************/

function playbtn()
{
    div1.style.animationName = "ani1";
    div1.style.animationDuration = "3s";
    div1.style.animationTimingFunction = "linear";
    div1.style.animationDirection = "alternate";
    div1.style.animationIterationCount = "infinite";
    div2.style.animationName = "ani2";
    div2.style.animationDuration = "3s";
    div2.style.animationTimingFunction = "linear";
    div2.style.animationDirection = "alternate";
    div2.style.animationIterationCount = "infinite";
}

