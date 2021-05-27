import styled from 'styled-components';

export const StyledSection = styled.div`
    display: flex;
    column-gap: 10px;
    align-content: space-around;
    line-height: 26px;
    margin-left: ${props => props.theme.margin.lg};
`;
