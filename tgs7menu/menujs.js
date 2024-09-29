// Function to show the square calculator and hide the circle calculator
function showSquareCalculator() {
    document.getElementById("square-calculator").style.display = "block";
    document.getElementById("circle-calculator").style.display = "none";
}

// Function to show the circle calculator and hide the square calculator
function showCircleCalculator() {
    document.getElementById("square-calculator").style.display = "none";
    document.getElementById("circle-calculator").style.display = "block";
}

// Function to calculate the area of a square
function calculateSquareArea() {
    const side = document.getElementById("side").value;
    if (side && side > 0) {
        const area = side * side;
        document.getElementById("square-result").textContent = `Luas Persegi: ${area} cm²`;
    } else {
        document.getElementById("square-result").textContent = "Masukkan panjang sisi yang valid!";
    }
}

// Function to calculate the area of a circle
function calculateCircleArea() {
    const radius = document.getElementById("radius").value;
    if (radius && radius > 0) {
        const area = Math.PI * radius * radius;
        document.getElementById("circle-result").textContent = `Luas Lingkaran: ${area.toFixed(2)} cm²`;
    } else {
        document.getElementById("circle-result").textContent = "Masukkan panjang jari-jari yang valid!";
    }
}
