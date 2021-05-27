import { ThemeProvider } from 'styled-components';
import { LayoutContainer } from './containers';
import { GlobalStyles } from './styles';
import { theme } from './theme';
import { Layout } from './components';
import { HomePage, ErrorPage } from './pages';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LayoutContainer>
                {({ data, hasError, onReloadPage, ...other }) => {
                    if (hasError.flag) {
                        return (
                            <ErrorPage
                                hasError={hasError}
                                onReloadPage={onReloadPage}
                            ></ErrorPage>
                        );
                    } else {
                        return (
                            <Layout {...other}>
                                {data && <HomePage data={data} />}
                            </Layout>
                        );
                    }
                }}
            </LayoutContainer>
        </ThemeProvider>
    );
};
