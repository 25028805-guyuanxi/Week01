const payments = [
    { petName: "Chester", amount: 50, status: "APPROVED" },
    { petName: "Mochi", amount: 80, status: "PENDING" },
    { petName: "Mira", amount: 40, status: "DECLINED" }
];

console.log("Mochi's payment status: " + payments[1].status);

for (let i = 0; i < payments.length; i++) {
    let currentPayment = payments[i];
    
    if (currentPayment.status === "APPROVED") {
        console.log("Pet-care service for " + currentPayment.petName + " confirmed");
    } else if (currentPayment.status === "PENDING") {
        console.log("Payment for " + currentPayment.petName + " is being processed");
    } else if (currentPayment.status === "DECLINED") {
        console.log("Payment for " + currentPayment.petName + " unsuccessful");
    }
}