const buttons = document.querySelectorAll('span')
const body = document.querySelector('body')

buttons.forEach( (button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target)
        if(event.target.id === 'Red'){
            body.style.backgroundColor = event.target.id
        }
        else if(event.target.id === 'Orange'){
            body.style.backgroundColor = event.target.id
        }
        else if(event.target.id === 'Yellow'){
            body.style.backgroundColor = event.target.id
        }
        else if(event.target.id === 'Green'){
            body.style.backgroundColor = event.target.id
        }
        else if(event.target.id === 'Blue'){
            body.style.backgroundColor = event.target.id
        }
        else if(event.target.id === 'Indigo'){
            body.style.backgroundColor = event.target.id
        }
        else if(event.target.id === 'Violet'){
            body.style.backgroundColor = event.target.id
        }
        else{
            console.log('Wrong Click!')
        }
    })
})