//模拟接口数据
export function getInfoList() {
     return[
        {
            title: "接入ito设备",
            num: Math.floor(Math.random()*5000 + 1000),
            id: 1,
            unit: "台"
        },
        {
            title: "未处理治安事件",
            num: Math.floor(Math.random()*5000 + 1000),
            id: 2,
            unit: "起"
        },
        {
            title: "城市电力损耗",
            num:Math.floor(Math.random()*5000 + 1000),
            id: 3,
            unit: "兆瓦时"
        },
        {
            title: "今日核酸采集量",
            num: Math.floor(Math.random()*5000 + 1000),
            id: 4,
            unit: "人"
        },
     ]
}


function getTime() {
     //生成随机时间的数字
     let hour = Math.floor(Math.random()*25);

     let min =  Math.floor(Math.random()*61);

     let sec =  Math.floor(Math.random()*61);

     if(hour < 10) {
         hour = "0" + hour
     }

     if(min < 10) {
        min = "0" + min
    }
    if(sec< 10) {
        sec = "0" + sec
    }

    return hour+":"+min+":" + sec
}

function getPosition() {
    let arr = [];

    arr[0] = Math.random() * (-26) + 13;
    arr[1] = Math.random() * (-22) + 11;


    return arr
}


export function getEventList() {
     let num = Math.floor(Math.random() * 4 + 3);
     let arr = [];
     
     let eventArr = [
        "ele","fire","police"
     ]
     for(let i = 0; i < num ; i++) {
         let eventIndex = Math.floor(Math.random()*3);
         let obj = {
            name:eventArr[eventIndex],
            time:getTime(),
            position:getPosition(),
            id:i,
            chooseFlag:false
         }

         arr.push(obj)
     }


     return arr
}




