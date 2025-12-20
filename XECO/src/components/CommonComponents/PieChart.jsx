import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';
import { mobileAndDesktopOS, valueFormatter } from '../../../hooks/WebUsageStateHooks';

export default function PieChartMics() {
    const [radius, ] = React.useState(80);
    const [itemNb, ] = React.useState(6);
    const [skipAnimation, ] = React.useState(false);

   


    return (
        <Box sx={{ width: '100%' }} >
            <PieChart
                height={300}
                width={300}
                series={[
                    {
                        data: mobileAndDesktopOS.slice(0, itemNb),
                        innerRadius: radius,
                        valueFormatter,
                    },
                ]}
                sx={{
                    '& path': {
                        stroke: 'none !important',
                    },
                }}

                slotProps={{
                    legend: {
                        hidden: true
                    },
                    tooltip: {
                        sx: {
                            bgcolor: 'rgba(0,0,0,0.75)',
                            px: 1.5,
                            py: 1,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        },
                    },
                }}
                skipAnimation={skipAnimation}
            />
          
        </Box>
    );
}
