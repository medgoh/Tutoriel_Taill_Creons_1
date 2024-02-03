
# Hello Taill'Créons va t'apprendre à faire un drôle d'enregistreur vocal

TUTO Taill'Créons - drôle d'enregistreur vocal
## Etape 1 - Bonjour Taill'Crons va t'apprendre à faire un drôle d'enregistreur vocal! @showdialog
Suis bien les instructions à chaques étapes et clique sur SUIVANT pour passer aux prochaines étapes.
N'hésite pas à cliquer sur le bouton d'aide en forme d'ampoule en cas de blocage. 
Clique sur OK pour commencer.

## Etape 2: détecter un apuie sur le bouton A
On veut que lorsque l'on appuie sur le bouton ``||input:A||`` du micro:bit, un enregistrement audio démarre.
Dans la boite à outils, clique sur la section ``||input:Entrée||`` et déplace un bloc
``||Input:Lorsque le bouton A est pressé||`` sur la droite.
Clique sur ``|Next|``.
``` blocks
input.onButtonPressed(Button.A, function () {
})
``` 
