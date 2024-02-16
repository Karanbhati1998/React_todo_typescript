import { ThemeProvider } from '@emotion/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { theme } from './theme.ts'
import { CssBaseline } from '@mui/material'
import store from './redux.ts'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
  </ThemeProvider>,
  </Provider>
)
