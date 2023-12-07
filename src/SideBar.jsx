import React from 'react'
import { links,social } from './data';
import { getGlobalContext } from './GobalContext';

const SideBar = () => {

  const {isSidebar,closeSidebar}  = getGlobalContext();

  return (
    isSidebar &&
    <section className='sideBar'>
        <h2>Sidebar</h2>
      <div className="links">
        {links.map(({id,url,text,icon}) =>{
           
           return (
            <a key={id} href={url}>
                <div>{icon}</div>
                <p>{text}</p>
            </a>
           )
        })}
      </div>
      <div className='social'>
       { social.map(({id,url,icon}) =>{

        return(
            <a  key={id} href={url}>
            {icon}
        </a>
        )
       })}

      </div>

      <button onClick={closeSidebar}> close</button>


    </section>
  )
}

export default SideBar