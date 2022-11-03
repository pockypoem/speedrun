import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm font-semibold text-purple-600 border border-purple-200 rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Update
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
        onSubmit={(e) => {
          handleClose();
          e.preventDefault();
          props.updateEmployee(props.id, name, role);
        }}
        id="editmodal" 
        className="w-full max-w-sm" 
        >
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" for="name">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input 
                className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" 
                id="name" 
                type="text" 
                value={name}
                onChange = {(e) => { setName(e.target.value); }}
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" for="role">
                Role
              </label>
            </div>
            <div className="md:w-2/3">
              <input 
                className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" 
                id="role" 
                type="text" 
                value={role}
                onChange={(e) => {setRole(e.target.value)}}
              />
            </div>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='px-4 py-2 font-bold text-white rounded bg-slate-400 hover:bg-slate-500' onClick={handleClose}>
            Close
          </button>
          <button 
            className='px-4 py-2 font-bold text-white bg-purple-600 rounded hover:bg-purple-700' 
            form='editmodal'>
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;