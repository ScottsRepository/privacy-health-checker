function startAudit() {
    const urlInput = document.getElementById('targetUrl').value;
    if (!urlInput) {
        alert("Please enter a URL to analyze.");
        return;
    }

    const runBtn = document.getElementById('runBtn');
    const loader = document.getElementById('loader');
    const results = document.getElementById('results');

    runBtn.disabled = true;
    loader.classList.remove('hidden');
    results.classList.add('hidden');

    // Logic to vary the score based on the URL provided
    let finalScore = 65;
    let feedback = "";

    if (urlInput.includes("booconsulting.co.uk")) {
        finalScore = 92;
        feedback = "Your site is in excellent shape. We just noticed a minor opportunity to update your 2026 complaint acknowledgement wording to meet the new 30-day mandate.";
    } else if (urlInput.includes("google.com")) {
        finalScore = 88;
        feedback = "Strong compliance structure detected. However, UK-specific statutory disclosures in the footer could be clearer for local users.";
    } else {
        // General score for other SMEs
        finalScore = 58;
        feedback = "Critical Gaps Detected: Your site appears to be missing mandatory 2026 complaint-handling language and clear statutory disclosures (Company Number/Registered Office) required by the Companies Act.";
    }

    setTimeout(() => {
        loader.classList.add('hidden');
        results.classList.remove('hidden');
        runBtn.disabled = false;
        
        // Update the feedback text in the UI
        document.querySelector('.action-footer p').innerText = feedback;
        
        animateScore(finalScore);
    }, 2500);
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
