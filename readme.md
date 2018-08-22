## 前端 Dialog 插件 

`注意` 插件依赖 `jquery` , 所以使用 `Dialog.js ` 之前引入需要 `jquery.js`

这是 `jquery ` CDN
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>

## 文档
首先引入 `dialog.css` 、`jquery.js` 和 `dialog.js`

```html
<div class="dialog_container">
    <div class="dialog_wrapper">
        <div class="dialog_item">
            <h1>测试dialog</h1>
        </div>
    </div>
</div>
```

```javascript
Dialog('.dialog_container');
```

默认配置项，你可以在使用的时候自定义传入参数
```JavaScript
    var config = {
        document_hight: $(document).height(),
        document_width: $(window).width(),
        btn_close: '.btn_close',//关闭按钮的类名
        dismiss_style: 'fadeOut',//对话框退出样式
        dialog_wrapper_width: '420px',//对话框的宽
        dialog_wrapper_bg: '#fff',//对话框背景颜色
    };
```

基本使用
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="./css/dialog.css">
</head>
<body>

<div class="dialog_container">
    <div class="dialog_wrapper">
        <div class="dialog_item">
            <div class="btn_close">x</div>
            <h1>测试数据</h1>
        </div>
    </div>
</div>

<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="./js/dialog.js"></script>

<script>
    Dialog('.dialog_container');
</script>
</body>
</html>
```
#### 使用例子请看 Doalog_demo.html
