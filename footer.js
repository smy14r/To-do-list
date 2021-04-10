import React from 'react';

function Footer(props){

    const completedStyle = {
        fontStyle: "italic",
        color: "grey",
        textDecoration: "line-through"
    }



    return (
        <div className="footer">
            <input 
            type="checkbox" 
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}
            />
            <p style = {props.item.completed ? completedStyle: null}>{props.item.text}</p>
        </div>
    )
}

export default Footer
