### What is Throttling?

Throttling is a rate-limiting technique that ensures a function is executed at most once per specified time interval, no matter how many times it is triggered. Unlike debouncing, which waits for inactivity before execution, throttling allows execution at a controlled, consistent pace.

### How Throttling Works (Step-by-Step)
	1.	The first function call happens immediately.
	2.	After the function is called, further calls within the delay period are ignored, but the last captured arguments are stored.
	3.	Once the delay period ends, if new arguments were captured, the function executes with the latest values.
	4.	The process repeats, ensuring that calls are executed at most once per interval.

### Breaking Down the Code
```javascript
function throttle(cb, delay = 3000) {
    let shouldWait = false
    let waitingArgs

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args // Store the latest arguments if called again during wait period
            return
        }

        const timeoutFunction = () => {
            if (waitingArgs == null) {
                shouldWait = false // Allow the next execution
            } else {
                cb(...waitingArgs) // Execute function with last captured arguments
                waitingArgs = null
                setTimeout(timeoutFunction, delay) // Restart the throttling cycle
            }
        }

        cb(...args) // Execute immediately on first call
        shouldWait = true

        setTimeout(timeoutFunction, delay) // Start the throttling interval
    }
}
```
    1.	If `shouldWait` is false, the function executes immediately and `shouldWait` is set to true.
	2.	If called again before the delay ends, arguments are saved in waitingArgs and ignored until the next cycle.
	3.	After delay milliseconds:
	    •	If `waitingArgs` is present, execute the function with latest captured arguments.
	    •	If no new arguments exist, reset `shouldWait` to allow a fresh function call.

### Key Takeaways

✅ Throttling controls execution frequency: It allows regular updates at fixed intervals.
✅ Good for performance: Avoids excessive function calls (e.g., API requests, scrolling events).
✅ Latest input is always considered: Ensures most recent action is reflected without overwhelming the system.

### When to Use Throttling?
🔹 Handling scroll events (e.g., updating UI elements while scrolling).
🔹 Resizing window (e.g., adjusting UI layout while dragging).
🔹 Drag-and-drop operations (e.g., updating the position at regular intervals).
🔹 API polling (e.g., sending a request every X seconds).