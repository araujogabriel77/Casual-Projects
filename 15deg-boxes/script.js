let button = document.getElementsByClassName('btn');

function magic() {
    let cubos = document.getElementsByClassName('d');

    for (let i = 0; i < cubos.length; i++) {
        let nCubos = `q${i + 1}`;
        cubos[i].classList.toggle(nCubos);
    }
}
