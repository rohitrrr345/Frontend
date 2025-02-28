import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraBaseProvider, ColorModeScript,theme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from './store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ChakraBaseProvider theme={theme}>
     
     <App />
  </ChakraBaseProvider>
    </Provider>
   
   
  </StrictMode>,
)
