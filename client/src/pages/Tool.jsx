import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getData, reset } from "../features/data/dataSlice";

function Tool() {

    //const { user } = useSelector((state) => state.auth)
    // const { isLoading, isError, isSuccess, message } = useSelector(
    //   (state) => state.tickets
    // )
    const { data, user_id, isError, isLoading, isSuccess, message } = useSelector(
        (state) => state.data
      ); 
    const [name] = useState(data.name)
    const [email] = useState(data.email)
    const [product, setProduct] = useState('iPhone')
    const [description, setDescription] = useState('')
  
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getData)
      if (isError) {
        //toast.error(message)
      }
  
      if (isSuccess) {
        //dispatch(reset())
      }

      if(Object.keys(data) === 0)
      {
          console.log('hey')
      }
  
     // dispatch(reset())
    }, [dispatch, isError, isSuccess, message])
  
    const onSubmit = (e) => {
      e.preventDefault()
      console.log(product)
      //dispatch(createTicket({ product, description }))
    }



  return (
    <div className='flex flex-col items-center justify-center w-full  bg-teal-600'>
            <>
      {/* //<BackButton url='/' /> */}
      <section className='heading'>
        <h1>Create Question</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' className='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type='text' className='form-control' value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='iPhone'>iPhone</option>
              <option value='Macbook Pro'>Macbook Pro</option>
              <option value='iMac'>iMac</option>
              <option value='iPad'>iPad</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
        
    </div>
  )
}

export default Tool