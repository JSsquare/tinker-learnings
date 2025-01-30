Debouncing is a technique used to control how often a function executes. It ensures that a function is only called after a certain period of inactivity. This is useful for scenarios where you don’t want a function to trigger too frequently, such as handling user input in a search box or preventing excessive API calls.

#### Why Use Debounce?

Imagine typing in a search box that fetches results from an API. If each keystroke triggers a request, typing a simple word like “apple” could result in five API calls (one for each letter). This wastes bandwidth, increases server load, and can slow down performance.
With debounce, the function waits until the user has stopped typing for a set period (e.g., 500ms) before making a request. This ensures that only one API call is made, optimizing performance.

#### Code Breakdown?
```javascript
const debounce = (cb, delay = 1000) => {
    let timeout
    return (...args) => {                
        clearTimeout(timeout);  // Clears the previous timer if a new call is made
        timeout = setTimeout(() => {  
            cb(...args)  // Executes the callback after the delay
        }, delay)
    }
}
```

1. setTimeout()
	•	It delays execution of the callback function.
	•	In this case, it ensures that the callback (cb) runs only after the user stops typing for the given delay.

2. clearTimeout()
	•	It resets the timer if the function is called again before setTimeout executes.
	•	This prevents unnecessary function calls when rapid events occur (e.g., multiple keypresses).


Debounce ensures that your function only runs after a period of inactivity, preventing unnecessary executions. It works by continuously resetting a timer (clearTimeout) until the function has not been called for the defined delay (setTimeout). This simple yet powerful technique reduces redundant actions and improves application performance.


###### Example: Debounce in a Search Box

This example applies the debounce function to an input field:
```javascript
    // Mock API call function
    const fetchResults = (query) => {
        console.log("Fetching results for:", query);
    };

    // Create a debounced function
    const debouncedSearch = debounce(fetchResults, 500);

    document.getElementById("search").addEventListener("input", (event) => {
        debouncedSearch(event.target.value);
    });
```

##### What Happens in This Example?
1.	The user types in the search box.
2.	The debouncedSearch function is triggered.
3.	clearTimeout(timeout) cancels any pending request.
4.	**setTimeout starts a new 500ms timer.**
5.	If the user types another letter before 500ms, the previous timer is cleared and restarted.
6.	Only when the user stops typing for 500ms, the API call (fetchResults) is executed once.