function Converter(valNum) {
        if (converter.taka.value <= 0)
            window.alert("No value added!");
        else {

            if (document.getElementById("inputCurrency").value == 'bdt') {
                
                document.getElementById("BDT").value = (valNum / 1.00).toFixed(2);
                document.getElementById("USD").value = (valNum / 84.73).toFixed(2);
                document.getElementById("CAD").value = (valNum / 62.42).toFixed(2);
                document.getElementById("EUR").value = (valNum / 95.11).toFixed(2);
                document.getElementById("AUD").value = (valNum / 58.49).toFixed(2);
                document.getElementById("GBP").value = (valNum / 104.78).toFixed(2);
            }
            
            else if (document.getElementById("inputCurrency").value == 'usd') {
                
                document.getElementById("BDT").value = (valNum * 84.73).toFixed(2);
                document.getElementById("USD").value = (valNum * 1.00).toFixed(2);
                document.getElementById("CAD").value = (valNum * 1.36).toFixed(2);
                document.getElementById("EUR").value = (valNum * 0.89).toFixed(2);
                document.getElementById("AUD").value = (valNum * 1.45).toFixed(2);
                document.getElementById("GBP").value = (valNum * 0.81).toFixed(2);
            }
            
            else if (document.getElementById("inputCurrency").value == 'cad') {
                
                document.getElementById("BDT").value = (valNum * 62.42).toFixed(2);
                document.getElementById("USD").value = (valNum * 0.74).toFixed(2);
                document.getElementById("CAD").value = (valNum * 1.00).toFixed(2);
                document.getElementById("EUR").value = (valNum * 0.66).toFixed(2);
                document.getElementById("AUD").value = (valNum * 1.07).toFixed(2);
                document.getElementById("GBP").value = (valNum * 0.60).toFixed(2);
            }
            
            else if (document.getElementById("inputCurrency").value == 'eur') {
                
                document.getElementById("BDT").value = (valNum * 95.11).toFixed(2);
                document.getElementById("USD").value = (valNum * 1.12).toFixed(2);
                document.getElementById("CAD").value = (valNum * 1.52).toFixed(2);
                document.getElementById("EUR").value = (valNum * 1).toFixed(2);
                document.getElementById("AUD").value = (valNum * 1.63).toFixed(2);
                document.getElementById("GBP").value = (valNum * 0.91).toFixed(2);
            }
            
            else if (document.getElementById("inputCurrency").value == 'aud') {
                
                document.getElementById("BDT").value = (valNum * 58.49).toFixed(2);
                document.getElementById("USD").value = (valNum * 0.69).toFixed(2);
                document.getElementById("CAD").value = (valNum * 0.94).toFixed(2);
                document.getElementById("EUR").value = (valNum * 0.61).toFixed(2);
                document.getElementById("AUD").value = (valNum * 1).toFixed(2);
                document.getElementById("GBP").value = (valNum * 0.56).toFixed(2);
            }

            else if (document.getElementById("inputCurrency").value == 'gbp') {
                
                document.getElementById("BDT").value = (valNum * 104.78).toFixed(2);
                document.getElementById("USD").value = (valNum * 1.24).toFixed(2);
                document.getElementById("CAD").value = (valNum * 1.68).toFixed(2);
                document.getElementById("EUR").value = (valNum * 1.10).toFixed(2);
                document.getElementById("AUD").value = (valNum * 1.79).toFixed(2);
                document.getElementById("GBP").value = (valNum * 1).toFixed(2);
            }
            
            
        }
    }