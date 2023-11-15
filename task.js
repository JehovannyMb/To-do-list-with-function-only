alert("Bienvenu à la page JML");
let tache = [ ];
let nomDeLaTache = 1;
function Add_task(tache) {
    let AjouterLaTache = prompt("Définissez une tâche :")
    tache.push("\n" + tache.length + " . " + AjouterLaTache)
    return AjouterLaTache
}
function remouved_task(tache) {
    let TacheChoisie = prompt("Choisissez le numéro de la tâche à supprimer :")
    let supprimerLaTache = tache.splice(TacheChoisie, TacheChoisie)
    return supprimerLaTache
}
function complete_task(tache) {
    let TacheChoisie = prompt("Choisissez le numéro de la tâche à compléter : ")
    let listeDesTaches = prompt("La tâche est-elle complétée?" + "\n" + "OUI" + "\n" + "NON" )
     if( listeDesTaches == "OUI" || listeDesTaches == "oui"){
    let TachesCompletes = tache[TacheChoisie] + "  a bien été complétée. "
        alert(TachesCompletes)
     } else {
        alert("Vous n'avez choisi aucune option")
     }
    return TacheChoisie
}
function view_task(tache) {
    alert("Voici vos tâches : " + "\n" + tache)
    // alert(TachesDeLutilisateur)
    return tache
}
do {
    function essaie1(tache) {
        let tableau1 = ["1. Liste de tâches ", "\n" + "2. Ajouter une tâche ", "\n" + "3.Supprimer une tâche ", "\n" + "4.Complèter une tâche ", "\n" + "5.Quitter."]
        // let tailleTableau1 = tableau1.length
        nomDeLaTache = 1 * prompt("Sélectionnez une option :" + "\n" + tableau1)

        if (nomDeLaTache === 2) {
            Add_task(tache)
        } else if (nomDeLaTache === 3) {
            remouved_task(tache)
        } else if (nomDeLaTache === 4) {
            complete_task(tache)
        } else if (nomDeLaTache === 1) {
            view_task(tache)
        }
        return nomDeLaTache
    }
essaie1(tache)

} while (nomDeLaTache != 5);  


// task = {
//     task,
//     completed: false
// }






