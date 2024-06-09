function priceCalculate() {
  var precio = 400000;
  var cantidad = 0;
  var precioSpan = document.querySelector("#precio-inicial");
  precioSpan.innerHTML = precio;
  console.log("hola");
  const adicion = document.querySelector("#plusle");
  const sustraccion = document.querySelector("#minum");
  const precioFinalSpan = document.querySelector("#valorTotal");
  adicion.addEventListener("click", function () {
    console.log("click");
    cantidad += 1;
    let precioFinal = precio * cantidad;
    console.log(precioFinal);
    precioFinalSpan.innerHTML = precioFinal;
  });
  sustraccion.addEventListener("click", function () {
    if (cantidad > 0) {
      console.log("click");
      cantidad -= 1;
      let precioFinal = precio * cantidad;
      console.log(precioFinal);
      precioFinalSpan.innerHTML = precioFinal;
    }
  });
}

/* <button onclick="
                let precio= document.querySelector('.precio-inicial').innerHTML
                let cantidad_final = document.querySelector('.cantidad')
                resultado = Number(cantidad_final.innerHTML)+1
                cantidad_final.innerHTML = resultado
                let aPago = document.querySelector('.valorTotal');
                aPago.innerHTML = resultado * precio;
                "
                >+</button>
                <button onclick="
                cantidad_final = document.querySelector('.cantidad')
                resultado = Number(cantidad_final.innerHTML)-1
                if (resultado < 0) resultado = 0;
                cantidad_final.innerHTML = resultado
                let precio2 = document.querySelector('.precio-inicial');
                let aPago = document.querySelector('.valorTotal');
                aPago.innerHTML = Number(resultado * precio2);
                "
                >-</button> */

priceCalculate();
