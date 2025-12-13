import React, { useState } from 'react';
import { Box, Button, Avatar, Menu, MenuItem, Typography } from '@mui/material';

// The props from the parent (ProfileDropDownforMediumScreen) will override internal state
export default function CountryFlagDropDown(props) {
    
    //  Internal State for Standalone (Large Screen) 
    // Destructure props, providing a default empty object to avoid errors if no props are passed
    const { 
        anchorEl: externalAnchorEl, 
        open: externalOpen, 
        handleClose: externalHandleClose 
    } = props;

    const [internalAnchorEl, setInternalAnchorEl] = useState(null);
    const internalOpen = Boolean(internalAnchorEl);

    const handleInternalClick = (event) => {
        setInternalAnchorEl(event.currentTarget);
    };

    const handleInternalClose = () => {
        setInternalAnchorEl(null);
    };
    
    //  Determine which state/handlers to use (Controlled vs. Uncontrolled) ---
    // If external props are provided (used on MD screen), use them. Otherwise, use internal state.
    const isControlled = externalAnchorEl !== undefined || externalOpen !== undefined || externalHandleClose !== undefined;

    const anchorEl = isControlled ? externalAnchorEl : internalAnchorEl;
    const open = isControlled ? externalOpen : internalOpen;
    const handleClose = isControlled ? externalHandleClose : handleInternalClose;
    const handleClick = isControlled ? () => {} : handleInternalClick; // Click is managed by parent on MD screen
    

    return (
        <Box sx={{ flexGrow: 0 }}>
            
            {/* --- Render the Trigger Button ONLY for the LG (Standalone) Screen --- */}
            {!isControlled && (
                <Button
                    id="flag-dropdown-button"
                    aria-controls={open ? 'flag-dropdown-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        minWidth: 0,
                        width: 36,
                        height: 36,
                    }}
                >
                    <Avatar
                        alt="Country Flag"
                        src="https://matdash-angular-stylish.netlify.app/assets/images/flag/icon-flag-en.svg" // Main Trigger Flag
                        sx={{ width: 22, height: 22 }}
                    />
                </Button>
            )}

            {/* --- The Menu component uses the determined (external or internal) state/handlers --- */}
            <Menu
                id="flag-dropdown-menu"
                aria-labelledby="flag-dropdown-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    sx: {
                        // Corrected minWidth to use numeric values or responsive object
                        minWidth: 180, 
                        borderRadius: 2,
                        boxShadow: 2, 
                        marginTop:2
                    },
                }}
            >
                {/* Other Flag Drop Down Section */}
                <div className=' flex gap-1 flex-col manrope-fontFamliy '>
                    {/* English */}
                    <MenuItem className='flex cursor-pointer' onClick={handleClose}>
                        <Avatar
                            alt="Country Flag"
                            src="https://matdash-angular-stylish.netlify.app/assets/images/flag/icon-flag-en.svg"
                            sx={{ width: 24, height: 24, mr: 1.5 }}
                        />
                        <Typography variant="body2" className='text-sm'>English</Typography>
                    </MenuItem>

                    {/* Français */}
                    <MenuItem className='flex cursor-pointer' onClick={handleClose}>
                        <Avatar
                            alt="Country Flag"
                            src="https://matdash-angular-stylish.netlify.app/assets/images/flag/icon-flag-fr.svg"
                            sx={{ width: 24, height: 24, mr: 1.5 }}
                        />
                        <Typography variant="body2" className='text-sm'>Français</Typography>
                    </MenuItem>

                    {/* German */}
                    <MenuItem className='flex cursor-pointer' onClick={handleClose}>
                        <Avatar
                            alt="Country Flag"
                            src="https://matdash-angular-stylish.netlify.app/assets/images/flag/icon-flag-de.svg"
                            sx={{ width: 24, height: 24, mr: 1.5 }}
                        />
                        <Typography variant="body2" className='text-sm'>German</Typography>
                    </MenuItem>

                    {/* Español */}
                    <MenuItem className='flex cursor-pointer' onClick={handleClose}>
                        <Avatar
                            alt="Country Flag"
                            src="https://matdash-angular-stylish.netlify.app/assets/images/flag/icon-flag-es.svg"
                            sx={{ width: 24, height: 24, mr: 1.5 }}
                        />
                        <Typography variant="body2" className='text-sm'>Español</Typography>
                    </MenuItem>
                </div>
            </Menu>
        </Box>
    );
}