import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';

const automated = [8, 6, 4, 14, 5, 7, 7];
const manual = [3, 2, 2, 3, 2, 3, 3];
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default function Chart() {
    return (
        <Box
            sx={{
                width: 320,
                paddingX:3,
                paddingY:1,
                borderRadius: 4,
                background: '#F8FAF5',
            }}
        >
            {/* Title */}
            <Typography
                align="center"
                fontWeight={600}
                fontSize={16}
                mb={1}
            >
                Automation Activity Chart
            </Typography>

            {/* Legend row */}
            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius:4,
                }}
                paddingY={2}
                display="flex"
                alignItems="center"
                flexDirection={"column"}
                justifyContent="center"
                gap={1}
                fontSize={12}

            >
                <Typography fontSize={10} display="flex" alignItems="center" gap={1}>
                    {/* 📊 Automation Activity Chart */}
                </Typography>

                <Box display="flex" gap={2} alignItems="center">
                    <Legend color="#A3E635" fontSize={10} label="Automated tasks" />
                    <Legend color="#365314" fontSize={10} label="Manual tasks" />
                    {/* <Typography fontSize={9} color="text.secondary">
            Last Year ⌄
          </Typography> */}
                </Box>

                {/* Chart */}
                <BarChart
                    sx={{
                        width: "100%",
                        background: "white"
                    }}
                    height={140}
                    series={[
                        {
                            data: automated,
                            stack: 'total',
                            color: '#A3E635',
                        },
                        {
                            data: manual,
                            stack: 'total',
                            color: '#365314',
                        },
                    ]}
                    xAxis={[
                        {
                            data: days,
                            scaleType: 'band',
                            tickLabelStyle: {
                                fontSize: 11,
                                fill: '#6b7280',
                            },
                        },
                    ]}
                    yAxis={[
                        {
                            min: 0,
                            max: 20,
                            tickNumber: 4,
                            valueFormatter: (v) => `${v}%`,
                            tickLabelStyle: {
                                fontSize: 11,
                                fill: '#6b7280',
                            },
                        },
                    ]}
                    borderRadius={8}
                    grid={{ horizontal: true }}
                />
            </Box>


            {/* Description */}
            <Typography
                mt={1}
                fontSize={9}
                color="text.secondary"
                lineHeight={1.3}
            >
                Automation increased consistently throughout the week,
                reaching its highest performance on Thursday with 14,100
                automated tasks executed.
            </Typography>
        </Box>
    );
}

/* Legend component */
function Legend({ color, label }) {
    return (
        <Box display="flex" alignItems="center" gap={0.5}

        >
            <Box
                sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: color,

                }}
            />
            <Typography fontSize={10}>{label}</Typography>
        </Box>
    );
}
