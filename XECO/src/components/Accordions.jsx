import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, { accordionSummaryClasses, } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { faqs } from '../data/data.js'
import GradientText from './CommonComponents/GradientText.jsx';

/*  ACCORDION  */
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: 16,
  overflow: 'hidden',
  backgroundColor: '#0F101E',
  '&:not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
  '&::before': {
    display: 'none',
  },
}));

/* SUMMARY */
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#0F101E',
  color: '#fff',
  flexDirection: 'row-reverse',
  padding: theme.spacing(2, 3),

  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
  {
    transform: 'rotate(90deg)',
  },

  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

/* DETAILS (FIXED HEIGHT – NO SCROLL ISSUE) */
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3),
  color: '#cbd5e1',
  transition: 'opacity 0.3s ease',
}));


export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(null);

  const handleToggle = (index) => {
    setExpanded(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-6xl mx-auto mt-20 space-y-6 ">
      <div className='text-center mb-10'>
        <GradientText title={"Ask Quick Question"} />
      </div>

      {faqs.map((item, index) => {
        const isActive = expanded === index;

        return (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={`
              cursor-pointer rounded-2xl px-5 py-8 mx-5
              transition-colors duration-300 sm:px-10 md:px-20 md:py-10
              ${isActive
                ? 'bg-linear-to-b from-[#010314] to-[#3a8f7a]'
                : 'bg-[#0F101E]'
              }
            `}   >
            {/* QUESTION ROW */}
            <div className="flex items-center justify-between">
              <h3 className="text-white text-base font-semibold  sm:text-lg md:text-xl">
                {item.question}
              </h3>

              <ArrowForwardIosSharpIcon
                sx={{
                  color: '#fff',
                  fontSize: '1rem',
                  transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.35s ease',
                }}
              />
            </div>

            <div
              className={`
                grid transition-all duration-500 ease-in-out
                ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
              `}
            >
              <div className="overflow-hidden">
                <p className="mt-4 text-slate-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>

          </div>
        );
      })}

      <div className="w-full my-16  bottom-0 flex justify-center ">
        <div className="h-0.5 w-full max-w-6xl bg-linear-to-r 
            from-transparent 
            via-white 
            to-transparent
            opacity-60
            md:my-20
          " />
      </div>
    </div>
  );
}
