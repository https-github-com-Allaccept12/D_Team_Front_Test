import React from "react";

import { Route, Switch, Link } from "react-router-dom";
import { TendencyTest, MyInterests, NotFound } from "./Tendency";

import tw from "tailwind-styled-components";



function App() {

  // 매번 빌드하고 디플로이 하기 전에 <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script> 를 추가해줄것!
  
  return (
    <>
    <div className="w-full mx-auto bg-white">

      <Switch>

       <Route exact path="/" component={TendencyTest} />
       <Route exact path="/Result/:name" component={MyInterests} />

            <Route component={NotFound} />
            </Switch>
            
            </div>
          
  </>
  );
}

export default App;
