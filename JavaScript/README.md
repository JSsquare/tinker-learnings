# Debounce Vs Throttle
Both debounce and throttle are techniques to control how frequently a function executes, but they serve different purposes:

# Key Differences
## **Comparison Between Debounce and Throttle**

| Feature        | **Debounce** | **Throttle** |
|---------------|-------------|-------------|
| **Definition** | Delays function execution until after a period of inactivity. | Ensures function executes at most once every specified interval. |
| **Execution Behavior** | Waits until the user **stops triggering** the event for a given delay. | Executes **immediately** and then prevents execution until the delay passes. |
| **Use Case** | Ideal for input fields, search boxes, and user-triggered API requests. | Best for handling scroll events, window resizing, and real-time updates. |
| **How It Works** | Resets a timer with every call; only runs when there are no more calls in the delay period. | Executes immediately, then ignores further calls until the delay period is over. |
| **Prevents** | **Too many** calls being made too frequently. | **Too frequent** execution within a short period. |
| **Best For** | Optimizing **performance-heavy** functions that should run only when necessary. | Controlling **consistent** execution rates for actions that occur frequently. |

# Explaining Like You’re 5
What is Debounce?

Imagine your mom telling you to clean your room. Every time she reminds you, you ignore it and restart a 5-minute countdown. Only if she stops reminding you for 5 minutes, you actually go clean your room. Debounce works the same way—it waits until you stop doing something before taking action.


What is Throttle?
