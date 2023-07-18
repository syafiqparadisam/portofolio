import { ChakraProvider } from "@chakra-ui/react"
import Home from "./pages/Home"
import Client from "./pages/Client"
import Portofolio from "./pages/Portofolio"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import { CardContext, card } from "./Hooks/CardContext"

function App() {
  return (
      <BrowserRouter>
        <ChakraProvider>
          <NavigationBar/>
            <Routes>
              <Route path="/" element={
                <CardContext.Provider value={card}>
                  <Home/> 
                </CardContext.Provider>
                }/>
              <Route path="/client" element={ <Client/> }/>
              <Route path="/portofolio" element={
              <CardContext.Provider value={card}>
                <Portofolio/> 
              </CardContext.Provider>
            
            }/>
            <Route path="/service" element={<h1>ONGOING</h1>}/>
            </Routes>
          <Footer/>
        </ChakraProvider>
      </BrowserRouter>
  )
}

export default App
