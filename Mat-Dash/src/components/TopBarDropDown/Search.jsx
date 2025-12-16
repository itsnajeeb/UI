import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { X } from 'lucide-react';
import Divider from '@mui/material/Divider';
import '../../App.css'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function Search({ open, handleClose }) {
    // console.log(open, handleClose);

    return (
        <Dialog
            open={open}
            slots={{
                transition: Transition,
            }}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <div className='py-7 '>
                <div className='flex mb-5 gap-2 lg:gap-3 group px-5 lg:px-8 pb-1 lg:pb2'>
                    <div className='relative'>
                        <input type="text" 
                            className=' 
                            rounded-lg px-4 py-1 outline-none border-2 border-gray-200/80 focus:border-primary-color
                            peer '
                        />
                        <label htmlFor="" className='px-1  text-gray-400 transition-all duration-300 absolute top-1 left-4 peer-focus:-top-3 peer-focus:text-sm bg-white peer-focus:text-primary-text'>Search here</label>
                    </div>
                    <div className=' self-center cursor-pointer text-gray-700/90 hover:text-primary-text transition-all duration-400' onClick={handleClose}>
                        <X />
                    </div>
                </div>
                <Divider />
                <h5 className='text-lg font-semibold px-12 pt-4 manrope-fontFamliy'>Quick Paste Links</h5>
            </div>
        </Dialog>
    );
}