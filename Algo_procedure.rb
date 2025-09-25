ALGORITHME OrthogonaliteVecteurs

PROCÉDURE dot_product(v1, v2, n, ps)
VARIABLE
   i ,  ps : ENTIER
DEBUT
   ps ← 0
   POUR i ← 0 À n-1 FAIRE
      ps ← ps + v1[i] * v2[i]
   FIN POUR

    SI ps = 0 ALORS
      ECRIRE("Les deux vecteurs sont orthogonaux")
   SINON
      ECRIRE("Les deux vecteurs ne sont pas orthogonaux")
   FIN SI
FIN

VARIABLES
   TABLEAU v1, v2 : ENTIER
   n, i : ENTIER

DEBUT
   ECRIRE("Donner la dimension des vecteurs : ")
   LIRE(n)

   POUR i ← 0 À n-1 FAIRE
   ECRIRE("v1[",i,"] = ")
      LIRE( v1[i] )
   FIN POUR

   POUR i ← 0 À n-1 FAIRE
      ECRIRE("v2[",i,"] = ")
      LIRE(v2[i])
   FIN POUR

   dot_product(v1, v2, n, ps)

FIN
