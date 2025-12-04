const valueInput = document.getElementById('InputNomePrin');
const ATable = document.getElementById('tableAnthony');
const GTable = document.getElementById('tableGabriel');
const YTable = document.getElementById('tableYuri');
const errParagraph = document.getElementById('paragraph');

function esconderTudo() {
    ATable.style.display = 'none';
    GTable.style.display = 'none';
    YTable.style.display = 'none';
    errParagraph.style.display = 'none';
}
esconderTudo()

function calcularMedia() {

    esconderTudo()
    let linha = document.querySelectorAll("tbody tr")

    linha.forEach(linha => {

        let n1 = parseFloat(linha.cells[1].innerText.replace(",", "."));
        let n2 = parseFloat(linha.cells[2].innerText.replace(",", "."));
        let n3 = parseFloat(linha.cells[3].innerText.replace(",", "."));

        let resultMedia = (n1 + n2 + n3) / 3;

        linha.cells[5].innerHTML = resultMedia.toFixed(1).replace(".", ",");
    });
}

calcularMedia(ATable)
calcularMedia(GTable)
calcularMedia(YTable)

function NomeFunc() {
    const valueInputMi = valueInput.value;
    const pA = document.getElementById('p_Anthony')
    const pG = document.getElementById('p_Gabriel')
    const pY = document.getElementById('p_Yuri')

    esconderTudo()

    if (valueInputMi === 'Anthony') {
        ATable.style.display = 'table';
        pA.innerHTML = 'Estudante: Anthony'
        pA.style.display = 'table'
        pY.style.display = 'none'
        pG.style.display = 'none'
    } else if (valueInputMi === 'Gabriel') {
        GTable.style.display = 'table';
        pG.innerHTML = ('Estudante: Gabriel')
        pG.style.display = 'table'
        pA.style.display = 'none'
        pY.style.display = 'none'
    } else if (valueInputMi === 'Yuri') {
        YTable.style.display = 'table';
        pY.innerHTML = ('Estudante: Yuri')
        pY.style.display = 'table'
        pA.style.display = 'none'
        pG.style.display = 'none'
    } else {
        errParagraph.style.display = 'block';
    }
}
