var dialog = function(element, newconfig) {
    if (!element) {
        return;
    }
    $(element).show();

    let dialog_wrapper_width;
    if (navigator.userAgent.match(/(iPhone|Android.*Mobile)/) || navigator.userAgent.match(/MSIE [6,7,8,9]/)) {
        dialog_wrapper_width = '85%';
    }else {
        dialog_wrapper_width = "auto";
    }
    var config = {
        document_hight: $(document).height(),
        document_width: $(window).width(),
        btn_close: '.btn_close',
        dialog_wrapper_width: dialog_wrapper_width,
        dialog_wrapper_bg: '#fff',

    };
    this.extend = function(con, ncon) {
        for (var obj in ncon) {
            con[obj] = ncon[obj];
        }
        return con;
    }
    this.extend(config, newconfig);
    $(config.btn_close).click(function() {
        $(element).hide();
    });
    $(element).css({
        height: config.document_hight,
        width: config.document_width,
        'z-index': 9999,
        position: 'absolute',
        top: 0,
        left: 0,
        'background-color': 'rgba(0,0,0,0.5)',
    });
    $(element).find(".dialog_wrapper").css({
        width: config.dialog_wrapper_width,
        'background-color': config.dialog_wrapper_bg,
    });
    $(element).find('.dialog_wrapper').show();
};
var Dialog = function(e, c) {
    return new dialog(e, c);
};