# Prime Tables 🧩

This application takes numeric input (N) from a user and outputs a multiplication table of (N) prime numbers.
Programming used for the project: `JavaScript`

### How to run the application

The user gives a number in the input field and presses `Enter`. The application outputs a **(N+1) x (N+1) grid of numbers**.

<img src="app-screenshots/screen_3.png" width="400"/>
<img src="app-screenshots/screen_4.png" width="400"/>

## STAGES :light_bulb:

I tried to separate each task to a different function. This way testing is easier and more effective.

The application was built in the following stages:

- CONSOLE stage
  - I first created a prime numbers generator function `primeNumbersGenerator()`. This is an iterable entity that outputs prime numbers. It checks if an integer is divisible by 1 or itself, and registers it as **prime** with `yield`.
  - The next function `giveNPrimeNumbers()` iterates the generator with upper limit an input, that is the argument of the function itself.
