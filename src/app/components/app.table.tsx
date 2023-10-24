'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import {  toast } from 'react-toastify';
import {mutate} from 'swr'
import  Link  from 'next/link';


interface IProps{
  blogs: IBlog[]
}

const Apptable=(props: IProps)=> {

  const {blogs} = props

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  const [showModalView, setShowModalView] = useState<boolean>(false); // Add this state variable
  const [selectedBlog, setSelectedBlog] = useState<IBlog | null>(null);

  const handelDel = (id: number) =>{

    if(confirm(`DO you want to del this blog(id = ${id})`)){

    fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => {if(res) {
        toast.success("Add a blog success") 
        
        mutate('http://localhost:8000/blogs')
        } 
      })
      .catch(error => console.error('day laf Error:', error)); 
  }
}
  return (
    <>
    <div className='mb-3' style={{display: "flex", justifyContent: "space-between"}}>
      <h3>Table </h3>
      <Button onClick={() => setShowModalCreate(true)}>Add New</Button>
    </div>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>NO</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      
      <tbody>
        {blogs.map(item =>{
          return(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                
                <Link href={`blogs/${item.id}`}>
                <Button>View </Button></Link>
                
                <Button variant='warning' className='mx-3' onClick={() => {
                  setBlog(item)
                  setShowModalUpdate(true)
                }}>Edit</Button>
                <Button variant='danger' onClick={() => handelDel(item.id)}>Del</Button>
              </td>
            </tr>
          )
        })}
      </tbody>
      
    </Table>
    <CreateModal 
      showModalCreate= {showModalCreate}
      setShowModalCreate = {setShowModalCreate}
    />
  <UpdateModal 
    showModalUpdate = {showModalUpdate}
    setShowModalUpdate = {setShowModalUpdate}
    blog = {blog}
    setBlog = {setBlog}
  />

    </>
  );
}

export default Apptable;