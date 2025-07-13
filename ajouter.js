import fs from 'fs';

// Lire le fichier
fs.readFile('users2.json', 'utf-8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture :', err);
    return;
  }

  const users = JSON.parse(data); // Convertir en tableau
  users.push({ id: 3, nom: "Seydou" }); // Ajouter l'utilisateur

  // Réécrire le fichier
  fs.writeFile('users2.json', JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error('Erreur d\'écriture :', err);
    } else {
      console.log('Utilisateur ajouté avec succès !');
    }
  });
});
