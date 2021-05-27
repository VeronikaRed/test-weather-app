import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: ${props => props.theme.padding.md};
    img {
        max-width: 15rem;
    }
`;
