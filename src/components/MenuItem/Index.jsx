import React from "react";
import {LinkIcon,  LinkArea } from "./styled";
import { Link } from "react-router-dom";

 const MenuItem  = (props)=> {
    let active = window.location.pathname === props.link;

    return (
        <LinkArea  className="nav-link" $active={active}>
        <Link to={props.link} data-tooltip-content={props.title} data-tooltip-id="tip-right">
            <LinkIcon src={props.icon} />
        </Link>
    </LinkArea>

    );
}
export default MenuItem;
