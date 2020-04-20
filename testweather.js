$(document).ready(function(){
  $('#getWeatherData').click(function(){
    var zipcode = $('#zip').val();
    var key = '3aed9b1314cb6ed3b0bec11f5b6c7ee4'

    $.ajax({
      url:'https://api.openweathermap.org/data/2.5/weather',
      dataType:'json',
      type:'GET',
      data:{zip:zipcode, appid:key, units:'imperial'},


      success: function(data){
        var deg = '';
        $.each(data.weather,function(index, val){
          deg += '<p><b>'+data.name+'</b></p>'+data.main.temp+ '&deg;F '+' Description: '+ val.main+", "+val.description
        });
        $('#getWeather').html(deg);
      }
    })
    
  })
})
