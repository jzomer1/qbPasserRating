function calculate() {
    const ATT = document.getElementById('attempts').value;
    const CMP = document.getElementById('completions').value;
    const YDS = document.getElementById('passing-yards').value;
    const TD = document.getElementById('touchdowns').value;
    const INT = document.getElementById('interceptions').value;

    let a = ((CMP/ATT)-.3)*5
    let b = ((YDS/ATT)-3)*0.25
    let c = (TD/ATT)*20
    let d = 2.375 - (INT/ATT)*25

    let passerRating = ((a+b+c+d)/6)*100

    const results = document.getElementById('results');
    results.innerText = passerRating;
}
