import React from "react";
export const Progress = (props) => {
    if (props.progress)
        return (<div>ждем...</div>);
    else
        return null;
};