import { RouterProvider } from "react-router-dom"
import router from "./router"
import { StockContextProvider } from "./contexts/stockContext"

function App() {

  return (
 <StockContextProvider>
       <RouterProvider router={router} />
 </StockContextProvider>
  )
}

export default App