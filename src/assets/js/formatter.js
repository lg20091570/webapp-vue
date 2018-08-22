import Vue from 'vue'
/*牛单位格式化*/
Vue.filter('unit', function(val) {
  if(val==0){
   return "吨";
  }else if(val==1){
    return "kg";
  }else if(val==2){
    return "头";
  }else if(val==3){
    return "只";
  }else if(val==4){
    return "个";
  }
  return "";
});
/*金额格式化*/
Vue.filter('money', function(num) {
  //1.先去除空格,判断是否空值和非数
  if(num!=null && num>0){
    num = num + "";
    num = num.replace(/[ ]/g, ""); //去除空格
    if (num == "") {
      return;
    }
    if (isNaN(num)){
      return;
    }
    //2.针对是否有小数点，分情况处理
    var index = num.indexOf(".");
    if (index==-1) {//无小数点
      var reg = /(-?\d+)(\d{3})/;
      while (reg.test(num)) {
        num = num.replace(reg, "$1,$2");
      }
    } else {
      var intPart = num.substring(0, index);
      var pointPart = num.substring(index + 1, num.length);
      var reg = /(-?\d+)(\d{3})/;
      while (reg.test(intPart)) {
        intPart = intPart.replace(reg, "$1,$2");
      }
      num = intPart +"."+ pointPart;
    }
  }else{
    return '￥0.0';
  }
  return '￥'+num;
})
/*数字格式化*/
Vue.filter('num', function(num) {
  //1.先去除空格,判断是否空值和非数
  if(num!=null && num>0){
    num = num + "";
    num = num.replace(/[ ]/g, ""); //去除空格
    if (num == "") {
      return;
    }
    if (isNaN(num)){
      return;
    }
    //2.针对是否有小数点，分情况处理
    var index = num.indexOf(".");
    if (index==-1) {//无小数点
      var reg = /(-?\d+)(\d{3})/;
      while (reg.test(num)) {
        num = num.replace(reg, "$1,$2");
      }
    } else {
      var intPart = num.substring(0, index);
      var pointPart = num.substring(index + 1, num.length);
      var reg = /(-?\d+)(\d{3})/;
      while (reg.test(intPart)) {
        intPart = intPart.replace(reg, "$1,$2");
      }
      num = intPart +"."+ pointPart;
    }
  }else{
    return '0';
  }
  return num;
})

/*时间格式化*/
Vue.filter('date', function(date,type) {
  date=date==null || date==undefined || date=='null'?'':date;
  type=type==true?1:type;
  if(date!=''){
    var dtStr = date.substring(0,10);
    var dtArr=dtStr.split("-");
    var time =date.substring(10,20)
    var time1 =date.substring(10,16)
    if(type==1){
      return  dtArr[0]+"/"+dtArr[1]+"/"+dtArr[2];
    }else if(type==2){
      return  dtArr[1]+"/"+dtArr[2];
    }else if(type==3){
      return  dtArr[1]+"-"+dtArr[2];
    }else if(type==4){
      return  dtArr[0]+"-"+dtArr[1]+"-"+dtArr[2];
    }else if(type==5){
      return  dtArr[0]+"/"+dtArr[1]+"/"+dtArr[2]+time;
    }else if(type==6){
      return  dtArr[0]+"-"+dtArr[1]+"-"+dtArr[2]+time1;
    }else if(type==7){
      return time;
    }else if(type==8){
      if(dtArr[1].indexOf("0")==0){
        return  dtArr[0]+"年"+dtArr[1].substring(1)+"月"
      }else{
        return  dtArr[0]+"年"+dtArr[1]+"月"
      }
    }else if(type==9){
      return  dtArr[0]+"年"+dtArr[1]+"月"+dtArr[2]+"日"+time1;
    }else if(type==10){
      return  dtArr[0]+"."+dtArr[1]+"."+dtArr[2]+"."+time1;
    }else{
      return  dtArr[0]+"-"+dtArr[1]+"-"+dtArr[2]+time;
    }
  }
  return date;
})

Vue.filter('status', function(val) {
  if(val==0){
    return "拍卖中";
  }else if(val==1){
    return "已拍卖";
  }else if(val==-1){
    return "已撤销";
  }else if(val==-2){
    return "已流拍";
  }else if(val==-3){
    return "已下架";
  }
  return "";
});
