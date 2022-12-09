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
  const [edit,setEdit] = useState(false);
  const [surat,setSurat] = useState(false);
  const [news,setNews] = useState();
  const [gosh,setGosh] = useState(false);
  const [tazelik,setTazelik] = useState();
  useEffect(()=>{
    getData();
  },[])

  const getData = ()=>{
    axiosInstance.get("/api/news?active=false").then((data)=>{
      console.log(data.data);
      setData(data.data);
    }).catch((err)=>{
      console.log(err);
    });

  }


  const columns = [
    {
      title: 'Ady ',
      dataIndex: 'title_tm',
    },
    {
      title: 'Tazelik',
      dataIndex: 'text_tm',
    },
    {
      title: 'Surat',
      dataIndex: 'uploaded',
      render:(text,record)=>(
        <div>
          <img className='object-contain h-[100px]' src={BASE_URL+"/"+record.picture} alt="surat" />
        </div>
      )
    },
   
    {
      title: 'Action',
      render: (text,record) => <>
      {/* <Popconfirm placement="top" title={"Are you sure"} onConfirm={handleConfirm} okText="Yes" cancelText="No">  */}
                        <Button onClick={()=>{setOpenChange(true);setOrder(record);}} type="primary" style={{borderRadius: "7px"}}>Maglumat</Button>
                    {/* </Popconfirm> */}
                    <Popconfirm placement="top" title={"Are you sure"} onConfirm={()=>Reject(record.id)} okText="Yes" cancelText="No"> 
                        <Button type="primary" style={{borderRadius: "7px", marginLeft: "10px"}}> Active</Button>
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
    axiosInstance.patch("/api/news/active/"+id).then((data)=>{
      message.success("Aktiwe Edildi!");
      getData()
    }).catch((err)=>{
      console.log(err);
      message.warn("Gaytadan Barlan!")
    })
  }

  const editSurat = ()=>{
    const formData = new FormData();
    formData.append("picture",files[0]);
    formData.append("id",order?.id);

    axiosInstance.post("/api/news/update/file",formData).then((data)=>{
        message.success("Surat Tazelendi!");
        getData();
        setSurat(false);
        setOpenChange(false);
    }).catch((err)=>{
        console.log(err);
        message.warn("Tazeden Barlan!")
    })
  }

  const editData = ()=>{
    axiosInstance.patch("/api/news/update",{
        title_tm:news.title_tm,
        title_ru:news.title_ru,
        title_en:news.title_en,
        text_tm:news.text_tm,
        text_ru:news.text_ru,
        text_en:news.text_en,
        id:order?.id
    }).then((data)=>{
        message.success("Maglumatlar Uytgedildi!");
        getData();
        setEdit(false);
        setOpenChange(false);
    })
  }

  const TazelikGosh = ()=>{
    if(tazelik.title_tm && tazelik.title_ru && tazelik.title_en && tazelik.text_en && tazelik.text_ru && tazelik.text_tm){
        const formData = new FormData();
        formData.append("title_tm",tazelik.title_tm)
        formData.append("title_ru",tazelik.title_ru)
        formData.append("title_en",tazelik.title_en)
        formData.append("text_en",tazelik.text_en)
        formData.append("text_ru",tazelik.text_ru)
        formData.append("text_tm",tazelik.text_tm)
        formData.append("picture",files[0]);
        axiosInstance.post("/api/news/create",formData).then((data)=>{
            message.success("Doredildi!");
            getData();
            setGosh(false);
            setTazelik();
        }).catch((err)=>{
            console.log(err);
            message.warn("Tazeden Barlan!")
        })
    }else{
        message.warn("Maglumatlary doly Girizin!")
    }
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
            <h2>Maglumat:</h2>
            <p className='mb-0'>Ady tm: {order?.title_tm}</p>
            <p className='mb-0'>Ady ru: {order?.title_ru}</p>
            <p>Ady en: {order?.title_en}</p>

            <p className='mb-0'>Habar tm: {order?.text_tm}</p>
            <p className='mb-0'>Habar ru: {order?.text_ru}</p>
            <p >Habar en: {order?.text_en}</p>
            <img className='object-contain h-[300px]' src={BASE_URL+"/"+order?.picture}/>
         
          <div className='w-full mt-4 flex justify-start'>
            <Button onClick={()=>{setEdit(true);setNews(order)}} className='mr-[30px]' type="primary" style={{borderRadius: "7px"}}>Uytget</Button>
            <Button onClick={()=>setSurat(true)}  type="primary" style={{borderRadius: "7px"}}>Surat</Button>
          </div>
          </div>
    </Drawer>
    <Drawer
      width={500}
      placement="right"
      closable={true}
      mask={true}
      maskClosable={true}
      onClose={()=>{setEdit(false);}}
      visible={edit}>
         <div style={{width:"100%"}}>
             <input value={news?.title_tm} onChange={(e)=>setNews({...news,title_tm:e.target.value})} className='h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='title_tm' />
             <input value={news?.title_ru} onChange={(e)=>setNews({...news,title_ru:e.target.value})} className='h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='title_ru' />
             <input value={news?.title_en} onChange={(e)=>setNews({...news,title_en:e.target.value})} className='h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='title_en' />
             <textarea rows={5} value={news?.text_tm} onChange={(e)=>setNews({...news,text_tm:e.target.value})} className='h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='text_tm' />
             <textarea rows={5} value={news?.text_ru} onChange={(e)=>setNews({...news,text_ru:e.target.value})} className='h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='text_ru' />
             <textarea rows={5} value={news?.text_en} onChange={(e)=>setNews({...news,text_en:e.target.value})} className='h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='text_en' />
             <button onClick={()=>{active && editData()}} className={`${ active && "!bg-blue !text-white "} bg-[#DEE6F9] h-[50px] rounded-[5px] w-full mt-4 text-[18px] font-sans text-blue`}>Send</button>

          </div>
      </Drawer>
      <Drawer
      width={500}
      placement="right"
      closable={true}
      mask={true}
      maskClosable={true}
      onClose={()=>setSurat(false)}
      visible={surat}>
             <DropFileInput  onFileChange={(files) => onFileChange(files)} />
             <button onClick={()=>{active && editSurat()}} className={`${ active && "!bg-blue !text-white "} bg-[#DEE6F9] h-[50px] rounded-[5px] w-full mt-4 text-[18px] font-sans text-blue`}>Send</button>

      </Drawer>
      <Drawer
      width={500}
      placement="right"
      closable={true}
      mask={true}
      maskClosable={true}
      onClose={()=>setGosh(false)}
      visible={gosh}>
             <input value={tazelik?.title_tm} onChange={(e)=>setTazelik({...tazelik,title_tm:e.target.value})} className='h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='title_tm' />
             <input value={tazelik?.title_ru} onChange={(e)=>setTazelik({...tazelik,title_ru:e.target.value})} className='h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='title_ru' />
             <input value={tazelik?.title_en} onChange={(e)=>setTazelik({...tazelik,title_en:e.target.value})} className='h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='title_en' />
             <textarea rows={5} value={tazelik?.text_tm} onChange={(e)=>setTazelik({...tazelik,text_tm:e.target.value})} className='h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='text_tm' />
             <textarea rows={5} value={tazelik?.text_ru} onChange={(e)=>setTazelik({...tazelik,text_ru:e.target.value})} className='h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='text_ru' />
             <textarea rows={5} value={tazelik?.text_en} onChange={(e)=>setTazelik({...tazelik,text_en:e.target.value})} className='h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4' type="text" placeholder='text_en' />
              <DropFileInput  onFileChange={(files) => onFileChange(files)} />
             <button onClick={()=>{active && TazelikGosh()}} className={`${ active && "!bg-blue !text-white "} bg-[#DEE6F9] h-[50px] rounded-[5px] w-full mt-4 text-[18px] font-sans text-blue`}>Send</button>

      </Drawer>
      <div className='w-full h-[50px] p-0 flex justify-between '>
            <h2 className='leading-[50px] ml-[50px] text-sans text-[24px]'>Tazelikler</h2>
            <Button onClick={()=>{setGosh(true);}} className='h-[40px] mt-[10px] mr-[50px] !rounded-[12px]' type='primary'>Tazelik Gosh</Button>
      </div>
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