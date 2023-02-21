<template>
  <div class="">

  </div>
</template>
<script>
export default {
  setup() {
    /**
     * @desc 函数防抖
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param immediate true 表立即执行，false 表非立即执行
     */
    function debounce(func, wait, immediate) {
      let timeout; //创建一个标记用来存放定时器的返回值
      return function () {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout); //每当用户输入时把前一个setTimeout clear()掉
        if (immediate) {  //判断是否立即执行
          var callNow = !timeout;
          timeout = setTimeout(() => {
            timeout = null;
          }, wait);
          if (callNow) func.apply(context, args);
        } else {
          timeout = setTimeout(() => {
            //然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
            func.apply(this, arguments);
          }, wait);
        }
      };
    }
    function sayHi() {
      console.log("防抖成功");
    }
    var inp = document.getElementById("inp");
    inp.addEventListener("input", debounce(sayHi, 2000, false)); //防抖
  },
}
</script>
<style scoped>

</style>