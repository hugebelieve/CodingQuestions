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
// React has Lazy-Loading with routes

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

// Container(StateFul) Vs Presentational Component(StateLess)
// Container with state and have logic mostly
// Presentation components mostly use props to show an element, better to keep stateless

// Redux ---------------------------------------------
// It is a state management tool for the whole app
// Store -> createStore(combinedReducer) -> dispatch ( -> subscribe )
// So reducer has the functions and can change you state in return
// Provider to pass store in App (main)
// useSelector for getting store value
// useDispatch - has type and payload/data

// Pure component ---------------------------------------------
// React.PureComponent does a shallow comparison on state change before render
// So in our case we will no need shouldComponentUpdate()

// Redux store only support synchronous data flow
// So we have middleware tp rescue

// MiddleWare Thunk ---------------------------------------------
// Action creator(function doing async things) - call from UI
// Then it passes it to reducer

// MiddleWare Saga ---------------------------------------------
// Catches the action in between and does async
// Then it passes it to reducer

// Advantage ---------------------------------------------
// Facilitates process of components
// Faster rendering with Virtual DOM
// Server side rendering hence SEO friendly (but for optimization of paint not so much)
// React Native