import React from "react";
import CoursesContainer from "./CoursesContainer.js";

function CategoryContainer(props) {
    return (
        <div className="category_container">
            <h2 className="header">{props.data['header']}</h2>
            <p className="description">{props.data['description']}</p>
            <button type="button" className="button">Explore {props.data['category']}</button>
            <CoursesContainer data={props.data}></CoursesContainer>
        </div>
    );
}

export default CategoryContainer;
