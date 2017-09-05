function menu1Request() {
    $.ajax({
        type: "GET",
        url: "menu1",
        success: function (data) {
            document.getElementById('responseDiv').innerHTML = data;
        },
        error: function (result) {
            location.replace('accessDenied');
        }
    });
}

function menu2Request() {
    $.ajax({
        type: "GET",
        url: "menu2",
        success: function (data) {
            document.getElementById('responseDiv').innerHTML = data;
        }
    });

}