import { useRef } from "react";
import ToastContainer from "./componenet/ToastContainer";
const App = () => {
  const toastRef  = useRef()
  const showToast = (message,type)=>{
    toastRef.current.addToast(message,type)
  }
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-slate-500 py-20">      
      <div className="flex space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"           
          onClick={()=>showToast("This is a success message!","success")}  
        >
          Success Toast
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"   
          onClick={()=>showToast("This is a warning message!","warning")}          
        >
          Warning Toast
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"   
          onClick={()=>showToast("This is an info message!","info")}             
        >
          Info Toast
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"    
          onClick={()=>showToast("This is a error message!","error")}          
        >
          Error Toast
        </button>
      </div>
      <ToastContainer ref={toastRef}></ToastContainer>
    </div>
  );
};

export default App;
