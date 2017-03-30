
var Toast = {}

Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'bottom',   // 默认显示位置
    duration: '2500'         // 持续时间
  }
  for (let property in options) {
    opt[property] = options[property] // 使用 options 的配置
  }
  Vue.prototype.$toast = (tips, type) => {
    if (type) {
      opt.defaultType = type         // 如果有传type，位置则设为该type
    }
    if (document.getElementsByClassName('vue-toast').length) {
      // 如果toast还在，则不再执行
      return
    }
    // 1、创建构造器，定义好提示信息的模板
    let ToastTpl = Vue.extend({
      template: `<div class="vue-toast">${tips}</div>`
    })
    // 2、创建实例，挂载到文档以后的地方
    let tpl = new ToastTpl().$mount().$el
    // 3、把创建的实例添加到body中
    document.body.appendChild(tpl)
    // 4、延迟2.5秒后移除该提示
    setTimeout(() => {
      document.body.removeChild(tpl)
    }, 5000)
  }
}

module.exports = Toast
