import React, { useState } from 'react'
import BackArrow from './CommonComponents/BackArrow'
import Footer from './CommonComponents/Footer'
import Button from './CommonComponents/Button'
import PasswordInput from './CommonComponents/PasswordInput'
import { toast, ToastContainer } from 'react-toastify'

const ChangeTransactionPassword = () => {
    const [form, setForm] = useState({
        currentPassword: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const changePasswordHandler = () => {
        try {
            if (form.password !== form.confirmPassword) {
                toast.error("Password Not Match", {
                    position: 'top-center',
                    autoClose: 1500,
                    theme: 'dark'
                })
            }

            else {
                toast.success("Password Update Successfully.", {
                    position: 'top-center',
                    autoClose: 1500,
                    theme: 'dark',
                })
            }
        } catch (err) {
            toast.error("Someting went wrong. Please try again ", err.message)
        }
    }

    return (
        <div className="h-screen bg-[#0c0c0cc8] flex justify-center overflow-hidden">

            {/* APP SHELL */}
            <div className="relative w-full max-w-97.5 sm:h-screen h-[93vh]  bg-[#111116] lg:rounded-3xl lg:border-2 lg:border-[#8ac9ff] shadow-2xl flex flex-col ">
                <div className=' absolute bg-gray-800 text-white left-5 top-5 rounded-full w-10 h-10 flex justify-center cursor-pointer'>
                    <BackArrow />
                </div>
                {/*  Only this div will scroll*/}
                <div className="flex-1 custom-scroll mt-24 px-10 space-y-4">
                    <h1 className='text-white text-2xl font-semibold text-center mb-6 '>Update Password</h1>
                    <PasswordInput placeholder="Current Password"
                        name="currentPassword"
                        value={form.currentPassword}
                        changeHandler={handleChange}

                    />
                    <PasswordInput placeholder="New Password"
                        name="password"
                        value={form.password}
                        changeHandler={handleChange}
                    />
                    <PasswordInput placeholder="Confirm New Password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        changeHandler={handleChange}
                    />

                    <div className='flex justify-center w-full '>
                        <Button btnText={"Update Transaction Password"} changePasswordHandler={changePasswordHandler} />
                    </div>
                    <ToastContainer />
                </div>
                <div className='w-full px-3 mb-1 absolute bottom-0'>
                    <div className="bg-secondary shadow-(--shadow-soft) text-white py-2  rounded-xl px-4 ">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeTransactionPassword