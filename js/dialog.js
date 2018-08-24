var dialog = function (element, newconfig) {

    if (!element) {
        return;
    }

    $(element).show();

    var config = {
        document_hight: $(document).height(),
        document_width: $(window).width(),
        btn_close: '.btn_close',//关闭按钮的类名
        dialog_wrapper_width: '420px',//对话框的宽
        dialog_wrapper_bg: '#fff',//对话框背景颜色
    };

    this.extend = function(con, ncon) {
        for (var obj in ncon) {
            con[obj] = ncon[obj];
        }
        return con;
    }
    this.extend(config, newconfig);


    // 关闭 Dialog
    $(config.btn_close).click(function () {
        $(element).hide();
    });

    $(element).css({
        height: config.document_hight,
        width: config.document_width,
    });


    $('.dialog_wrapper').css({
        width: config.dialog_wrapper_width,
        'background-color': config.dialog_wrapper_bg,
    });

    $('.dialog_wrapper').show();

};

var Dialog = function (e,c) {
    return new dialog(e,c);
};