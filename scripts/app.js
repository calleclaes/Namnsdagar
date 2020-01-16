const NameForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {

    const nameDate = data.nameDate;

    details.innerHTML = `
        <h3 class="my-3">${nameDate.results[0].name}</h3>
        <h5 class="my-3">${nameDate.results[0].day}/${nameDate.results[0].month}</h5>
    `;
};

const updateName = async (name) => {
    const nameDate = await getDate(name);

    return{nameDate: nameDate};
};

NameForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = NameForm.namnsdag.value.trim();
    NameForm.reset();

    updateName(name)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

});