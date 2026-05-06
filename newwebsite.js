function nextStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('step-active');
    });

    // Show the target step
    document.getElementById('step' + stepNumber).classList.add('step-active');

    // Update Progress Bar
    const progress = (stepNumber / 4) * 100;
    document.getElementById('progressBar').style.width = progress + '%';

    // Optional: Generate Summary for the last page
    if (stepNumber === 4) {
        generateSummary();
    }
}

function generateSummary() {
    const summary = document.getElementById('summary');
    summary.innerHTML = `
        <p style="font-size: 0.8rem; opacity: 0.7;">Everything looks good! Click submit to finalize your profile.</p>
    `;
}

// Prevent actual form submission for demo
document.getElementById('multiStepForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Welcome to the Midnight Glow. Data submitted successfully!');
});