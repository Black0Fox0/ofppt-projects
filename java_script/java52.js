function loadHTML() {
    fetch('./test51.htm')
        .then(response => response.text())
        .then(data => {
            document.getElementById('codeContainer').textContent = data;
        })
        .catch(error => console.error('Error fetching the HTML file:', error));
}
