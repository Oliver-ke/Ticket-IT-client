import { Modal, Button } from 'antd';
import React from 'react'
const MyModal = (props) => {
 let countModal = null;
 const {info,success,warning,error, confirm} = Modal
 const properties = {
  title: props.title,
  content: (
      <div>
        <p>{props.mssg}</p>
      </div>
    ),
    onOk: () => {props.okClick()},
    onCancel: props.onCancel ? () => {} : null
 }
 if(props.onCancel){
   properties.onCancel = () => {}
 }

 if(props.type === 'success'){
   countModal = success(properties)
 }else if(props.type === 'error'){
   countModal = error(properties)
 }else if(props.type === 'warning'){
   countModal = warning(properties)
 }else if(props.type === 'confirm'){
  countModal = confirm(properties)
}

  return countModal
}

export default MyModal

