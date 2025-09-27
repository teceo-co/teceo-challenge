import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import GlobalAppBar from './modules/global/GlobalAppBar';
import HomePage from './modules/home/HomePage';
import theme from './theme/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/orders" element={<h1>orders</h1>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
