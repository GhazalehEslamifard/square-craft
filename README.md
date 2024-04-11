# Square Craft: Command Pattern Demo with React and Redux Toolkit
Square Craft is an interactive playground that allows you to execute commands
and observe their immediate effects on the environment's state.

## Pre-requisites && Installation
Using nvm, you can simply run `nvm use` to properly set the right node version which is mentioned in `.nvmrc` file.
```bash
nvm use
npm install
```
## Usage
After installing the dependencies, start the development server:
```bash
npm start
```

## Understanding the Command Pattern
Square Craft leverages the command pattern, where each command is represented an object that encapsulates all relevant details for itself.
This design enables passing requests as method arguments and facilitates support for undoable operations and enhancing modularity within the application.

### Command Pattern Workflow Recap:
1. Define commands.
2. Inject these commands into the invoker.
3. When the invoker is triggered, it executes the attached command. 
4. Then the execution of the command performs an action on the receiver.

### Pros
- **Decouples Invoker and Receiver**: decouples the sender (invoker) from the receiver.
- **Flexibility**: Easily customize and extend actions without changing client code.
- **Undo/Redo**: supports undoable operations, as you can store commands and their parameters.
- **Macro Commands**: Group multiple commands into composite actions.
- **Queueing and Logging**: You can queue commands and execute them later, even in a different order. Additionally, you can log commands for auditing and debugging purposes.
- **Supports Single Responsibility Principle.**
- **Supports Open/Closed Principle.**

### Cons
- Increased **Complexity**.
- **Overhead**: Slight performance overhead due to command object creation, especially in scenarios with a large number of commands.
- Introduces an **additional layer of indirection**, which might make the code less straightforward to understand for simple cases.
- **Overengineering** for simple scenarios.


## Built with
- ReactJS
- Redux Toolkt

## Contact
Don't hesitate to contact me if you have any inquiries or would like to know more about Square Craft.
I'm more than happy to help! - **Ghazaleh Eslamifard**
- Email: gzl.eslami@gmail.com
- Github: https://github.com/GhazalehEslamifard/