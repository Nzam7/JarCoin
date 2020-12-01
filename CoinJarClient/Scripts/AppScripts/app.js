var serviceUrl = 'https://localhost:44334/api/CoinJar';

$(document).ready(function () {
    GetTotalAmount();
});

function GetTotalAmount() {
   
    $.ajax({
        async: false,
        type: 'get',
        url: serviceUrl,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var data = response;
            $("#amount").html(data);
        },
        failure: function (response) {
            alert("Failure");
        },
        error: function (xhr) {
            console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + '  Response Text:' + xhr.responseText);
            var message;
            var statusErrorMap = {
                '400': "Server understood the request, but request content was invalid.",
                '401': "Unauthorized access.",
                '403': "Forbidden resource can't be accessed.",
                '500': "Internal server error.",
                '503': "Service unavailable."
            };
            if (xhr.status) {
                message = statusErrorMap[xhr.status];
                if (!message) {
                    message = "Unknown Error \n.";
                }
            } else if (exception === 'parsererror') {
                message = "Error.\nParsing JSON Request failed.";
            } else if (exception === 'timeout') {
                message = "Request Time out.";
            } else if (exception === 'abort') {
                message = "Request was aborted by the server";
            } else {
                message = "Unknown Error \n.";
            }
            if (message == undefined) {
                var message = "Unknown Error "
                 showToaster('error', 'Error', message);
            }
           
        } 
    });
}

function AddCoin(coinID) {
    const JarVolume = 42;
    var data;
    var amount;
    var volume;

    switch (coinID) {
        case 1:
            amount = 0.01;
            volume = 0.0146492491;
            break;
        case 2:
            amount = 0.05;
            volume = 0.0232971854;
            break;
        case 3:
            amount = 0.10;
            volume = 0.0115004873;
            break;
        case 4:
            amount = 0.25;
            volume = 0.0232971854;
            break;
        case 5:
            amount = 0.50;
            volume = 0.05349987044;
            break;
        case 6:
            amount = 1;
            volume = 0.03727184466;
            break;
    }
    $.ajax({
        async: false,
        type: 'post',
        url: serviceUrl,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            Amount: amount,
            Volume: volume,
        }),
        success: function (response) {
            var data = response;
            GetTotalAmount();
        },
        failure: function (response) {
            alert("Failure");
        },
        error: function (xhr) {
            console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + '  Response Text:' + xhr.responseText);
            var message;
            var statusErrorMap = {
                '400': "Server understood the request, but request content was invalid.",
                '401': "Unauthorized access.",
                '403': "Forbidden resource can't be accessed.",
                '500': "Internal server error.",
                '503': "Service unavailable."
            };
            if (xhr.status) {
                message = statusErrorMap[xhr.status];
                if (!message) {
                    message = "Unknown Error \n.";
                }
            } else if (exception === 'parsererror') {
                message = "Error.\nParsing JSON Request failed.";
            } else if (exception === 'timeout') {
                message = "Request Time out.";
            } else if (exception === 'abort') {
                message = "Request was aborted by the server";
            } else {
                message = "Unknown Error \n.";
            }
            if (message == undefined) {
                var message = "Unknown Error "
                showToaster('error', 'Error', message);
            }

        }

    });
    //$.ajax({
    //    async: false,
    //    type: 'put',
    //    url: serviceUrl,
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //       data = response;
           
    //    },
    //    failure: function (response) {
    //        alert("Failure");
    //    },
    //    error: function (xhr) {
    //        console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + '  Response Text:' + xhr.responseText);
    //        var message;
    //        var statusErrorMap = {
    //            '400': "Server understood the request, but request content was invalid.",
    //            '401': "Unauthorized access.",
    //            '403': "Forbidden resource can't be accessed.",
    //            '500': "Internal server error.",
    //            '503': "Service unavailable."
    //        };
    //        if (xhr.status) {
    //            message = statusErrorMap[xhr.status];
    //            if (!message) {
    //                message = "Unknown Error \n.";
    //            }
    //        } else if (exception === 'parsererror') {
    //            message = "Error.\nParsing JSON Request failed.";
    //        } else if (exception === 'timeout') {
    //            message = "Request Time out.";
    //        } else if (exception === 'abort') {
    //            message = "Request was aborted by the server";
    //        } else {
    //            message = "Unknown Error \n.";
    //        }
    //        if (message == undefined) {
    //            var message = "Unknown Error "
    //            showToaster('error', 'Error', message);
    //        }

    //    }

    //});
    //var NewJarVolume = data + volume;

    //if (NewJarVolume > JarVolume) {
       
    //} else {
      
    //}

   

}

function ResetJar() {
    $.ajax({
        async: false,
        type: 'delete',
        url: serviceUrl,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var data = response;
            GetTotalAmount();
        },
        failure: function (response) {
            alert("Failure");
        },
        error: function (xhr) {
            console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + '  Response Text:' + xhr.responseText);
            var message;
            var statusErrorMap = {
                '400': "Server understood the request, but request content was invalid.",
                '401': "Unauthorized access.",
                '403': "Forbidden resource can't be accessed.",
                '500': "Internal server error.",
                '503': "Service unavailable."
            };
            if (xhr.status) {
                message = statusErrorMap[xhr.status];
                if (!message) {
                    message = "Unknown Error \n.";
                }
            } else if (exception === 'parsererror') {
                message = "Error.\nParsing JSON Request failed.";
            } else if (exception === 'timeout') {
                message = "Request Time out.";
            } else if (exception === 'abort') {
                message = "Request was aborted by the server";
            } else {
                message = "Unknown Error \n.";
            }
            if (message == undefined) {
                var message = "Unknown Error "
                showToaster('error', 'Error', message);
            }

        }
    });
}