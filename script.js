console.log("Iniciando os cálculos...");

function calcular() {

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let Rx1 = document.getElementById("x1").value;
    let Rx2 = document.getElementById("x2").value;   

    delta = b * b - 4 * a * c;

		if (delta > 0) {
			Rx1 = ((-b + Math.sqrt(delta)) / (2 * a));
			Rx2 = ((-b + Math.sqrt(delta)) / (2 * a));
		} else {
			x1.innerHTML = ("Esta equação não possui raízes reais");
		}

        x1.innerHTML = Rx1.toFixed(4);
        x2.innerHTML = Rx2.toFixed(4);
        
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(delta);
    console.log(Rx1);
    console.log(Rx2);
	}


                      
        

    

    



    
    
