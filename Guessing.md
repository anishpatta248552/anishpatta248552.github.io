# Random Guessing Game - Flowchart

This file presents the flowchart and description of a random number guessing game. The game generates a random number, accepts user guesses, and gives feedback until the user guesses correctly.

```mermaid
flowchart TD
    Start([Start])

```mermaid
flowchart TD
    Start([Start])
    A[Generate random number]
    B[Prompt user for a guess]
    C{Is input a number?}
    D[Show error and prompt again]
    E{Is guess correct?}
    F[Too low - prompt again]
    G[Too high - prompt again]
    H[Display success message]
    End([End])

    Start --> A --> B --> C
    C -- No --> D --> B
    C -- Yes --> E
    E -- Yes --> H --> End
    E -- No --> F --> B
    E -- No --> G --> B
