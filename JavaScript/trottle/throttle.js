const input =  document.querySelector("input")
const defaultText = document.getElementById("default")
const throttleText = document.getElementById("throttle")
const apiResponse = document.getElementById("api-response")

const updateThrottleText = throttle(text => {
    throttleText.textContent = text
})

input.addEventListener("input", e => {    
    defaultText.textContent = e.target.value
    updateThrottleText(e.target.value)
})

function throttle(cb, delay=3000) {
    let shouldWait = false
    let waitingArgs

    return (...args) => {
        if(shouldWait) {
            waitingArgs = args
            return
        }
        const timeoutFunction = () => {
            if(waitingArgs == null) {
                shouldWait = false
            } else {
                cb(...waitingArgs)
                waitingArgs = null
                setTimeout(timeoutFunction, delay);
            }
        }

        cb(...args)
        shouldWait = true

        setTimeout(timeoutFunction, delay);
    }
}