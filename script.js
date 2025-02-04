//your JS code here. If required.
// Function to generate a promise that resolves after a random time (1-3 seconds)
function createPromise(index) {
    const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
    return new Promise(resolve => {
        setTimeout(() => resolve({ name: `Promise ${index}`, time: delay.toFixed(3) }), delay * 1000);
    });
}

// Getting reference to the output table
const outputTable = document.getElementById("output");

// Create three promises
const promises = [createPromise(1), createPromise(2), createPromise(3)];

// Using Promise.all() to wait for all promises to resolve
Promise.all(promises).then(results => {
    // Remove the "Loading..." row
    outputTable.innerHTML = "";

    let maxTime = 0;

    results.forEach(result => {
        maxTime = Math.max(maxTime, parseFloat(result.time));
        outputTable.innerHTML += `
            <tr>
                <td>${result.name}</td>
                <td>${result.time} s</td>
            </tr>
        `;
    });

    // Append the Total Row
    outputTable.innerHTML += `
        <tr>
            <td><strong>Total</strong></td>
            <td><strong>${maxTime.toFixed(3)} s</strong></td>
        </tr>
    `;
});
