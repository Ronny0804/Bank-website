import React from 'react'
const Message = ({msg,showModal,type,closeModal}) => {
    return (
        <div className={`black-scree ${showModal&&'show'}`}>
            <div className='message-box'>
              
              <p className={type}>{msg===undefined?"uid is not valid":"valid"}</p>
              <button onClick={()=>closeModal(false)}>Ok</button>
            </div>
        </div>
        
    )
}

export default Message