import fs from 'fs';

// Lire le fichier
fs.readFile('users.json', 'utf-8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture :', err);
    return;
  }

  const users = JSON.parse(data);

  // Supprimer l'utilisateur avec id = 2
  const filteredUsers = users.filter(user => user.id !== 2);

  // Réécrire le fichier avec les utilisateurs restants
  fs.writeFile('users.json', JSON.stringify(filteredUsers, null, 2), (err) => {
    if (err) {
      console.error('Erreur d\'écriture :', err);
    } else {
      console.log('Utilisateur supprimé avec succès !');
    }
  });
});
