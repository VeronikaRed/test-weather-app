import {
    StyledWrapper,
    StyledDegree,
    StyledSection,
    StyledItem
} from './styles';

export const HomePage = ({ data }) => {
    const { main, name, weather } = data;
    let srcPicture = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
    return (
        <StyledWrapper>
            <h1>Weather in {name}</h1>
            <StyledSection>
                <StyledItem>
                    <div>
                        <p>Feels Like: {Math.round(main.feels_like)}℃</p>
                        <p>Humidity: {main.humidity}%</p>
                        <p>Pressure: {main.pressure}hPa</p>
                    </div>

                    <p>{weather[0].description}</p>
                </StyledItem>
                <StyledItem>
                    <img src={srcPicture} alt="imageWeather" />
                    <StyledDegree>{Math.round(main.temp)}℃</StyledDegree>
                </StyledItem>
            </StyledSection>
        </StyledWrapper>
    );
};
