/**
 * Created by Martin on 9/13/2017.
 */
$(function () {

    $("#btn-add").on("click", function () {
        var name = $("#input-route").val();
        var date = $("#input-desired-date").val();
        var length = $("#input-length").val();
        var laps = $("#input-laps").val();
        var time = $("#input-desired-time").val();
        var desc = $("#input-description").val();
        if (name != "" && date != "" && length != "" && laps != "" && time != "") {
            var $li = $('<li class="next-training"><div class="row"><div class="col-xs-3"><img src="img/random_map.png" class="img-responsive"></div><div class="col-xs-4"><h3 class="rounte-name"></h3><h4>Length: <span class="route-length"></span></h4><h4>Number of laps: <span class="number-of-laps"></span></h4><h4>Desired time: <span class="route-time"></span>hours</h4><h4>Desired date: <span class="route-date"></span></h4></div><div class="col-xs-5" style="margin-top: 20px;"><small class="route-desc"></small></div></div></li>');
            $li.find(".rounte-name").text(name);
            $li.find(".route-date").text(date);
            $li.find(".route-length").text(length);
            $li.find(".number-of-laps").text(laps);
            $li.find(".route-time").text(time);
            $li.find(".route-desc").text(desc);
            $("#list-next-trainings").append($li);
            alert("Training added to Feature Trainings!")
        }
    });

});

