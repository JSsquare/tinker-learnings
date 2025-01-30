const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
})


const debounce = (cb, delay = 1000) => {
    let timeout
    return (...args) => {                
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                cb(...args)
            }, delay)
    }
}