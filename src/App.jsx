import logo from "./assets/ReactLogo.webp"
function App() {
  return (
    <div>
      <img src={logo} alt="React Logo" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>React is a JavaScript library for building user interfaces.</li>
        <li>It uses a virtual DOM to optimize rendering performance.</li>
        <li>Components are the building blocks of a React application.</li>
      </ul>
    </div>
  )
}

export default App