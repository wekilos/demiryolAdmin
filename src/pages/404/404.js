import React ,{useContext} from "react";
import { Result, Button } from "antd";
import { SebedimContext } from "../../context/Sebedim";

const NotFound = () => {
  const {dil}=useContext(SebedimContext);
  return (
    <Result
    style={{marginTop:"100px"}}
      status="404"
      title="404"
      subTitle={dil==="TM"?"Sahypa tapylmady":"Page not found!"}
      extra={<Button type="primary" >{dil==="TM"?"Bas shypa":"Main page"}</Button>}
    />
  );
};

export default NotFound;
