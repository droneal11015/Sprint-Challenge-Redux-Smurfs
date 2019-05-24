1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
        .map(|callback|), .filter(|callback|), Object.assign(|target|, |...sources|) which is used to create a new object and extend previous properties.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        Actions optional payload and gives instructions to be used by reducers. It's the thing that makes the things do the things.
        Reducers represents the states of the objects and can return new states with new values.
        Store is the container for holding the objects to be used by the application

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
        Application state is a global state that can be accessed by any component, and the component is local to the component and better to be used for short term storage of values.

1.  What is middleware?
        tools to intercept processes inside a program that manipulates the behavior.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        it's a middleware tool that allows for thunks in Redux. It makes the action creators behave out of sequence depending on the connection and processing time.

1.  Which `react-redux` method links up our `components` with our `redux store`?
        connect()
