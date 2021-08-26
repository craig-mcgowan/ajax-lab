let weatherData
const $location = $('#location');
const $temp = $('#temp');
const $feel = $('#feel');
const $weatherType = $('#weather-type')
const $input = $('input[type="text"]')
$('form').on('submit', handleGetData);
function handleGetData(event) {
    event.preventDefault()
    //console.log('test')
    $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${$input.val()}&appid=cdcc5be4e4ba6747c67a1f80c71e4062&units=imperial`
    }).then(
        function(data) {
            //console.log(data);
            weatherData = data;
            render();
            
        },
        function(error){
            console.log('bad request', error);
        }
    )
    
}


function render() {
    const weatherText = weatherData.weather[0].main
    $location.text(`Weather for: ${weatherData.name}`)
    $temp.text(`Temperature: ${weatherData.main.temp}`);
    $feel.text(`Feels Like: ${weatherData.main.feels_like}`);
    $weatherType.text(`Weather: ${weatherText}`);
    $input.val("")
}

