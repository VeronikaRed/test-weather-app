import styled from 'styled-components';
import { StyledButton } from '../../components/Button';

export const StyledErrorButton = styled(StyledButton)`
    margin: ${props => props.theme.margin.md};
    background: #e0e0e0;
`;
