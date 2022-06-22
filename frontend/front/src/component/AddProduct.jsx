import React from 'react'

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);

    const addProduct = async ()=>{
        if(!name || !price || !company || !category){
            setError(true)
            return false
        }
        console.log(name,price,category,company)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId)
        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.log(result)
    }
  return (
    <div className='product'>
        <h1>Add Product</h1>
        <input type="text" placeholder='Add Product Name' className='inputBox'
        value={name}   onChange={(e)=> setName(e.target.value)} />
        {error && !name &&<span className='invalid-input'>Enter Valid name</span>}
        <input type="text" placeholder='Add Product Price' className='inputBox'
        value={price}   onChange={(e)=> setPrice(e.target.value)} />
         {error && !price &&<span className='invalid-input'>Enter Valid price</span>}
        <input type="text" placeholder='Add Product Category' className='inputBox'
        value={category}    onChange={(e)=> setCategory(e.target.value)} />
         {error && !category &&<span className='invalid-input'>Enter Valid category</span>}
        <input type="text" placeholder='Add Product Company' className='inputBox'
        value={company}   onChange={(e)=> setCompany(e.target.value)} />
         {error && !company &&<span className='invalid-input'>Enter Valid company</span>}
        <button onClick={addProduct} className='appButton'>Add Product</button>
    </div>
  )
}

export default AddProduct