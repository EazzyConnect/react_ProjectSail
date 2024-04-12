import React, { useContext, useState } from 'react'
import { formContext } from '../../UserContext';

const Admin = () => {

  const {createUser, updateUser} = useContext(formContext);

  // This state has been shared globally
  // const [createUser, setCreateUser] = useState({
  //   email: "",
  //   password: "",
  //   imgUrl: ""
  // });



  // For image
  // const [img, setImg] = useState("");

  // const handleChangeImg = (e) => {
  //   const file = URL.createObjectURL(e.target.files[0]);
  //   setImg(file)
  // }


  // Destructure createUser
  const { email, password, imgUrl } = createUser

  //Handle Input Change
  const handleChange = (e) => {
    const { value, name, files } = e.target;
    updateUser((prev) => ({
      ...prev,
      [name]: name === "imgUrl" ? URL.createObjectURL(files[0]) : value
    }))
  };

  //Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createUser);
  };


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <div className='adminFormData'>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={email} onChange={handleChange} />
        </div>

        <div className='adminFormData'>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={password} onChange={handleChange} />
        </div>

        <div className='adminFormData'>
          <input type="file" name="imgUrl" onChange={handleChange} />
        </div>

        <div>

          {imgUrl && <img src={imgUrl} alt='img' />}
        </div>

        <button>Create User</button>
      </form>
    </div>
  )
}

export default Admin
