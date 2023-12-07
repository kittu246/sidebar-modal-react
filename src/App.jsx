import { getGlobalContext } from "./GobalContext";
import Modal from "./Modal";
import SideBar from "./SideBar";
const App = () => {

  const {openSidebar,openModal} = getGlobalContext();

  console.log(openSidebar)


  return <section className="appbody">
  <button onClick={openModal}>Show Modal</button>
  <button onClick={openSidebar}>Show Sidebar</button>
  <Modal/>
  <SideBar/>
  </section>;
};
export default App;
