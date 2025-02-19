const express = require('express');  
const path = require('path');  

const app = express();  
const PORT = 8000;  

// Servir archivos estáticos desde el directorio actual  
app.use(express.static(__dirname));  

// Ruta para mostrar index.html  
app.get('/', (req, res) => {  
    res.sendFile(path.join(__dirname, 'index.html'));  
});  

// Iniciar el servidor  
app.listen(PORT, () => {  
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);  
});
