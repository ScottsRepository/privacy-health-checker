function startAudit() {
    const url = document.getElementById('targetUrl').value;
    if (!url) {
        alert("Please enter a URL to scan.");
        return;
    }

    const runBtn = document.getElementById('runBtn');
    const loader = document.getElementById('loader');
    const results = document.getElementById('results');

    // Reset UI
    runBtn.disabled = true;
    loader.classList.remove('hidden');
    results.classList.add('hidden');

    // Simulate the scan time
    setTimeout(() => {
        loader.classList.add('hidden');
        results.classList.remove('hidden');
        runBtn.disabled = false;
        
        // Count up animation for the score
        animateScore(65);
    }, 3000);
}

function animateScore(target) {
    let current = 0;
    const scoreEl = document.getElementById('finalScore');
    const interval = setInterval(() => {
        if (current >= target) {
            clearInterval(interval);
        } else {
            current++;
            scoreEl.innerText = current;
        }
    }, 20);
}
