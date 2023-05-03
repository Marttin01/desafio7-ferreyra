const formLogin = document.querySelector('#formLogin')

if(formLogin instanceof HTMLFormElement){
    formLogin.addEventListener('submit', async event => {
        // event.preventDefault()

        const input_email = document.querySelector('#input_email')
        const input_password = document.querySelector('#input_password')

        if(input_email instanceof HTMLInputElement && input_password instanceof HTMLInputElement){

            const sesion = {
                email:input_email.value,
                password:input_password.value
            }

            
            const response = await fetch('/api/sessions', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sesion)
            })

            if (response.status === 201) {
                window.location.replace('/profile')
            }
               
        }
    } )
}