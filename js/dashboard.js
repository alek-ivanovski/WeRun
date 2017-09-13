/**
 * Created by Alek Ivanovski on 9/13/2017.
 */

$(".add_comment1").click(function(){
    var comment_new = $(this).parent().parent();
    var comment = $('#form1').val();
    if (comment != ""){
        $(comment_new).prev().append("<div class='media'>"+
            "<div class='media-left media-top'>"+
            "<img src='img/alek.jpg' class='media-object profile_picture img-circle'>"+
            "</div>"+
            "<div class='media-body'>"+
            "<h5 class='media-heading profile_name'>Alek Ivanovski</h5>"+
            "<p class='comment'>"+ comment +"</p>"+
            "</div>"+
            "</div>");
        $('.form-control').val("");
    }
});

$(".add_comment2").click(function(){
    var comment_new = $(this).parent().parent();
    var comment = $('#form2').val();
    if (comment != ""){
        $(comment_new).prev().append("<div class='media'>"+
            "<div class='media-left media-top'>"+
            "<img src='img/alek.jpg' class='media-object profile_picture img-circle'>"+
            "</div>"+
            "<div class='media-body'>"+
            "<h5 class='media-heading profile_name'>Alek Ivanovski</h5>"+
            "<p class='comment'>"+ comment +"</p>"+
            "</div>"+
            "</div>");
        $('.form-control').val("");
    }
});