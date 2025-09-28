import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ApplicationContextProvider } from './modules/global/contexts/ApplicationContext';
import GlobalAppBar from './modules/global/GlobalAppBar';
import HomePage from './modules/home/HomePage';
import OrdersPage from './modules/orders/OrdersPage';
import theme from './theme/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ApplicationContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalAppBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </Routes>
          </ThemeProvider>
        </ApplicationContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
