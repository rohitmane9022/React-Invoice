import { useRef } from "react";
import { useData } from "./DataContext";
import numberToWords from 'number-to-words';

import ReactToPrint from 'react-to-print';

const InvoicePages = () => {
  const {
    name,
    AddressOne,
    
    City,
    State,
    pinCode,
    UtCode,
    Customername,
    CustomerAddressOne,
    CustomerAddresstrwo,
    CustomerCity,
    CustomerState,
    CustomerpinCode,
    Pan,
    GstNumber,
    orderNumber,
    items,
    image,
  } = useData();

  const divRef = useRef();

  const totalAmount = items?.reduce((acc, item) => acc + (item.totalAmount || 0), 0);
  const amountInWords = numberToWords.toWords(totalAmount);

  return (
    <main className="px-14 w-1/2 mx-auto">
      <ReactToPrint 
      trigger={()=> <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Print / Download</button>} 
      content={()=>divRef.current}/>
      
      <div ref={divRef} className="invoice-content px-10 py-10">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-medium">Rohit.Invoice</h1>
          <div>
            <p className="text-lg font-medium">Tax Invoice/Bill of Supply/Cash Memo</p>
            <p className="text-end text-lg">(Original for Recipient)</p>
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-base font-bold">Sold By :</h3>
            <p>{name}</p>
            <p>{AddressOne}</p>
            
            <div className="flex">
              <p>{City}, {State}, {pinCode}</p>
            </div>
            <p>IN</p>
          </div>
          <div>
            <h3 className="text-base font-bold">Billing Address :</h3>
            <p>{Customername}</p>
            <p>{CustomerAddressOne}</p>
            
            <div className="flex">
              <p>{CustomerCity}, {CustomerState}, {CustomerpinCode}</p>
            </div>
            <p>IN</p>
            <p>State/UT Code: {UtCode}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-semibold">PAN No: <span className="font-normal"> {Pan}</span></p>
          <p className="font-semibold">GST Registration No:<span className="font-normal"> {GstNumber}</span></p>
        </div>
        <div className="text-end mb-4">
          <h3 className="text-base font-bold">Shipping Address :</h3>
          <p>{Customername}</p>
          <p>{CustomerAddressOne}</p>
          <p>{CustomerAddresstrwo}</p>
          <div className="flex justify-end">
            <p>{CustomerCity}, {CustomerState}, {CustomerpinCode}</p>
          </div>
          <p>IN</p>
          <p>State/UT Code: {UtCode}</p>
          <p>Place of supply: {CustomerState}</p>
          <p>Place of delivery: {CustomerState}</p>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-semibold">Order Number: <span className="font-normal"> 407-0768783-6061955</span> </p>
            <p>Order Date:{orderNumber}</p>
          </div>
          <div>
            <p className="font-semibold">Invoice Number :<span className="font-normal">IN-75307</span> </p>
            <p className="font-semibold">Invoice Details :<span className="font-normal">UP-158408221-2122</span> </p>
            <p className="font-semibold">Invoice Date :<span className="font-normal">{orderNumber}</span> </p>
          </div>
        </div>
        <table className="min-w-full bg-white border border-black">
          <thead>
            <tr className="bg-gray-100 border-b border-black">
              <th className="p-2 border-r border-black">Description</th>
              <th className="p-2 border-r border-black">Unit Price</th>
              <th className="p-2 border-r border-black">Qty</th>
              <th className="p-2 border-r border-black">Net Amount</th>
              <th className="p-2 border-r border-black">Tax Rate (%)</th>
              <th className="p-2 border-r border-black">Tax Type</th>
              <th className="p-2 border-r border-black">Tax Amount</th>
              <th className="p-2 border-r border-black">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b border-black">
                <td className="p-2 border-r border-black">{item.description}</td>
                <td className="p-2 border-r border-black">{item.unitPrice}</td>
                <td className="p-2 border-r border-black">{item.quantity}</td>
                <td className="p-2 border-r border-black">{item.netAmount}</td>
                <td className="p-2 border-r border-black">{item.taxRate}%</td>
                <td className="p-2 border-r border-black">{item.taxType}</td>
                <td className="p-2 border-r border-black">{item.taxAmount}</td>
                <td className="p-2 border-r border-black">{item.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between border-l border-r border-b border-black  p-2">
          <div className="text-left">
            <h3 className="text-xl font-bold">TOTAL:</h3>
            <p className="text-lg">₹{totalAmount.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">Amount in Words:</p>
            <p>{amountInWords} only</p>
          </div>
        </div>
        <div className="text-end border-b border-r border-l border-black px-2">
          <p className="font-semibold">For name: {name}</p>
          {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-15 h-10 ml-[515px]"/>}
          <p className="font-semibold">Authorized Signatory:</p>
        </div>
      </div>
      
    </main>
  );
};

export default InvoicePages;
