import React from "react";
import Card from "./Card";

function CourseContainer(props) {
    return (
        <div>
            {props.data["courses"].map((course) => {
                return <Card key={course["id"]} course={course}></Card>;
            })}
        </div>
    );
}

export default CourseContainer;
