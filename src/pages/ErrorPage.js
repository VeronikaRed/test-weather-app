import { StyledWrapper, StyledErrorButton } from './styles';

export const ErrorPage = ({ hasError, onReloadPage }) => {
    return (
        <StyledWrapper>
            <div>{hasError.errorMessage}</div>
            <StyledErrorButton onClick={onReloadPage}>Reload</StyledErrorButton>
        </StyledWrapper>
    );
};
