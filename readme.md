<p align="center">
  <img src="https://raw.githubusercontent.com/adymilk/dialog/master/img/1.png" alt="" width=200>
</p>
<p align="center">
  <a href="https://travis-ci.org/adymilk/dialog">
    <img src="https://travis-ci.org/LeachZhou/blog.svg?branch=master" alt="">
  </a>
  <a href="https://github.com/adymilk/dialog/releases">
    <img src="https://img.shields.io/github/release/LeachZhou/blog.svg" alt="">
  </a>
  <a href="https://github.com/adymilk/dialog/blob/master/LICENSE">
     <img src="https://img.shields.io/github/license/LeachZhou/blog.svg" alt="">
  </a>
</p>

## Dialog 插件 一键生成网页模态框（dialog） 

> 一行代码搞定前端页面模态框，让 `new Dialog` 变得更`easy`

! [实例图](https://raw.githubusercontent.com/adymilk/dialog/master/img/1.png)

## [在线演示地址](https://adymilk.github.io/dialog/)


`注意` 插件依赖 `jquery` , 所以使用 `Dialog.js ` 之前引入需要 `jquery.js`

```
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
// 插件依赖JQuery 

<script src="https://raw.githubusercontent.com/adymilk/dialog/master/js/dialog.js"></script>
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/adymilk/dialog/master/css/dialog.css">
```


## 使用方法

> html 部分
```html
// 对话框内容
<div class="dialog_container">
    <div class="dialog_wrapper">
        <div class="dialog_item">
            <div class="btn_close">×</div>
            <h2>查询附近门店地址</h2>               
        </div>
        <form>
            <div class="dialog_item">
                <i class="icon-camera-retro"></i><input type="text" name="tel" placeholder="手机号">
            </div>
            <div class="dialog_item">
                <button>门店地址发手机</button>
            </div>
        </form>
    </div>
</div>
```

> js 部分


```javascript

Dialog('.dialog_container');
```

默认配置项，你可以在使用的时候自定义传入参数
```JavaScript
    var config = {
        btn_close: '.btn_close',//关闭按钮的类名
        dismiss_style: 'fadeOut',//对话框退出样式
        dialog_wrapper_width: '420px',//对话框的宽
        dialog_wrapper_bg: '#fff',//对话框背景颜色
    };
```

