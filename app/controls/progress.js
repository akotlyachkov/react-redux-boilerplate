import React from "react";
export const Progress = ({progress}) => {
    if (progress)
        return (<div>ждем...</div>);
    else
        return null;
};