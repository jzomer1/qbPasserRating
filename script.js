function calculate() {
    const ATT = document.getElementById('attempts').value;
    const CMP = document.getElementById('completions').value;
    const YDS = document.getElementById('passing-yards').value;
    const TD = document.getElementById('touchdowns').value;
    const INT = document.getElementById('interceptions').value;

    // component calculations
    let a = ((CMP/ATT)-.3)*5
    let b = ((YDS/ATT)-3)*0.25
    let c = (TD/ATT)*20
    let d = 2.375 - (INT/ATT)*25

    // if using NFL calculations
    if (capped.checked) {
        const variables = [a,b,c,d];

        for (let i = 0; i < variables.length; i++) {
            if (variables[i] >= 2.375) {
                variables[i] = 2.375;
                console.log(variables[i]);
            }
        }
        // reassign modified values to variables
        [a, b, c, d] = variables;
    }

    // final calculation
    let passerRating = ((a+b+c+d)/6)*100
    // round to one decimal place
    passerRating = passerRating.toFixed(1);

    const results = document.getElementById('results');
    results.innerText = passerRating;
}
