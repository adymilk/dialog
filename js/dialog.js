var dialog = function (element, newconfig) {

    if (!element) {
        return;
    }

    var config = {
        document_hight: $(document).height(),
        document_width: $(window).width(),
        btn_close: '.btn_close',
        dismiss_style: 'fadeOut',
    };

    // 关闭 Dialog
    $(config.btn_close).click(function () {
        if (config.dismiss_style === 'fadeOut'){
            $(element).fadeOut();
        }else{
            $(element).hide();
        }
    });
    $(element).css({
        height: config.document_hight,
        width: config.document_width,
    });


    this.extend = function(con, ncon) {
        for (var obj in ncon) {
            con[obj] = ncon[obj];
        }
        return con;
    }

    this.extend(config, newconfig);



    $('.dialog_wrapper').show();

};

var Dialog = function (e,c) {
    return new dialog(e,c);
};
