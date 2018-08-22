## 前端 Dialog 插件 

`注意` 插件依赖 `jquery` , 所以使用 `Dialog.js ` 之前引入需要 `jquery.js`

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
            btn_close: '.btn_close',
            dismiss_style: 'fadeOut',
        };
```
#### 使用例子请看 Doalog_demo.html
