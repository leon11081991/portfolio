// 自定義指令點擊非自身事件（空白處）
const clickOutSide = {
  beforeMount(el, binding) {
    function documentHandler(event) {
      console.log(event);

      // 判斷點擊的元素是否為自身，是自身，則返回
      if (el.contains(event.target)) return false;

      // 判斷指令中是否綁定了函式
      console.log("判斷指令中是否綁定了函式", binding);
      if (binding.value) {
        // 有綁定了函式，則執行函式
        console.log("有綁定了函式，則執行函式");
        binding.value(event);
      }
    }

    // 給當前元素綁定一個私有變數，方便在unmounted中解除事件監聽
    el.__vueClickOutSide__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  unmounted(el) {
    document.removeEventListener("click", el.__vueClickOutSide__);
    delete el.__vueClickOutSide__;
  },
};

export default clickOutSide;
