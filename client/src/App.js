import { BrowserRouter as  Routes, Route} from "react-router-dom";
import { Spin } from "antd";
import React, { useState} from "react";
import Landing from "./components/landing/Landing";
import Navigation from "./components/nav/Navigation";

export default function App() {
  const [loading, setLoading] = useState(true)
  
   return (
        <>
            <Navigation />
            {loading ? (
                <div className="spin-large">
                    <Spin size="large" />
                </div>
            ) : ( 
                <Routes>
                    <Route exact path="/" component={Landing} />
                </Routes>
            )}
        </>
    );
}
