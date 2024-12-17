let selectedSeat = null;
const pricePerSeat = 50;  // Price per seat, modify as needed

function selectSeat(seatNumber) {
    selectedSeat = seatNumber;
    document.getElementById("selected-seat").innerText = selectedSeat;
    document.getElementById("price").innerText = pricePerSeat;

    // Enable checkout button
    document.getElementById("checkout-btn").disabled = false;
}

function checkout() {
    if (selectedSeat !== null) {
        alert(`Seat ${selectedSeat} has been booked for $${pricePerSeat}`);
    } else {
        alert("Please select a seat first.");
    }
}
