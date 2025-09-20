Algorithme Analyse_phrase
     Variables 
    phrase : chaîne
    longueur, mots, voyelles : entier
    i : entier
    voyellesSet : chaîne <- "aeiouyAEIOUY"
DÉBUT
    Ecrire("Entrez une phrase terminée par un point : ")
    Lire(phrase)
    Si phrase[longueur(phrase)-1] <> '.' Alors
        Ecrire("Erreur : la phrase doit se terminer par un point.")
        Fin
    FinSi

    longueur <- 0
    mots <- 0
    voyelles <- 0

    Pour i <-- 0 à longueur(phrase)-1 Faire
        caractère <-- phrase[i]

        longueur <-- longueur + 1

        Si caractère <-- voyellesSet Alors
            voyelles <-- voyelles + 1
        FinSi

        Si caractère = ' ' Alors
            mots <-- mots + 1
        FinSi
    FinPour

    mots <-- mots + 1

    Ecrire("Longueur de la phrase : ", longueur)
    Ecrire("Nombre de mots : ", mots)
    Ecrire("Nombre de voyelles : ", voyelles)

FIN