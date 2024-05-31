import  { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [name, setName] = useState("Rohit Mane");
  const [AddressOne, setAddressOne] = useState("Tardeo Tulwiwadi");
  const [Addresstrwo, setAddresstrwo] = useState("rarkord");
  const [City, setCity] = useState("Mumbai");
  const [State, setState] = useState("Maharashtra");
  const [pinCode, setPinCode] = useState(400019);
  const [UtCode, setUtCode] = useState(17);
  const [Pan, setPan] = useState("LHSRT7654JJ");
  const [GstNumber, setGstNumber] = useState("09AGBPJ7615D1LY");
  const [orderNumber, setOrderNumber] = useState(null);

  const [Customername, setCustomername] = useState("Shyam Mane");
  const [CustomerAddressOne, setCustomerAddressOne] = useState("Grand Road Near Station");
 
  const [CustomerCity, setCustomerCity] = useState("Mumbai");
  const [CustomerState, setCustomerState] = useState("Maharashtra");
  const [CustomerpinCode, setCustomerpinCode] = useState(100000);

  const [description, setDescription] = useState('Pants');
  const [unitPrice, setUnitPrice] = useState(500);
  const [quantity, setQuantity] = useState(10);
  const [taxRate, setTaxRate] = useState(18);
  const [taxType, setTaxType] = useState('IGST');
  const [netAmount, setNetAmount] = useState();
  
  const [items, setItems] = useState([]);
  const [image, setImage] = useState(null);

  

  useEffect(() => {
    const calculatedNetAmount = unitPrice * quantity;
    setNetAmount(calculatedNetAmount);
  
  }, [unitPrice, quantity, taxRate]);

  const addItem = () => {
    const newItem = {
      description,
      unitPrice,
      quantity,
      netAmount,
      taxRate,
      taxType,
      taxAmount: netAmount * (parseFloat(taxRate) / 100), 
      totalAmount: netAmount + (netAmount * (parseFloat(taxRate) / 100)), 
    };

    setItems(prev=> [...prev, newItem]);

    setDescription("");
    setUnitPrice();
    setQuantity();
    setTaxRate();
    setTaxType();
  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };
  const handleImageUpload = () => {
      
    console.log(image);
    
  };

  return (
    <DataContext.Provider value={{
      name, setName, AddressOne, setAddressOne, Addresstrwo, setAddresstrwo, City, setCity, State, setState, pinCode, setPinCode, UtCode, setUtCode,
      Customername, setCustomername, CustomerAddressOne, setCustomerAddressOne, CustomerCity, setCustomerCity,
      CustomerState, setCustomerState, CustomerpinCode, setCustomerpinCode, Pan, setPan, GstNumber, setGstNumber,
      description, setDescription, unitPrice, setUnitPrice, netAmount, quantity, setQuantity, taxRate, setTaxRate,
      taxType, setTaxType, orderNumber, setOrderNumber, addItem, items, setItems,image, setImage,handleImageChange,handleImageUpload
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
