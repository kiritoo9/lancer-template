/*!
 * Lancer Template (https://github.com/kiritoo9/lancer-template)
 * Author kiritoo9 on github (https://github.com/kiritoo9)
 * Copyright 2023 
 */

const setTheme = theme => document.documentElement.className = theme;

$(function() {

    const window_height = $(window).height();
    const navbar_height = $(`#navbar`).height();
    const sidebar_width = $(`#sidebar`).width();
    const logo_width = $(`#col-logo`).width();
    $(`#wrapper`).css({"marginTop": navbar_height});
    $(`#sidebar`).css({
        "height": window_height-navbar_height,
    });
    $(`#content`).css({
        "minHeight": window_height-navbar_height,
        "marginLeft": sidebar_width + 40
    });

    var nav_icon_open = false;
    $(`.profile-box`).bind("click", function() {
        if (nav_icon_open) {
            nav_icon_open = false;
            $(`.nav-profile-box`).hide(300);
        } else {
            nav_icon_open = true;
            $(`.nav-profile-box`).show(300);
        }
    });

    for(let i = 0; i < $(`li.lc-item.withsub`).length; i++) {
        const v = $(`li.lc-item.withsub`)[i];
        const a = $(v).find("a.sub");
        if(a.length > 0) {
            if($(v).hasClass("active")) {
                $(a).html(a.html() + `<i class="fa fa-caret-down caret"></i>`);
                $(v).attr("data-expanded", true);
            } else {
                $(a).html(a.html() + `<i class="fa fa-caret-up caret"></i>`);
                $(v).attr("data-expanded", false);
            }
        }

        $(v, a).on("click", function() {
            let _expanded = false;
            let _el = null;
            let _elicon = null;
            if($(this).hasClass("sub")) {
                _expanded = $(this).parent().data("expanded");
                _el = $(this).parent();
                _elicon = $(this);
            } else {
                _expanded = $(this).data("expanded");
                _el = $(this);
                _elicon = $(this).find("a.sub");
            }
            console.log(_expanded, _el);

            if (_expanded) {
                $(_el).find("ul.lc-sub-items").hide(300);
                $(_elicon).find("i.caret").removeClass("fa-caret-down").addClass("fa-caret-up");
                _expanded=false;
            } else {
                $(_el).find("ul.lc-sub-items").show(300);
                $(_elicon).find("i.caret").removeClass("fa-caret-up").addClass("fa-caret-down");
                _expanded=true;
            }
            $(_el).data("expanded", _expanded);
        })
    }

})