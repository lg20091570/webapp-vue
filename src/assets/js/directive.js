import Vue from 'vue'
//自定义指令

/**
 * 这能输入数字 <input v-model="num" v-number />
 */
Vue.directive('number',{
  bind:function(el,binding,vnode){//被绑定
    el.focus();
    el.onkeyup=function(){
      el.value = el.value.replace(/[^\d.]/g,"");
      //必须保证第一个为数字而不是.
      el.value = el.value.replace(/^\./g,"");
      //保证只有出现一个.而没有多个.
      el.value = el.value.replace(/\.{2,}/g,".");
      //保证.只出现一次，而不能出现两次以上
      el.value = el.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
      if('' != el.value.replace(/\d{1,}\.{0,1}\d{0,}/,''))
      {
        el.value = el.value.match(/\d{1,}\.{0,1}\d{0,}/) == null ? '' :el.value.match(/\d{1,}\.{0,1}\d{0,}/);
      }
    }
  },
  inserted:function(){//绑定到节点

  },
  update:function(){//组件更新

  },
  componentUpdated:function(){//组件更新完成

  },
  unbind:function(){//解绑

  }

})
