import React, { Suspense } from "react";
import { Route} from "react-router-dom";
// import { isLogin } from "../utils";
import { Layout } from "antd";
// import Headers from "../components/header";
// import Footer from "../components/footer";
import { Loading } from "../components/loading";
import {useHistory} from "react-router-dom";

import "antd/dist/antd.css";
import { isLogin } from "../utils/index";
// import Home from "../pages/home/home";
import SideBar from "../components/sideBar";
import { useSizeComponents } from "../components/sizeComponent";
const Headers = React.lazy(()=>import("../components/header"));
const Footer = React.lazy(()=>import("../components/footer"));
// const { Content } = Layout;

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const history = useHistory();
  
  const [width,height] = useSizeComponents();
  return (
    <Route
      {...rest}
      render={(props) =>
        
        isLogin()  ?  (<Layout >
            <Suspense fallback={<Loading />}>
                <Headers />
            </Suspense>
          {width>1000 ? <div className="site-layout" style={{display:"inline-flex",width:"90%",margin:"0 auto"}}>
             <div style={{
                  minHeight: "100vh", 
                  // width:"25%",
                  minWidth:"200px",
                  position:"sticky",
                  top:"10px"
                }}>
                    <SideBar/>
              </div>
              
              <div
                style={{
                  minHeight: "100vh",
                  minWidth:"75%", 
                }}
                className="site-layout-background main_content"
              >
                <Component {...props} />
              </div>
             
            </div>
            : <div className="site-layout" style={{display:"inline-flex",width:"90%",margin:"0 auto",flexWrap:"wrap"}}>
            <div style={{
                 minHeight: "50px", 
                 // width:"25%",
                 width:"320px",
                //  position:"sticky",
                //  top:"10px",
                 backgroundColor:"rgb(241,242,245)"

               }}>
                   <SideBar/>
             </div>
             
             <div
               style={{
                 minHeight: "100vh",
                 minWidth:"100%", 
                 marginTop:"-100px"
               }}
               className="site-layout-background main_content"
             >
               <Component {...props} />
             </div>
            
           </div>}
            <Suspense fallback={<Loading />}>
              <Footer />
            </Suspense>
          </Layout>)
          :(
            history.push({
              pathname:"/login"
            })
          )
      
      }
    />
  );
};

export default PublicRoute;
