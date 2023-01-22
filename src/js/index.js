const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const botaoFecharModal = modal.querySelector('.fechar-modal');
const video = document.querySelector('#video');

const videoSource = video.getAttribute('src');
const classeAberto = 'aberto';


function setVideoSource(source, element=video) {
    element.setAttribute('src', source);
};

function toggleModal(_arg, element=modal, class_to_toggle=classeAberto) {
    element.classList.toggle(class_to_toggle);
};


botaoTrailer.addEventListener('click', () => {
    if (video.getAttribute('src') == "") {
        setVideoSource(videoSource);
    }
    toggleModal();
});

botaoFecharModal.addEventListener('click', () => {
    setVideoSource("");
    toggleModal();
});
