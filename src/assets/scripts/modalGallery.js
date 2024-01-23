        // Obtém todas as imagens da galeria
        const imagens = document.querySelectorAll('.grid-area-photo .picbox img');

        // Obtém o modal e as imagens dentro dele
        const modal = document.getElementById('myModal');
        const atualImg = document.querySelector('.current-pic');


        const goBtn = document.querySelector('.go');
        const backBtn = document.querySelector('.back');

        // Variável para controlar o índice da imagem atual
        let indiceAtual = 0;

        // Adiciona um evento de clique a cada imagem na galeria
        imagens.forEach((imagem, index) => {
            imagem.addEventListener('click', () => {
                // Abre o modal ao clicar em uma imagem
                modal.style.display = 'block';

                // Atualiza as imagens no modal

                atualImg.src = imagem.src;

                // Atualiza o índice da imagem atual
                indiceAtual = index;
            });
        });

        // Adiciona eventos de clique para navegar no slideshow


        backBtn.addEventListener('click', () => {
            indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
            atualizarImagensSlideshow();
        });



        goBtn.addEventListener('click', () => {
            indiceAtual = (indiceAtual + 1) % imagens.length;
            atualizarImagensSlideshow();
        });

        // Função para atualizar as imagens no slideshow
        function atualizarImagensSlideshow() {

            atualImg.src = imagens[indiceAtual].src;
        }

        // Fecha o modal ao clicar fora das imagens
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }

        };
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        })
        document.querySelector(".close").addEventListener("click", function () {
            modal.style.display = "none";
        });


        // Adiciona eventos de teclado para navegar no slideshow
        document.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft') {
                // Tecla da seta para a esquerda pressionada, move para a imagem anterior
                indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
                atualizarImagensSlideshow();
            } else if (event.key === 'ArrowRight') {
                // Tecla da seta para a direita pressionada, move para a próxima imagem
                indiceAtual = (indiceAtual + 1) % imagens.length;
                atualizarImagensSlideshow();
            }
        });