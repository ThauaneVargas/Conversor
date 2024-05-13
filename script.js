function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var result = document.getElementById("result");
  
    if (fahrenheitInput.value !== "") {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5 / 9;
      result.innerHTML = fahrenheit + " Fahrenheit = " + celsius.toFixed(2) + " Celsius";
    } else {
      result.innerHTML = "Por favor, digite uma temperatura em Fahrenheit.";
    }
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var result = document.getElementById("result");
  
    if (celsiusInput.value !== "") {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9 / 5) + 32;
      result.innerHTML = celsius + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit";
    } else {
      result.innerHTML = "Por favor, digite uma temperatura em Celsius.";
    }
  }