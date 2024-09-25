document.getElementById('gerarGrafico').addEventListener('click', function() {
    // Mostrar o loader
    document.getElementById('loader').style.display = 'block';
    document.getElementById('grafico-container').style.display = 'none';
    
    setTimeout(() => {
        fetchGrafico();
    }, 3000);
});

function fetchGrafico() {
    fetch('http://201.34.61.119:8009/get_graphic') 
        .then(response => response.json())
        .then(data => {
            const base64Image = data.img; 
            document.getElementById('grafico').src = `data:image/png;base64,${base64Image}`;
            
            document.getElementById('loader').style.display = 'none';
            document.getElementById('grafico-container').style.display = 'block';
        })
        .catch(error => {
            console.error('Erro ao carregar o gráfico:', error);
            alert('Erro ao carregar o gráfico. Tente novamente.');
        });
}
