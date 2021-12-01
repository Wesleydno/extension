
window.onload = function(){
 =
 console.log(window.location.href)   
 
const isModalOpen = document.getElementsByClassName('modal fade show');

let data = [];
let icon = `<?xml version="1.0" ?><svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z" fill="#bdc3c7"/><path d="m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z" fill="#ecf0f1" transform="translate(0 1028.4)"/><path d="m5 1031.4c-1.1046 0-2 0.9-2 2v3h18v-3c0-1.1-0.895-2-2-2h-6-2-6z" fill="#e74c3c"/><path d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z" fill="#c0392b" transform="translate(.5 1028.4)"/><path d="m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1z" fill="#bdc3c7" transform="translate(0 1028.4)"/><path d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z" fill="#c0392b" transform="translate(12.5 1028.4)"/><g fill="#bdc3c7"><path d="m18 1029.4c-0.552 0-1 0.4-1 1v3c0 0.5 0.448 1 1 1s1-0.5 1-1v-3c0-0.6-0.448-1-1-1z"/><path d="m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/><path d="m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/><path d="m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/></g><rect fill="#c0392b" height="1" transform="translate(0 1028.4)" width="18" x="3" y="8"/></g></svg>`;
if (isModalOpen.length > 0) {
console.log(isModalOpen.length)
    let element = isModalOpen[0].getElementsByClassName('modal-title')[0].childNodes[1];
    element.innerHTML = icon;
    data.start = '01/01/2019';
    data.end = '31/03/2019';

    element.addEventListener('click', function(){
        if (isModalOpen[0].attributes.id.value == 'modal_filtros_avancados') {
            modalFiltrosAvancados(data);
        }
    
        if (isModalOpen[0].attributes.id.value == 'modal_alterar_periodo') {
            modalAlterarPeriodo(data);
        }
    });
}


function modalFiltrosAvancados(data) {
    let modal = document.querySelector('#modal_filtros_avancados');
    modal.querySelector('#nou_calendar_flatpickr_data_inicio').value = data.start;
    modal.querySelector('#nou_calendar_flatpickr_data_final').value = data.end;
    console.log('filtros avancados', data.start , data.end)
}

function modalAlterarPeriodo(data) {
    let modal = document.querySelector('#modal_alterar_periodo');
    modal.querySelector('#nou_calendar_flatpickr_data_inicio').value = data.start;
    modal.querySelector('#nou_calendar_flatpickr_data_final').value = data.end;
    console.log('filtros alterar periodo', data.start , data.end)
}

}
