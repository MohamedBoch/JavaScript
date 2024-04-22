// Importer les modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Créer une application Express
const app = express();

// Configuration du moteur de rendu de vues EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour parser les données de formulaire
app.use(bodyParser.urlencoded({ extended: false }));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.render('index', { title: 'Accueil' });
});

// Route pour le formulaire de contact (GET)
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contactez-nous' });
});

// Route pour soumettre le formulaire de contact (POST)
app.post('/contact', (req, res) => {
  const { nom, email, message } = req.body;
  // Logique de traitement du formulaire ici
  res.send(`Merci ${nom} pour votre message !`);
});

// Middleware pour gérer les routes inexistantes
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page non trouvée' });
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
