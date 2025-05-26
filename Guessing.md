# Random Guessing Game Flowchart

This flowchart describes the logic of a number guessing game where a user tries to guess a randomly generated number. The program gives feedback and loops until the user guesses correctly. It also validates the user input.

```mermaid
flowchart TD
    Start([Start]) --> Init[Initialize game: Set min and max range, Generate random number]
    Init --> Input[Prompt user for a guess]
    Input --> CheckValid{Is input a number within range?}
    CheckValid -- No --> Invalid[Display "Invalid input. Try again."] --> Input
    CheckValid -- Yes --> Compare{Is guess correct?}
    Compare -- Yes --> Correct[Display "Correct!"] --> End([End])
    Compare -- No --> HighLow{Is guess too high?}
    HighLow -- Yes --> TooHigh[Display "Too high"] --> Input
    HighLow -- No --> TooLow[Display "Too low"] --> Input
