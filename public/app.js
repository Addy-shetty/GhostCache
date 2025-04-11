document.addEventListener('DOMContentLoaded', () => {
    const scanBtn = document.getElementById('scan-btn');
    const domainInput = document.getElementById('domain');
    const progressSection = document.getElementById('progress');
    const resultsSection = document.getElementById('results');
    const progressFill = document.getElementById('progress-fill');
    const statusText = document.getElementById('status');
    const resultContent = document.getElementById('result-content');

    // Event listener for scan button
    scanBtn.addEventListener('click', startScan);

    async function startScan() {
        const domain = domainInput.value.trim();
        
        if (!domain) {
            alert('Please enter a valid domain');
            return;
        }

        // Show progress section
        progressSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        
        try {
            // Start the scan
            const response = await fetch('/scan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ domain })
            });

            if (!response.ok) throw new Error('Scan failed');

            // Process the streamed response
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const text = decoder.decode(value);
                const data = JSON.parse(text);

                if (data.progress) {
                    // Update progress bar
                    progressFill.style.width = `${data.progress}%`;
                    statusText.textContent = data.message || 'Scanning...';
                }

                if (data.result) {
                    // Show results section
                    resultsSection.classList.remove('hidden');
                    resultContent.textContent += data.result + '\n';
                }
            }

            statusText.textContent = 'Scan completed!';
            progressFill.style.width = '100%';

        } catch (error) {
            console.error('Error:', error);
            statusText.textContent = `Error: ${error.message}`;
            progressFill.style.backgroundColor = '#e74c3c';
        }
    }
});
