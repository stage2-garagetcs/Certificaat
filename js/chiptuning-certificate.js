// Border text repetition logic for CHIPTUNING
function createBorderText() {
    const borderContainer = document.querySelector('.border-decoration-text');
    if (!borderContainer) return;

    // Clear existing content
    borderContainer.innerHTML = '';

    // Configuration
    const text = 'GarageTCS';
    const totalRepetitions = 3;

    // Start and end positions - easily adjustable
    const startTop = 180;
    const textEnd = 610;

    // Calculate spacing based on start/end positions
    const spacing = (textEnd - startTop) / (totalRepetitions - 1);


    // Create left side text elements - Matrix cascade style
    for (let i = 0; i < totalRepetitions; i++) {
        const textElement = document.createElement('div');
        textElement.className = 'absolute left-4 text-gray-300 font-furore text-3xl font-bold transform -rotate-90 origin-left opacity-30';
        textElement.textContent = text;
        textElement.style.top = `${startTop + (i * spacing)}px`;
        borderContainer.appendChild(textElement);
    }

    // Create right side text elements - Matrix cascade style
    for (let i = 0; i < totalRepetitions; i++) {
        const textElement = document.createElement('div');
        textElement.className = 'absolute right-4 text-gray-300 font-furore text-3xl font-bold transform rotate-90 origin-right opacity-30';
        textElement.textContent = text;
        textElement.style.top = `${startTop + (i * spacing)}px`;
        borderContainer.appendChild(textElement);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createBorderText);
