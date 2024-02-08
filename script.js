<script>
    const perguntas = [
        {
            pergunta: "1. Qual é o nome completo do líder do BTS?",
            respostas: [
                'Kim Taehyung',
                "Kim Namjoon",
                'Kim Seokjin',
            ],
            correta: 1
        },
        {
            pergunta: "2. Qual música do BTS possui o recorde de visualizações em 24 horas no YouTube?",
            respostas: [
                'Boy With Luv',
                "Dynamite",
                'Butter',
            ],
            correta: 2
        },
        {
            pergunta: "3. Quantos membros o BTS possui?",
            respostas: [
                '6',
                "7",
                '8',
            ],
            correta: 1
        },
        {
            pergunta: "4. Qual é o nome da série de documentários sobre o BTS lançada pela plataforma de streaming da Big Hit Entertainment?",
            respostas: [
                'Burn the Stage',
                "Break the Silence",
                'Bring the Soul',
            ],
            correta: 0
        },
        {
            pergunta: "5. Em qual ano o BTS debutou oficialmente?",
            respostas: [
                '2011',
                "2013",
                '2015',
            ],
            correta: 1
        },
        {
            pergunta: "6. Qual é o nome do primeiro álbum de estúdio do BTS?",
            respostas: [
                'Wings',
                "Love Yourself: Her",
                'Dark & Wild',
            ],
            correta: 2
        },
        {
            pergunta: "7. Qual é o nome do fandom oficial do BTS?",
            respostas: [
                'ARMY',
                "BLINK",
                'EXO-L',
            ],
            correta: 0
        },
        {
            pergunta: "8. Quem é o dançarino principal do BTS?",
            respostas: [
                'J-Hope',
                "Jimin",
                'Jungkook',
            ],
            correta: 1
        },
        {
            pergunta: "9. Qual é o nome do primeiro single do BTS a alcançar o topo da Billboard Hot 100?",
            respostas: [
                'Boy With Luv',
                "Dynamite",
                'Butter',
            ],
            correta: 1
        },
        {
            pergunta: "10. Qual é o nome do álbum que contém a música 'Fake Love'?",
            respostas: [
                'Wings',
                "Love Yourself: Tear",
                'Map of the Soul: 7',
            ],
            correta: 1
        }
    ];

    const quiz = document.querySelector('#quiz');
    const template = document.querySelector('template');
    const corretas = new Set();
    const totalDePerguntas = perguntas.length;
    const mostrarTotal = document.querySelector('#acertos span');
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

    for (const item of perguntas) {
        const quizItem = template.content.cloneNode(true);
        quizItem.querySelector('h3').textContent = item.pergunta;

        for (let resposta of item.respostas) {
            const dt = quizItem.querySelector('dl dt').cloneNode(true);
            dt.querySelector('span').textContent = resposta;
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
            dt.querySelector('input').value = item.respostas.indexOf(resposta);
            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta;

                corretas.delete(item);
                if (estaCorreta) {
                    corretas.add(item);
                }

                mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
            }
            quizItem.querySelector('dl').appendChild(dt);
        }

        quizItem.querySelector('dl dt').remove();
        quiz.appendChild(quizItem);
    }

    const enviarRespostasButton = document.createElement('button');
    enviarRespostasButton.textContent = 'Enviar';
    enviarRespostasButton.style.marginTop = '20px';
    enviarRespostasButton.style.backgroundColor = '#6F35A5';
    enviarRespostasButton.style.color = '#FFFFFF';
    enviarRespostasButton.style.padding = '10px 20px';
    enviarRespostasButton.style.border = '1px solid #6F35A5';
    enviarRespostasButton.style.borderRadius = '5px';
    enviarRespostasButton.addEventListener('click', () => {