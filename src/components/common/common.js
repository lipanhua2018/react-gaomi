let commonmethods = {
        switchClassname: (parent, classname) => {
            let node = [];
            let childlist = parent.children;
            for (const el of childlist) {
                node.push(el)
            }
            // console.log(listNav, node)
            node.map((item, index) => {
                item.onclick = () => {
                    // console.log(index)
                    for (let el of childlist) {
                        el.classList.remove(classname)
                    }
                    item.classList.add(classname);                
                }
                return index
            })
        },
        goTop: () => {
            console.log('返回顶部')       
            let Time1 = setInterval(function(){
                let topH = document.body.scrollTop||document.documentElement.scrollTop;
                //ceil向上取整，floor向下取整
                let speed = Math.ceil(topH/4);
                // let speed = 30;
                //做一个变换速度的回到顶部效果
                document.body.scrollTop = document.documentElement.scrollTop = topH - speed;
                if(topH <= 0){
                    //清除定时器
                    clearInterval(Time1);
                }
            },100)
        }
}

export default commonmethods;