
//获取轮播图各个图片
const imgArr = Array.from(document.querySelectorAll(".img-list li"))
//自动切换图片
const tChange = (function () {
    let timer = null;
    return function () {
        if (timer === null) {
            timer = setTimeout(function auto() {
                changeImg("next")
                timer = setTimeout(auto, 3000)
            }, 3000)
        } else {
            clearTimeout(timer);
            timer = null;
        }
    }
})()
tChange();
//点击箭头切换图片
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.onclick = function () {
    changeImg("prev")
}
next.onclick = function () {
    changeImg("next")
}

//鼠标悬浮暂停切换
const outer = document.getElementsByClassName("outer")[0]
outer.onmouseenter = function () {
    tChange();
}
outer.onmouseleave = function () {
    tChange();
}
/*  
    切换图片方法
    air:
        切换图片的方向
        next    
        prev    
*/
function changeImg(dir) {
    //获取当前显示的图片
    const current = document.querySelector(".img-list .current")
    //获取下一个图片
    let next;
    if (dir === "next") {
        next = current.nextElementSibling || imgArr[0];
    }
    else if (dir === "prev") {
        next = current.previousElementSibling || imgArr.at(-1);
    }
    //切换显示状态
    current.classList.remove("current");
    next.classList.add("current");
}

//获取小轮播图的各个图片
const imgArr2 = Array.from(document.querySelectorAll(".main1 .img-list li"));
const tChange2 = (function () {
    let timer2 = null;
    return function () {
        if (timer2 === null) {
            timer2 = setTimeout(function auto2() {
                changeImg2("next2")
                timer2 = setTimeout(auto2, 3000)
            }, 3000)
        } else {
            clearTimeout(timer2);
            timer2 = null;
        }
    }
})()
tChange2();
//点击箭头切换图片
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");

prev2.onclick = function () {
    changeImg2("prev2")
}
next2.onclick = function () {
    changeImg2("next2")
}
//鼠标悬浮暂停切换
const outer2 = document.getElementsByClassName("outer2")[0]
outer2.onmouseenter = function () {
    tChange2();
}
outer2.onmouseleave = function () {
    tChange2();
}
//导航点
const dots = Array.from(document.querySelectorAll(".dot a"))
document.addEventListener("click", function (event) {
    const index = dots.indexOf(event.target)
    if (index !== -1) {
        changeImg2(index)
    }
})
/*  
    切换图片方法
    air:
        切换图片的方向
        next    
        prev    
*/
function changeImg2(dir) {
    //获取当前显示的图片
    const current = document.querySelector(".main1 .img-list .current")
    //获取下一个图片
    let next2;
    if (dir === "next2") {
        next2 = current.nextElementSibling || imgArr2[0];
    }
    else if (dir === "prev2") {
        next2 = current.previousElementSibling || imgArr2.at(-1);
    } else if (typeof dir === "number") {
        next2 = imgArr2[dir]
    }

    //获取要显示图片的索引
    const index = imgArr2.indexOf(next2);
    //切换显示状态
    current.classList.remove("current");
    next2.classList.add("current");
    // 切换active
    const currentActive = document.querySelector(".active")
    currentActive.classList.remove("active")

    // 获取到当前要显示的小点
    dots[index].classList.add("active")
}




//长轮播图

const innerEle = document.getElementById("inner");
const itemEles = innerEle.children;
const itemLen = itemEles.length;
// setInterval(function(){
//     innerEle.style.left = innerEle.offsetLeft - 10 + "px";
// },100)

for(let i = 0;i < itemLen;i++){
    const cloneEle = itemEles[i].cloneNode("deep");
    innerEle.appendChild(cloneEle);
}
innerEle.style.width = innerEle.firstElementChild.offsetWidth*(itemLen*2) + 500 + "px";
let step = 10;
let offset = 0;

setInterval(function(){
    offset = innerEle.offsetLeft;
    if(offset ==-800){
        innerEle.style.left = -10 + "px";
    }else{
        innerEle.style.left = offset - step + "px";
    }
},100);