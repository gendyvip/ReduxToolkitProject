import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch,useSelector} from 'react-redux';
import { clearCart } from '../redux/features/cart/cartSlice';
import {closeModal} from '../redux/features/modal/modalSlice';

export default function Modaly() {
 const dispatch = useDispatch();
 const {isOpen} = useSelector((store)=>store.modal)
  return (
    <Modal show={isOpen} onHide={()=>{dispatch(closeModal())}}>
    <Modal.Header closeButton>
      <Modal.Title><h4>Remove Items</h4></Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure to remove all items from your shopping cart?</Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={()=>{dispatch(closeModal())}}>
        Cancel
      </Button>
      <Button variant="success" onClick={()=>{
         dispatch(clearCart())
        dispatch(closeModal())}
        }>
       Confirm
      </Button>
    </Modal.Footer>
  </Modal>
    )
}
