// Lifecycle ---------------------------------------------
// 1. constructor -- only once
// 2. static getDerivedStateFromProps / componentWillReceiveProps -- return new state
// 3. shouldComponentUpdate -- happens in re-render phase
// 4. render -- cannot have setState
// 5. getSnapshotBeforeUpdate / componentWillUpdate -- happens in re-render phase 
//      #before this actual patch is not done so you can check dom for comparison
// 6. componentDidUpdate -- happens in re-render phase, re-render done
// 7. componentDidMount -- happens only in initial render phase
// 8. componentWillUnmount -- comp. is going to die, so set state still possible

// Error Boundaries
// Catch error in react 
// getDerivedStateFromError
// ComponentDidCatch


// API calls best place ---------------------------------------------
// When DOM is ready -- componentDidMount

// React Fragment ---------------------------------------------
// Render can return one element and other can be in tree
// So if we want to more than one element we have to wrap them inside parent div
// So Rather we use <React.Fragment></React.Fragment> wrap
// As in final render not extra parent div is render and optimized

// Code Splitting / Lazy-Loading ---------------------------------------------
// One main.js file can be huge and can take time for huge app
// So better split it, considering user may only view home page
// React has Lazy-Loading

// CSS-in-JS ---------------------------------------------
// Actually React does inline css of the styles we pass
// This inline css avoid any discrepancy of class with other component

// Higher Order Component ---------------------------------------------
// It is actually a function which takes a component as object
// and pass on a modified new component
// const reverse = (PassedComponent) =>
//   ({ children, ...props }) =>
//     <PassedComponent {...props}>
//       {children.split("").reverse().join("")}
//     </PassedComponent>
// const name = (props) => <span>{props.children}</span>
// const reversedName = reverse(name)
// <reversedName>Hello</reversedName>
//=> <span>olleH</span>

// Container Vs Presentational Component
// Container with state and have logic mostly
// Presentation components mostly use props to show an element, better to keep stateless

