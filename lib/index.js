export function randomId(){
	return parseInt(Math.random()*10000) + "_" + (new Date()).getTime()
}

export function randomColor(){
  return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
}

export function getTime(){
  return (new Date()).getTime();
}

export function dataFormat(date,fmt) { //author: meizz 
    var date = new Date(date);
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}