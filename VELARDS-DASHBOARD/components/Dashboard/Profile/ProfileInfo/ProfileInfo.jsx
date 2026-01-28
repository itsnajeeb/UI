import React from 'react'
const ProfileInfo = () => {
  return (
    <div className='profile-info-show'>
      <h1 className='title'>You Profile Info</h1>
      <div className='info-container'>

        <div className='info-tab'>
          <label htmlFor="">Name</label>
          <input type="text" value={"User Name"} />
        </div>


        <div className='info-tab'>
          <label htmlFor="">Email</label>
          <input type="text" value={"user@user.com"} />
        </div>


        <div className='info-tab'>
          <label htmlFor="">Country</label>
          <input type="text" value={"India"} />
        </div>


        <div className='info-tab'>
          <label htmlFor="">Mobile</label>
          <input type="text" value={"+91 1947194719"} />
        </div>


        <div className='info-tab'>
          <label htmlFor="">State</label>
          <select name="" id="">
            <option value="Bihar">Bihar</option>
            <option value="Bihar">New Dehil</option>
            <option value="Bihar">Punjab</option>
          </select>
        </div>


        <div className='info-tab'>
          <label htmlFor="">District</label>
          <input type="text" value={"Bihar"} />
        </div>

        <div className='info-tab'>
          <label htmlFor="">Address</label>
          <input type="text" value={"ABC XYZ"} />
        </div>

        <div className='info-tab'>
          <label htmlFor="">Pin</label>
          <input type="text" value={"847423"} />
        </div>


      </div>
    </div>
  )
}

export default ProfileInfo