window.onload = function() {
  waterfall("main", "box");
};

function waterfall(parent,box){
    var allParent = document.getElementById(parent);
    var allBox = getByClass(allParent,box);
}

function(parent,clsName){
    var boxArr = [];
    allElements = parent.getElementsByTagName('*')
    for(var i =0;i<allElements.length;i++){
        if(allElements[i].className==clsName){
            boxArr.push(allElements[i]);
        }
    }
return boxArr;
}

function waterfall(parent, box) {
  var allBoxW = allBox[0].offsetWidth;
  var col = Math.floor(document.documentElement.clientWidth / allBoxW);
  allParent.style.cssText = "width:" + allBoxW * col + "px;margin:0 auto";
}
function waterfall(parent, box) {
  var heightArr[];
  for (var i =0;i<allBox.length;i++){
      if(i<col){
          heightArr.push(allBox[i].offsetHeight);
      }else{
          var minHeight=Math.min.apply(null,heightArr);
          var index = getMinHeightIndex(heightArr,minHeight);
          allBox[i].style.position = "absolute";
          allBox[i].style.top=minHeight+"px";
          allBox[i].style.left=allBox[index].offsetLeft+"px";
          heightArr[index]+=allBox[i].offsetHeight;
      }
  }
}

function getMinHeightIndex(arr,val){
    for (var i in arr){
        if(arr[i]===val){
            return i;        }
    }
}
function checkScrollSilde() {
  var allParent = document.getElementById("main");
  var allBox = getByClass(allParent, "Box");
  var lastBoxHeight =
    allBox[allBox.length - 1].offsetTop +
    Math.floor(allBox[allBox.length - 1].offsetHeight / 2);
  var scrollTop =
    document.body.scrollTop || document.documentElement.clientHeight;
  return lastBoxHeight < scrollTop + height ? true : false;
}
window.onload = function() {
  waterfall("main", "box");
  var dataInt = {
    data: [
      { src: "相片/IMG_0006.JPG" },
      { src: "相片/DSC_0016.JPG" },
      { src: "相片/DSC_0020.JPG" },
      { src: "相片/DSC_0021.JPG" },
      { src: "相片/DSC_0023.JPG" },
      { src: "相片/DSC_0046.JPG" },
      { src: "相片/DSC_0025.JPG" },
      { src: "相片/DSC_0026.JPG" },
      { src: "相片/DSC_0064.JPG" },
      { src: "相片/DSC_0069.JPG" },
      { src: "相片/DSC_0081.JPG" },
      { src: "相片/DSC_0121.JPG" },
      { src: "相片/IMG_0009.JPG" },
      { src: "相片/IMG_0014.JPG" },
      { src: "相片/IMG_0016.JPG" },
      { src: "相片/IMG_0019.JPG" },
      { src: "相片/IMG_0022.JPG" },
      { src: "相片/IMG_0031.JPG" }
      
    ]
  };
  window.onscroll = function() {
    if (checkScrollSlide) {
      //把數據渲染到頁面尾端
      var allParent = document.getElementById("main");
      for (var i = 0; i < dataInt.data.length; i++) {
        var allBox = document.createElement("div");
        allBox.className = "box";
        allParent.appendChild(allBox);
        var allPic = document.createElement("div");
        allPic.className = "pic";
        allBox.appendChild(allPic);
        var allImg = document.createElement("img");
        allImg.src = "相片/" + dataInt.data[i].src;
        allPic.appendChild(allImg);
      }
      waterfall("main", "box");
    }
    checkScrollSlide();
  };
};

