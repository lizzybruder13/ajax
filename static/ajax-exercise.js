"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    evt.preventDefault();

    $.get('/fortune', (response) => {
      let div_tag = $('#fortune-text');
      div_tag.html(response);
    } );
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info

    $.get(url, formData, (response) => {
      let div_tag = $('#weather-info');
      div_tag.text(response['forecast']);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    let formData = {"melon_type": $("melon-type-field").val(),
                    "qty": $("qty-field").val()};

    $.post('/order-melons.json', formData, (response) => {
      let div_tag = $('#order-status');
      div_tag.html(response['msg']);
    });
}

$("#order-form").on('submit', orderMelons);


