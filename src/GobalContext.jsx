import React,{useContext,createContext,useState} from 'react'

const contextProvider = createContext();




export const getGlobalContext = () =>{
    return useContext(contextProvider)} // we are supposed to return value here to return is required


const GobalContext = (props) => {
    

    const[isSidebar,setIsSidebar] = useState(false);
    const[isModal,setIsModal] = useState(false);

    function openSidebar(){
         setIsSidebar(true)
    }

    function closeSidebar(){
         setIsSidebar(false)
    }

    function openModal(){
        setIsModal(true)
    }

    function closeModal(){
         setIsModal(false)
    }
  return (

    <contextProvider.Provider value={{isSidebar,isModal,openSidebar,closeSidebar,openModal,closeModal}}>
      {props.children}
    </contextProvider.Provider>
    
  )
}

export default GobalContext