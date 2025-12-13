import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { X } from 'lucide-react';
import Divider from '@mui/material/Divider';

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
                <div className='flex mb-5 gap-3 group px-12 pb-2'>
                    <input type="text" placeholder='Search here '
                        className=' rounded-lg px-4 py-1 outline border border-gray-200/80 focus:border-indigo-500'
                    />
                    <div className=' self-center cursor-pointer' onClick={handleClose}>
                        <X />
                    </div>
                </div>
                <Divider />
                <h5 className='text-lg font-semibold px-12 pt-4'>Quick Paste Links</h5>
            </div>
        </Dialog>
    );
}