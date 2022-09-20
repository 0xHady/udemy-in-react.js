import React from "react";

function Card(props) {
    return (
        <div className="course">
            <img
                src={`${props.course["image"]}`}
                alt={`${props.course["headline"]}`}
            ></img>
            <h4 className="title">{`${props.course["title"]}`}</h4>
            <h4 className="instructor">{`${props.course["instructors"][0]["name"]}`}</h4>
            <div>
                <span className="rating checked">
                    {"★".repeat(Math.floor(props.course["rating"]))}
                </span>
                <span className="rating">
                    {"★".repeat(5 - Math.floor(props.course["rating"]))}
                </span>
            </div>
            <div className="prices">
                <span className="price">E£{`${props.course["price"]}`}</span>
                <span className="old_price">
                    E£{`${props.course["old_price"]}`}
                </span>
            </div>
        </div>
    );
}

export default Card;
