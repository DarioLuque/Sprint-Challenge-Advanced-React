- [x] Why would you use class component over function components (removing hooks from the question)?

We should use class components whenever we need to implement logic or state, while main usage of function components is displaying UI and rendering data passed via props from class components. Class component allow us use react lifecycle methods.

- [x] Name three lifecycle methods and their purposes.

1. constructor() used to initialize our class with the data; used to load in initial state data to
render() when triggered UI gets rendered to the DOM as it gives JSX code to the dom. 
2. The render() method is involved in mounting phase and updating phase
3. componentDidMount() is a method called once in the component life cycle, it is a place to make API calls as the component is already mounted.

- [x] What is the purpose of a custom hook?

Custom hooks are hooks that let us extract components logic into the functions that can be use by other components.

- [x] Why is it important to test our apps?

Testing applications reduces risk of bugs, increased app quality and is better prepared for changes and refactoring.