const strengthMeter = document.getElementById('strength-meter')
const passwordInput = document.getElementById('password-input')
const reasonsContainer = document.getElementById('reasons')



passwordInput.addEventListener('input', updateStrengthMeter)

updateStrengthMeter()


function updateStrengthMeter(){

    const weaknesses = calculatePasswordStrength(passwordInput.value)

    let strength = 100

    reasonsContainer.innerHTML = ''

    weaknesses.forEach(weaknesses =>{
        if(weaknesses ==null) return
        strength -= weaknesses.deduction
        const messageElement = document.createElement('div')
        messageElement.innerText = weaknesses.message
        reasonsContainer.appendChild(messageElement)

    })
    if(strength == 100){

        console.log('damn strong password')
    }
    else{
        console.log('weak password')
    }

    console.log(weaknesses)
    strengthMeter.style.setProperty('--strength', strength)

}

function calculatePasswordStrength(password){

    const weaknesses = []
    weaknesses.push(lengthWeakness(password))
    weaknesses.push(numberWeakness(password))
    return weaknesses

}

function lengthWeakness(password){

    const length = password.length

    if(length<=0){
        return{
            message: 'Dude enter a password mannnn',
            deduction: 100

        }

    }

    if(length<= 6){

        return{
            message: 'Your password is too short',
            deduction: 60

        }
    }

    if(length <=8){

        return{
            message: 'Your password could be longer',
            deduction: 10

        }
    }



}

function numberWeakness(password){

    const matches = password.match(/[0-9]/g) || []

    
    if(matches.length === 0){

        return{

            message: 'Your password has no numbers',
            deduction: 20
        }
    }
    if(matches.length <= 1){

        return{

            message: 'Your password has one number add one more',
            deduction: 10
        }
    }



}


