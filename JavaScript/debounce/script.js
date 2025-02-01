const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const apiResponse = document.getElementById("api-response")

const debounce = (cb, delay = 1000) => {
    let timeout
    return (...args) => {                
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                cb(...args)
            }, delay)
    }
}

const fetchApiData = async (query) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
        const data = await response.json()
        apiResponse.textContent = JSON.stringify(data, null, 2)
    } catch (error) {
        apiResponse.textContent = 'Error fetching data'
    }
}

const debouncedFetch = debounce(fetchApiData, 1000)

input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
    debouncedFetch(e.target.value)
})