//根据id获取对应的元素
function my$(id) {
    return document.getElementById(id);
}
/*
* element----要移动的元素
* target----移动的目标
* 
* */

function animate(element,target) {
    clearInterval(element.setId);//清理计时器
    element.setId=setInterval(function () {
        //获取元素的当前位置
        var current=element.offsetLeft;
        //每次移动的步数
        var step=(target-current)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        current=current+step;//最新的当前位置=当前位置+移动的步数
        element.style.left=current+"px";
        if(current==target){
            clearInterval(element.setId);
        }
        console.log("current:"+current+",target:"+target+",step:"+step);
    },20);
}

