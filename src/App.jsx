import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Receiver } from "./components";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="730205378477-rbg2kql5et1pndus7vmv6itcm0d3d8o4.apps.googleusercontent.com" scopes={['https://mail.google.com/']}>
      <BrowserRouter>
        <div className="relative z-0 bg-black">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Works />
          <StarsCanvas  />
          <Receiver />
          </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
