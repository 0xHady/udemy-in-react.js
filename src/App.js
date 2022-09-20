import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card.js";
import data from "./data.json";

function App() {
    return (
        <div className="App">
            {data["courses"].map((course) => {
                return <Card course={course}></Card>;
            })}
        </div>
    );
}

export default App;
