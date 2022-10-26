import React, { lazy, Suspense } from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";


import history from "./history";
import {   About, Contacts, Home, News, Note, OneNews, Personal, Profile, Services } from "../pages/index";
import ScrollIntoView from "./ScrollIntoView";
import { Loading } from "../components/loading"; 
// import PublicRoute from "./PublicRoute";
 

const PrivateRoute = lazy(() => import("./PrivateRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const App = () => {
 
  return (
    // forceRefresh={true}
    // history={history}
    <BrowserRouter  >
      <ScrollIntoView >
        <Suspense  fallback={<Loading />}>   
          <Switch>
            
             {/* <PrivateRoute
              restricted={false}
              component={FirstPage}
              path="/"
              exact
            />
             <PrivateRoute
              restricted={true}
              component={FirstPage}
              path="/"
              exact
            /> */}
            {/* <Route path="/about" exact component={News} />  */}
            <PrivateRoute
              restricted={true}
              component={Home}
              path="/"
              exact
            />
              <PrivateRoute
              restricted={true}
              component={About}
              path="/about"
              exact
            />
             <PrivateRoute
              restricted={true}
              component={Services}
              path="/services"
              exact
            />
             <PrivateRoute
              restricted={true}
              component={News}
              path="/news"
              exact
            />
             <PrivateRoute
              restricted={true}
              component={OneNews}
              path="/news/:id"
              exact
            />
             <PrivateRoute
              restricted={true}
              component={Contacts}
              path="/contacts"
              exact
            />
          
          <PublicRoute
              restricted={true}
              component={Personal}
              path="/personal"
              exact
            />
          <PublicRoute
            restricted={true}
            component={Note}
            path="/note"
            exact
          />
          <PublicRoute
            restricted={true}
            component={Profile}
            path="/profile"
            exact
          />
           
            <PrivateRoute
              component={Home}
              path="*"
            />
            {/* <Route path="*" component={Home} /> */}
          </Switch>
        </Suspense>
      </ScrollIntoView>
    </BrowserRouter>
  );
};

export default App;
