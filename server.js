const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Specific route for AASA file with correct content-type
app.get('/.well-known/apple-app-site-association', (req, res) => {
  res.type('application/json');
  res.sendFile(path.join(__dirname, 'public/.well-known/apple-app-site-association'));
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});