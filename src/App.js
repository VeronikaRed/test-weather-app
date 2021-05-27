import { ThemeProvider } from 'styled-components';
import { LayoutContainer } from './containers';
import { GlobalStyles } from './styles';
import { theme } from './theme';
import { Layout } from './components';
import { HomePage } from './pages';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LayoutContainer>
                {({ data, ...other }) => (
                    <Layout {...other}>
                        {data && <HomePage data={data} />}
                    </Layout>
                )}
            </LayoutContainer>
        </ThemeProvider>
    );
};
