let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const results = document.getElementById("results");
    const id1 = document.getElementById("id1");
    const id2 = document.getElementById("id2");
    const id3 = document.getElementById("id3");
    
    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a vaild ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a vaild ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>BMI =  ${bmi} kg/m <sup>2</sup></span>`;
        
        id1.style.display = "none";
        id2.style.display = "none";
        id3.style.display = "none";

        if (bmi <= 18) {
            id1.innerText = "you are underweight";
            id1.style.display = "block"
            id1.style.color = "darkred"
            id1.style.textTransform = "capitalize"
        } else if (bmi >= 18 && bmi <= 24) {
            id2.innerText = "you are healthy";
            id2.style.display = "block";
            id2.style.color = "green"
            id2.style.textTransform = "capitalize"
        } else if (bmi >= 25 && bmi <= 30) {
            id3.innerText = "you are overweight";
            id3.style.display = "block";
            id3.style.color = "yellow"
            id3.style.textTransform = "capitalize"
        }
        
    }

})

setInterval(() => {
    const Time = document.getElementById("timeShow");
    const timeData = new Date();
    const data = Time.innerHTML = timeData;
    parseInt(timeShow.innerHTML = data.toLocaleTimeString());
}, 1000)