


import { useData } from "./DataContext"



const FormData = () => {
  const {addItem}= useData()
  
  
  const{name,setname,AddressOne,
    setAddressOne,
    
    City,
    setCity,
    State,
    setState,
    pinCode,
    setpinCode,
    orderNumber,
    
    UtCode,
    setUtCode,
    Customername,
    setCustomername,
    CustomerAddressOne,
    setCustomerAddressOne,
    CustomerCity,
   
    setCustomerCity,
    CustomerState,
    setCustomerState,CustomerpinCode,

    setCustomerpinCode,
    Pan,
    setPan,
    GstNumber,
    setGstNumber,
    setDescription,taxType,description,unitPrice,setUnitPrice,quantity,setQuantity,taxRate,setTaxRate,setTaxType,handleImageChange,setOrderNumber}= useData()
    

    
  return (
    <section className="w-2/4">
      <div className="text-center"> 
        <h1 className="text-center font-medium">Seller Details</h1>
        <div className="flex flex-wrap mx-10 items-center gap-4">
      <div>  
      <h1>Seller Name:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter customer name" value={name} onChange={(e)=>setname(e.target.value)}/>
      </div>
      <div>
      <h1>Address One:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter Address one" value={AddressOne} onChange={(e)=>setAddressOne(e.target.value)}/>
      </div>
      
      <div>
      <h1>City:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter City" value={City} onChange={(e)=>setCity(e.target.value)}/>
      </div>
      <div>
      <h1>State:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter Address three" value={State} onChange={(e)=>setState(e.target.value)}/>
      </div>
      <div>
      <h1>PinCode:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="number" required placeholder="Enter PinCode" value={pinCode} onChange={(e)=>setpinCode(e.target.value)}/>
      </div>
      
      <div>
      <h1>PAN No:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter PinCode" value={Pan} onChange={(e)=>setPan(e.target.value)}/>
      </div>
      <div>
      <h1>GST Registration No:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter PinCode" value={GstNumber} onChange={(e)=>setGstNumber(e.target.value)}/>
      </div>
      <div>
      <h1>Order Date:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="date" required placeholder="Enter orderDate" value={orderNumber} onChange={(e)=>setOrderNumber(e.target.value)}/>
      </div>
      </div>
      </div>

      <div className="text-center "> 
        <h1 className="text-center font-medium">Customer Details</h1>
        <div className="flex flex-wrap mx-10 items-center gap-4">
      <div>  
      <h1>Customer Name:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter customer name" value={Customername} onChange={(e)=>setCustomername(e.target.value)}/>
      </div>
      <div>
      <h1>Address One:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter Address one" value={CustomerAddressOne} onChange={(e)=>setCustomerAddressOne(e.target.value)}/>
      </div>
      
      <div>
      <h1>City:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter City" value={CustomerCity} onChange={(e)=>setCustomerCity(e.target.value)}/>
      </div>
      <div>
      <h1>State:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" required placeholder="Enter State" value={CustomerState} onChange={(e)=>setCustomerState(e.target.value)}/>
      </div>
      <div>
      <h1>PinCode:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="number" required placeholder="Enter PinCode" value={CustomerpinCode} onChange={(e)=>setCustomerpinCode(e.target.value)}/>
      </div>
      <div>
      <h1>State/UT Code:</h1>
      <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="number" required placeholder="Enter UT/Code" value={UtCode} onChange={(e)=>setUtCode(e.target.value)}/>
      </div>
      
      </div>
      <h1 className="text-center font-medium">Customer Items:</h1>
      <div className="flex flex-wrap mx-10 items-center gap-4">
      <div>
        <h3>Description</h3>
        <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <h3>Unit Price</h3>
        <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="number" value={unitPrice} onChange={e => setUnitPrice(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <h3>Qty</h3>
        <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="number"    onChange={e => setQuantity(parseInt(e.target.value) || 1)} />
      </div>
      
      <div>
        <h3>Tax Rate (%)</h3>
        <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 " type="number" value={taxRate} onChange={e => setTaxRate(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <h3>Tax Type</h3>
        <input className="text-sm py-2 px-4  ring-2 ring-sky-300 focus:outline-none focus:ring focus:ring-sky-500 "  type="text" value={taxType} onChange={e => setTaxType(e.target.value)} />
      </div>
      
      
      <button className="px-4 py-2 bg-sky-500 text-white text-center mt-6 font-medium rounded-md" onClick={addItem}>Add Item</button>
      </div>
      </div>
      <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleImageChange} />
      
      
    </div>

      
    </section>
  )
}

export default FormData