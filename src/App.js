import './app.css'

// import EventBind from './components/eventBinding/EventBind'
import MouseEvents from './components/mouseEvents/MouseEvents'
import KeyboardEvents from './components/keyboardEvents/KeyboardEvents'
import Form from './components/form/Form'
const App = () => {
    return (
        <div className="App">
            {/* <h1>Events in React</h1> */}
            {/* <EventBind /> */}
            {/* <MouseEvents /> */}
            {/* <KeyboardEvents /> */}
            <Form />
        </div>
    )
}

export default App