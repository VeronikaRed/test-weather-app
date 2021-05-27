import PT from 'prop-types';

import { Input } from '../Input';
import { Button } from '../Button';
import {
    StyledHeader,
    StyledInputWrapper,
    StyledSearch,
    StyledHeaderWidthLimiter
} from './styles';

export const Header = ({
    search,
    isSearching,
    onChangeSearch,
    onSearchWeather,
    onKeyDown
}) => {
    return (
        <StyledHeader>
            <StyledHeaderWidthLimiter>
                <StyledSearch>
                    <StyledInputWrapper>
                        <Input
                            type="text"
                            name="search"
                            placeholder="Search weather"
                            value={search}
                            onChange={onChangeSearch}
                            onKeyDown={onKeyDown}
                        />
                    </StyledInputWrapper>

                    <Button onClick={onSearchWeather} disabled={isSearching}>
                        {isSearching ? 'Searching' : 'Get Weather'}
                    </Button>
                </StyledSearch>
            </StyledHeaderWidthLimiter>
        </StyledHeader>
    );
};

Header.propTypes = {
    search: PT.string.isRequired,
    onChangeSearch: PT.func.isRequired,
    onSearchWeather: PT.func.isRequired,
    isSearching: PT.bool.isRequired,
    onKeyDown: PT.func.isRequired
};
