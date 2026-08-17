/* =====================================================
   ELEMENTOS
===================================================== */

const page1 =
    document.getElementById("page1");

const page2 =
    document.getElementById("page2");

const page3 =
    document.getElementById("page3");

const page4 =
    document.getElementById("page4");


const continueButton =
    document.getElementById("continueButton");

const yesButton =
    document.getElementById("yesButton");

const sureButton =
    document.getElementById("sureButton");

const noButton =
    document.getElementById("noButton");

const page3Continue =
    document.getElementById("page3Continue");

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* =====================================================
   LOADING DA PÁGINA 1
===================================================== */

const tempoTotal = 10;

let tempo = 0;


const progressBar =
    document.getElementById("loadingProgress");

const percentage =
    document.getElementById("percentage");

const loadingMessage =
    document.getElementById("loadingMessage");

const loadingSection =
    document.querySelector(".loading-section");

const finishedSection =
    document.getElementById("finished");


const mensagens = [

    "Espera só um pouquinho...",

    "Eu fiz isso pensando em você.",

    "Talvez você não esteja esperando...",

    "Só mais alguns segundos...",

    "Está quase...",

    "Agora podemos começar. ❤️"

];


const intervalo = setInterval(() => {

    tempo += 0.1;


    const porcentagem =
        Math.min(
            (tempo / tempoTotal) * 100,
            100
        );


    progressBar.style.width =
        `${porcentagem}%`;


    percentage.textContent =
        Math.floor(porcentagem);


    const indice =
        Math.min(
            Math.floor(
                tempo /
                (tempoTotal / mensagens.length)
            ),
            mensagens.length - 1
        );


    loadingMessage.style.opacity = "0";


    setTimeout(() => {

        loadingMessage.textContent =
            mensagens[indice];

        loadingMessage.style.opacity =
            "1";

    }, 200);


    if (tempo >= tempoTotal) {

        clearInterval(intervalo);

        terminarLoading();

    }

}, 100);


/* =====================================================
   FINAL DO LOADING
===================================================== */

function terminarLoading() {

    percentage.textContent = "100";

    progressBar.style.width = "100%";


    setTimeout(() => {

        loadingSection.style.opacity = "0";


        setTimeout(() => {

            loadingSection.style.display =
                "none";

            finishedSection.style.display =
                "block";

        }, 800);

    }, 500);

}


/* =====================================================
   PÁGINA 1 → PÁGINA 2
===================================================== */

continueButton.addEventListener(
    "click",
    () => {

        trocarPagina(page1, page2);

    }
);


/* =====================================================
   PÁGINA 2
===================================================== */

yesButton.addEventListener(
    "click",
    () => {

        irParaPagina3();

    }
);


sureButton.addEventListener(
    "click",
    () => {

        irParaPagina3();

    }
);


/* =====================================================
   PÁGINA 2 → PÁGINA 3
===================================================== */

function irParaPagina3() {

    trocarPagina(page2, page3);

    iniciarMusica();

}


/* =====================================================
   MÚSICA
===================================================== */

function iniciarMusica() {

    backgroundMusic.volume = 0.35;


    const tentativa =
        backgroundMusic.play();


    if (tentativa !== undefined) {

        tentativa.catch(() => {

            console.log(
                "O navegador bloqueou a reprodução automática."
            );

        });

    }

}


/* =====================================================
   BOTÃO NÃO
===================================================== */

noButton.addEventListener(
    "click",
    () => {

        const question =
            document.querySelector(".question");

        const goodbye =
            document.getElementById("goodbye");


        question.style.opacity = "0";


        setTimeout(() => {

            question.style.display = "none";

            goodbye.style.display = "block";

        }, 700);

    }
);


/* =====================================================
   PÁGINA 3 → PÁGINA 4
===================================================== */

page3Continue.addEventListener(
    "click",
    () => {

        trocarPagina(page3, page4);

    }
);


/* =====================================================
   TRANSIÇÃO ENTRE PÁGINAS
===================================================== */

function trocarPagina(
    paginaAtual,
    proximaPagina
) {

    paginaAtual.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";


    paginaAtual.style.opacity = "0";

    paginaAtual.style.transform =
        "translateY(-25px)";


    setTimeout(() => {

        paginaAtual.style.display =
            "none";


        proximaPagina.style.display =
            "block";


        proximaPagina.style.opacity =
            "0";


        proximaPagina.style.transform =
            "translateY(25px)";


        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


        setTimeout(() => {

            proximaPagina.style.transition =
                "opacity 1s ease, transform 1s ease";


            proximaPagina.style.opacity =
                "1";


            proximaPagina.style.transform =
                "translateY(0)";

        }, 50);


    }, 800);

}