import { StyledWrapper } from './styles';

export const ErrorPage = ({ hasError }) => {
    return (
        <StyledWrapper>
            <div>{hasError.errorMessage}</div>
        </StyledWrapper>
    );
};
