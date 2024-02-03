import React from 'react';
import { components } from "react-select";

import { ReactComponent as DropDownIcon } from "../assets/icons/dropdown-icon.svg";

// Component to integrate a custom dropdown icon into the react-select component
const DropdownIndicator = (props: any) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <DropDownIcon />
            </components.DropdownIndicator>
        )
    );
};

export default DropdownIndicator
