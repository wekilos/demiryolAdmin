import { Popconfirm, Table, Button, message,Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import { axiosInstance,BASE_URL } from '../../utils/axiosIntance';
import file from "../../img/file.png"; 
import DropFileInput from "./dropFile";
import { useHistory } from 'react-router-dom';

 







const Requests = () => {
  const history = useHistory();
  const [data,setData] = useState([]);
  const [openChange,setOpenChange] = useState(false);
  const [order,setOrder] = useState({});
  const [files,setFiles] = useState([]);
  const [active,setActive] = useState(false);
  const [code,setCode] = useState("");
  const [payBefore,setPayBefore] = useState("");
  const [payBeforeType,setPayBeforeType] = useState("");
  const [removeAll,setRemoveAll] = useState(false);
  useEffect(()=>{
    getData();
  },[])

  const getData = ()=>{
    axiosInstance.get("/api/order/all?status=1&active=true").then((data)=>{
      console.log(data.data);
      setData(data.data);
    }).catch((err)=>{
      console.log(err);
    });

  }


  const columns = [
    {
      title: 'No',
      dataIndex: 'surname',
      
      render:(text,record)=>(
        <div>
          {record?.lname}
        </div>
      )
    },
    {
      title: 'Edara ady',
      dataIndex: 'name',
      render:(text,record)=>(
        <div>
          {record?.User?.companyName}
        </div>
      )
    },
    {
      title: 'Ulanyjy',
      dataIndex: 'uploaded',
      render:(text,record)=>(
        <div>
          {record?.User?.fname}
        </div>
      )
    },
    {
      title: 'Bellik',
      dataIndex: 'message',
    },
   
    {
      title: 'Action',
      render: (text,record) => <>
      {/* <Popconfirm placement="top" title={"Are you sure"} onConfirm={handleConfirm} okText="Yes" cancelText="No">  */}
                        <Button onClick={()=>{setOpenChange(true);setOrder(record);}} type="primary" style={{borderRadius: "7px"}}>Accept</Button>
                    {/* </Popconfirm> */}
                    <Popconfirm placement="top" title={"Are you sure"} onConfirm={()=>Reject(record.id)} okText="Yes" cancelText="No"> 
                        <Button type="danger" style={{borderRadius: "7px", marginLeft: "10px"}}>Reject</Button>
                    </Popconfirm>
                    </>
    }
  ];



  const onFileChange = (files) => {
    console.log(files);
    files.length > 0 && setActive(true);
    files.length == 0 && setActive(true);
    setFiles(files);
  };

  const makeOrder = ()=>{
    if(code.length>0 && payBefore.length>0 && payBeforeType.length>0){
    const formData = new FormData();
    console.log("order",order)
    formData.append("id",order?.id);
    formData.append("code",code);
    formData.append("payBefore",payBefore);
    formData.append("payBeforeType",payBeforeType);
    files?.map((item)=>{
      formData.append("filess",item);
    })
    axiosInstance.post("/api/order/make",formData).then((data)=>{
      console.log(data.data);
      message.success("Ustunlikli!");
      getData();
      setOpenChange(false);
      setCode("");
      setPayBefore("");
      setPayBeforeType("");
      setFiles([]); 
      history.push({
        pathname:"/orders"
      })
    }).catch((err)=>{
      console.log(err);
    })
  }else{
    message.warn("Maglumatlary doly dolduryn!")
  }
  }

  const Reject = (id)=>{
    axiosInstance.patch("/api/order/cancel/"+id).then((data)=>{
      message.success("Yatyryldy!");
      getData()
    }).catch((err)=>{
      console.log(err);
      message.warn("Gaytadan Barlan!")
    })
  }

  return (
    <>
    <Drawer
      width={500}
      placement="right"
      closable={true}
      mask={true}
      maskClosable={true}
      onClose={()=>setOpenChange(false)}
      visible={openChange}>
          <div>
            <h2>Files:</h2>
             {order?.OrderDocs?.map((item)=>{
              console.log(BASE_URL+item.fileName);
              return <div style={{width:"100%",display:"flex"}}>
                 <a href={BASE_URL+"/"+item.fileName} target="_blank"> <img style={{marginRight:"10px",objectFit:"contain",height:"50px"}} src={file} alt="file"/></a>
                  <p style={{lineHeight:"50px"}}>{item.title}</p>
                </div>
             })}
          <div style={{width:"100%"}}>
             <input value={code} onChange={(e)=>setCode(e.target.value)} className='h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='Code No' />
             <input value={payBefore} onChange={(e)=>setPayBefore(e.target.value)} className='h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='payBefore' />
             <input value={payBeforeType} onChange={(e)=>setPayBeforeType(e.target.value)} className='h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='Currency (USD)' />
             <DropFileInput  onFileChange={(files) => onFileChange(files)} />
             <button onClick={()=>{active && makeOrder()}} className={`${ active && "!bg-blue !text-white "} bg-[#DEE6F9] h-[50px] rounded-[5px] w-full mt-4 text-[18px] font-sans text-blue`}>Send</button>

          </div>
          </div>
    </Drawer>
     <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: "72vh",
    }}
  />
  </>
  )
};

export default Requests;