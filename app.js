const navModalAlterarPeriodo = document.querySelector('#modal_alterar_periodo_body form .nav');
const btnAbrirModalFiltrosAvancados = document.querySelector('.card-header .float-right').lastElementChild;
const data = [];

navModalAlterarPeriodo.addEventListener('click', (event) => {
    if (event.target.hash == '#menu_periodo_escolher') {
        document.querySelector('#modal_alterar_periodo #btn_setdata_nou').style.display = 'initial';
    } else {
        document.querySelector('#modal_alterar_periodo #btn_setdata_nou').style.display = 'none';
    }
});

document.querySelector('#modal_alterar_periodo #btn_setdata_nou').addEventListener('click', () => {
    data.start = '01/01/2019';
    data.end = '31/03/2019';
    modalAlterarPeriodo(data);

});

function modalAlterarPeriodo(data) {
    let modal = document.querySelector('#modal_alterar_periodo');
    modal.querySelector('#nou_calendar_flatpickr_data_inicio').value = data.start;
    modal.querySelector('#nou_calendar_flatpickr_data_final').value = data.end;
}

btnAbrirModalFiltrosAvancados.addEventListener('click', () => {
    document.querySelector('#modal_filtros_avancados #btn_setdata_nou').style.display= 'initial';
});

document.querySelector('#modal_filtros_avancados #btn_setdata_nou').addEventListener('click', () => {
    data.start = '01/01/2019';
    data.end = '31/03/2019';
    modalAlterarFiltrosAvancados(data);

});

function modalAlterarFiltrosAvancados(data) {
    let modal = document.querySelector('#modal_filtros_avancados');
    modal.querySelector('#nou_calendar_flatpickr_data_inicio').value = data.start;
    modal.querySelector('#nou_calendar_flatpickr_data_final').value = data.end;
}
