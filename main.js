// funzione che al click sull'icona dell'hamburger menu mostra il menu mobile//

$(".fa-bars").click(function() {
    // al click sull'elemento, mostra il menu
    $(".hamburger-menu").show();
}
); // chiusa la parentesi click

// funzione che quando viene cliccata la x che appare dopo il click sull'icona dell'hamburger menu, chiude tutto e fa tornare le cose come prima del click iniziale

$(".fa-times").click(function() {
    // al click sulla x, chiude il menu
    $(".hamburger-menu").hide();
}
); // parentesi del click
