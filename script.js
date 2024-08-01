const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
let currentStep = 1
const progress = document.querySelector('.progress')
let percentage = 0

nextBtn.addEventListener('click', () => {
    percentage += 33
    progress.style.width = percentage + '%'
    currentStep++
    document.getElementById(currentStep).classList.add('active')
    
    if(currentStep !== 1) {
        prevBtn.removeAttribute('disabled')
        prevBtn.classList.remove('disabled')
    }

    if(currentStep === 4) {
        nextBtn.setAttribute('disabled', true)
        nextBtn.classList.add('disabled')
    }
})

prevBtn.addEventListener('click', () => {
    percentage -= 33
    progress.style.width = percentage + '%'
    document.getElementById(currentStep).classList.remove('active')
    currentStep--

    if(currentStep !== 4) {
        nextBtn.removeAttribute('disabled')
        nextBtn.classList.remove('disabled')
    }
    
    if(currentStep === 1) {
        prevBtn.setAttribute('disabled', true)
        prevBtn.classList.add('disabled')
    }
})

