function startAudit() {
    const url = document.getElementById('targetUrl').value;
    if (!url) {
        alert("Please enter a URL to analyze.");
        return;
    }

    const runBtn = document.getElementById('runBtn');
    const loader = document.getElementById('loader');
    const results = document.getElementById('results');

    runBtn.disabled = true;
    loader.classList.remove('hidden');
    results.classList.add('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        results.classList.remove('hidden');
        runBtn.disabled = false;
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
    }, 25);
}
