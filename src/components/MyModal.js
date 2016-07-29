import React, { PropTypes } from 'react'
import { Button ,ButtonGroup,DropdownButton ,MenuItem ,Modal,Tabs,Tab,FormGroup ,ControlLabel ,FormControl ,HelpBlock ,Glyphicon
,InputGroup ,
Form ,
Col ,
Checkbox ,
Radio,
 } from 'react-bootstrap';
import styles from "./MyModal.css"

const MyModal = ({ visable, children, onClick ,title ,content,dialogClassName}) => {
  // if (active) {
  //   return <span>{children}</span>
  // }

  // return (
  //   <a href="#"
  //      onClick={e => {
  //        e.preventDefault()
  //        onClick()
  //      }}
  //   >
  //     {children}
  //   </a>
  // )

  // return ( <Modal
  //         bsSize="large"
  //         show={visable}
  //         onHide={e => {
  //            e.preventDefault()
  //            // onClick()
  //            alert("onHide")
  //          }}
  //         container={this}
  //         aria-labelledby="contained-modal-title-lg"
  //       >
  //         <Modal.Header closeButton>
  //           <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           {children}
  //           {content}
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button onClick={e => {
  //            e.preventDefault()
  //            onClick()
  //            // alert("onHide")
  //          }}>Close</Button>
  //         </Modal.Footer>
  //       </Modal>);
  return (<Modal
          // {...this.props}
          show={visable}
          // onHide={this.hideModal}
          dialogClassName={styles[dialogClassName]}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {content}
          </Modal.Body>
          <Modal.Footer>
            
             <Button onClick={e => {
              e.preventDefault()
              onClick()
            }}>Close</Button>
          </Modal.Footer>
        </Modal>);
}

MyModal.propTypes = {
  visable: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MyModal