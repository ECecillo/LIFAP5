// Tests unitaires pour le TP2

suite("Tests pour la fonction garde_entiers_pairs",
      function() { // la suite est mise en place via un callback

        // Un premier test
        test("On vérifie que le résultat ne contient que des entiers pairs",
             function() { // fonction anonyme qui défini ce que le test va faire
               const t = [1,2,3,4];
               const resultat_attendu = [2,4];
               chai.assert.deepEqual(garde_entiers_pairs(t), resultat_attendu);
             });

        // Un autre test
        test("On vérifie que le résultat ne contient que des nombres",
             function() {
               const t = ["a","2",3,4];
               garde_entiers_pairs(t).forEach(v => chai.assert.isNumber(v));
             });

        // Test de non perte
        test("On vérifie que tous les entiers pairs sont renvoyés",
             function() {
               const t = [2,4,6,8];
               const resultat_attendu = [2,4,6,8];
               chai.assert.deepEqual(garde_entiers_pairs(t), resultat_attendu);
             });
      });

suite("Tests pour la fonction trie_articles_date",
      function() {
        // TODO: à compléter
        
       test("test de tri du tableau fourni dans le code",function() {
        const t = donnees_exemple;
        const resultat_attendu = [t[3], t[0], t[2], t[1], t[4]];
        chai.assert.deepEqual(trie_articles_date(t), resultat_attendu);
      });
       
      test("test cas limites",function() {
        chai.assert.deepEqual(trie_articles_date([]), []);
        const t1 = [donnees_exemple[0]];
        chai.assert.deepEqual(trie_articles_date(t1), t1);
        
      });

      });

suite("Tests pour la fonction filtre_mois_annee",
      function() {
        // TODO: à compléter
      });

// TODO ajouter des suites de tests pour le 3.3
