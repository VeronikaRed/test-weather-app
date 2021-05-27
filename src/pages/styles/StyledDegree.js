import styled from 'styled-components';

export const StyledDegree = styled.span`
    font-size: 52px;
    margin: ${props => props.theme.margin.md};
    text-shadow: 7px 0px 7px ${props => props.theme.primaryClr};
`;
