$(document).ready(function() {
    wrap_img_with_fancybox();
});

function wrap_img_with_fancybox() {
    var img_list = $("img");
    for (var i = 0; i < img_list.length; i++) {
        var img = img_list[i];
        var img_parent = img.parentNode;
        if (img_parent.tagName == "A") {
            continue;
        }
        var img_src = img.src;
        var img_alt = img.alt;
        var img_title = img.title;
        var img_class = img.className;
        var img_style = img.style.cssText;
        var img_width = img.width;
        var img_height = img.height;
        var img_html = "<a href='" + img_src + "' data-fancybox='images' data-caption='" + img_alt + "'><img src='" + img_src + "' alt='" + img_alt + "' title='" + img_title + "' class='" + img_class + "' style='" + img_style + "' width='" + img_width + "' height='" + img_height + "'></a>";
        img.outerHTML = img_html;
    }
}