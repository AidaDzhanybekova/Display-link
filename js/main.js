
let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}

const API = 'http://localhost:8000/todos'
renderMuvie()
$('.add-btn').on('click', function () {
    let newMuvie = {
        title: $('.title').val(),
        
        image: $('.image').val(),
        description: $('.description').val(),

    }
    fetch(API, {
            method: "POST",
            body: JSON.stringify(newMuvie),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        .then(() => renderMuvie())

})

function renderMuvie() {
    fetch(API)
        .then(res => res.json())
        .then(muvieData => {
            $('muvies-block').html('');
            muvieData.forEach(item => {
                $('.movies-block').append(`
                    <div class="card" style="width: 18rem;">
                        <img src="${item.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <button>Удалить</button>
                        <button>Редактировать</button>
                        </div>
                    </div>
            `)
            })
        })
}
