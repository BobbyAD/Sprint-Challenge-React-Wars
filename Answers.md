# Answers

1.  What is React JS and what problems does it try and solve?

    ReactJS is a library for building user interfaces. It was created by an engineer at facebook for creating single-page and mobile applications. The main problem it solves is being extremely fast at fetching and changing data inside the page, allowing you to divide your code up in to components that rapidly update as they're built across the DOM. 

2.  What does it mean to _think_ in react?

    Thinking in React revolves around thinking of your application as a series of broken up components, and understanding where data needs to be passed to/from. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A Class/Stateful component is one that will hold data inside of it. A Functional/Presentational component is one that just takes data in from a component above it, and performs functions or displays it. A Class/Stateful component can perform any functions it wants on its data, but is only necessary if you need to house data inside that component as well as perform operations on it.

4.  Describe state.

    State is just a way to hold data. It's technically immutable for performance purposes, but we update the state to display different data throughout our apps before displaying it to the user.

5.  Describe props.

    Props is the state data being passed from one component to another, to allow components to access other components' data. Props are immutable, as you're only looking at the data coming in and either displaying it or performing functions that are also passed in as props.