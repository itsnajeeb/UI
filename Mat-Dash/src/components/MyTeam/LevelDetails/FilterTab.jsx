import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { LevelData } from '../../../data/MyTeamStaticData';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        sx: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 350,
            '&::-webkit-scrollbar': {
                width: '6px',
            },
            '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#9ca3af', // gray-400
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: '#6b7280', // gray-500
            },
        },
    },
    disableAutoFocusItem: true,
};

const FilterTab = ({ onFilter }) => {
    /* LEVEL FILTER */
    const [selectedLevels, setSelectedLevels] = React.useState([]);
    const [level] = React.useState(LevelData);
    const [levelOpen, setLevelOpen] = React.useState(false);

    const sortedLevels = React.useMemo(() => {
        return [...new Set(level.map(item => item.level))]
            .sort((a, b) => a - b);
    }, [level]);

    const handleLevelChange = (event) => {
        const value = event.target.value;

        // If ALL selected
        if (value.includes('ALL')) {
            setSelectedLevels(['ALL']);
            setLevelOpen(false); // close dropdown immediately
            return;
        }

        // For Manual selection
        setSelectedLevels(value);
    };
    /* STATUS FILTER */
    const [status, setStatus] = React.useState('ALL');
    const [statusOpen, setStatusOpen] = React.useState(false);

    return (
        <div className='flex gap-4 bg-white flex-col pb-7 pt-5 px-8 rounded-xl manrope-fontFamliy' >
            <h1 className='text-xl  font-semibold text-[#29343d] mb-2'>Find by Level & Status</h1>
            {/* LEVEL SELECT */}
            <div className='flex gap-4'>
                <FormControl sx={{ width: 350 }} focused={levelOpen}>
                    <InputLabel
                        id="level-label"
                        shrink={levelOpen || selectedLevels.length > 0}
                    >
                        Select Level
                    </InputLabel>

                    <Select
                        labelId="level-label"
                        multiple
                        open={levelOpen}
                        onOpen={() => setLevelOpen(true)}
                        onClose={() => setLevelOpen(false)}
                        value={selectedLevels}
                        onChange={handleLevelChange}
                        input={<OutlinedInput label="Select Level" />}
                        renderValue={(selected) =>
                            selected.includes('ALL')
                                ? 'All Levels'
                                : selected.map((lvl) => `Level-${lvl}`).join(', ')
                        }
                        MenuProps={MenuProps}

                    >
                        {/* ALL OPTION */}
                        <MenuItem value="ALL">
                            <Checkbox checked={selectedLevels.includes('ALL')} />
                            <ListItemText primary="All Levels" />
                        </MenuItem>

                        {/*  INDIVIDUAL LEVELS */}
                        {sortedLevels.map((lvl) => (
                            <MenuItem
                                key={lvl}
                                value={lvl}
                                disabled={selectedLevels.includes('ALL')} //  lock others
                            >
                                <Checkbox checked={selectedLevels.includes(lvl)} />
                                <ListItemText primary={`Level ${lvl}`} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                {/* STATUS SELECT */}
                <FormControl sx={{ width: 250 }} focused={statusOpen}>
                    <Select
                        open={statusOpen}
                        onOpen={() => setStatusOpen(true)}
                        onClose={() => setStatusOpen(false)}
                        value={status}                 //  CONTROLLED VALUE
                        onChange={(e) => {
                            setStatus(e.target.value);
                            setStatusOpen(false);        //  close immediately
                        }}
                        renderValue={(selected) =>
                            selected === 'ALL' ? 'All Status' : selected
                        }
                    >
                        <MenuItem value="ALL">All Status</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>
                </FormControl>

                <button
                    onClick={() => onFilter({
                        levels: selectedLevels,
                        status: status
                    })}
                    className='bg-[#544cfb] text-white px-10 rounded-lg cursor-pointer font-semibold
            hover:bg-[#635BFF] transition-all duration-300
            '>SEARCH</button>

            </div>
        </div>
    );
};

export default FilterTab;
