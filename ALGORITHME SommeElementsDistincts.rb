ALGORITHME SommeElementsDistincts
VARIABLES
   TABLEAU tab1, tab2 : ENTIER
   n, m, i, j, somme : ENTIER
   estCommun : BOOLEEN

DEBUT
   ECRIRE("Donner la taille du tableau 1 : ")
   LIRE(n)
   POUR i ← 0 À n-1 FAIRE
      ECRIRE("Entrer l'élément ", i+1, " du tableau 1 : ")
      LIRE(tab1[i])
   FIN POUR

   ECRIRE("Donner la taille du tableau 2 : ")
   LIRE(m)
   POUR i ← 0 À m-1 FAIRE
      ECRIRE("Entrer l'élément ", i+1, " du tableau 2 : ")
      LIRE(tab2[i])
   FIN POUR

   somme ← 0

   POUR i ← 0 À n-1 FAIRE
      estCommun ← FAUX
      POUR j ← 0 À m-1 FAIRE
         SI tab1[i] = tab2[j] ALORS
            estCommun ← VRAI
         FIN SI
      FIN POUR
      SI estCommun = FAUX ALORS
         somme ← somme + tab1[i]
      FIN SI
   FIN POUR

   POUR i ← 0 À m-1 FAIRE
      estCommun ← FAUX
      POUR j ← 0 À n-1 FAIRE
         SI tab2[i] = tab1[j] ALORS
            estCommun ← VRAI
         FIN SI
      FIN POUR
      SI estCommun = FAUX ALORS
         somme ← somme + tab2[i]
      FIN SI
   FIN POUR

   AFFICHER "La somme des éléments distincts est : ", somme
FIN
