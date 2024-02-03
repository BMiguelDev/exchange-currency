import styled from "styled-components";

import LoadingSpinner from "../LoadingSpinner";

interface PropTypes {
    className?: string;
    fontSize: string;
    marginTop: string
}

export const StyledLoadingSpinner = styled(LoadingSpinner)<PropTypes>`
    font-size: ${(props) => props.fontSize};
    margin-top: ${(props) => props.marginTop};
`;
