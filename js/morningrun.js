/**
 * Created by Alek Ivanovski on 9/14/2017.
 */

var speedChart;
var donutChart;
var elevChart;
$(document).ready(function(){

    speedChart = c3.generate({
        bindto: '#speed-chart',
        data: {
            columns: [
                ['Speed', 15.4, 14.2, 13.1, 14.93, 14.2, 11.3, 9.0, 10.8, 10.9, 12.8],
            ],
            types: {
                Speed: 'bar',
            },
            colors: {
                'Speed': '#ffda44',
            },
            size: {
                height: 280 //to set the height of the bar graph
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                },
            }
        }
    });

    elevChart = c3.generate({
        bindto: '#elev-chart',
        data: {
            columns: [
                ['Elevation', 40, 92, 178, 290, 402, 522, 645, 790, 889, 986],
            ],
            types: {
                Elevation: 'area',
            },
            colors: {
                'Elevation': '#ffda44',
            },
            size: {
                height: 280 //to set the height of the bar graph
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                },
            }
        }
    });

    $('#add_comment').click(function(){
        var comment = $('#comment_value').val();
        //alert(comment);
        //alert("here");
        if (comment != ""){
            //alert("Vlaga vo if");
            $('#append-here').append("<div class='media'>"+
                "<div class='media-left media-top'>"+
                "<img src='img/alek.jpg' class='media-object profile_picture img-circle'>"+
                "</div>"+
                "<div class='media-body'>"+
                "<h5 class='media-heading profile_name'>Alek Ivanovski</h5>"+
                "<p class='comment'>"+ comment +"</p>"+
                "</div>"+
                "</div>");
            $('#comment_value').val("");
        }
    });


    //donutChart = c3.generate({
    //    bindto: '#donut-chart',
    //    data: {
    //        columns: [
    //            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
    //            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
    //            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
    //        ],
    //        type : 'donut',
    //        onclick: function (d, i) { console.log("onclick", d, i); },
    //        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    //        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    //    },
    //    donut: {
    //        title: "Donut chart"
    //    }
    //});
});


