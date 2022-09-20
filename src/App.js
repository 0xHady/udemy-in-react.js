import logo from "./logo.svg";
import "./App.css";
import python from "./data.json";
import CategoryContainer from "./components/CategoryContainer";
import CourseContainer from "./components/CoursesContainer";

function App() {
    return (
      <div className="App">
        <header/>
        <CategoryContainer data={python}></CategoryContainer>
        <footer/>
      </div>
    );
}

export default App;
