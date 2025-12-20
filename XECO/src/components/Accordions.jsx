import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { faqs } from '../data/data.js'
import GradientText from './CommonComponents/GradientText.jsx';
/*  FIXED CONTENT HEIGHT (MOST IMPORTANT) */
// const CONTENT_HEIGHT = 180;

/* ---------- ACCORDION ---------- */
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

/* ---------- SUMMARY ---------- */
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

/* ---------- DETAILS (FIXED HEIGHT – NO SCROLL ISSUE) ---------- */
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // height: CONTENT_HEIGHT,              //  FIX
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
    <div className="max-w-6xl mx-auto my-28 space-y-6">
      <div className='text-center mb-20'>
        <GradientText title={"Ask Quick Question"} />
      </div>

      {faqs.map((item, index) => {
        const isActive = expanded === index;

        return (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={`
              cursor-pointer rounded-2xl px-20 py-10
              transition-colors duration-300
              ${isActive
                ? 'bg-linear-to-b from-[#010314] to-[#3a8f7a]'
                : 'bg-[#0F101E]'
              }
            `}   >
            {/* QUESTION ROW */}
            <div className="flex items-center justify-between">
              <h3 className="text-white text-xl font-semibold">
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

            {/* ANSWER — NO SCROLL, SMOOTH HEIGHT */}
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

      <div className="w-full my-32  bottom-0 flex justify-center ">
        <div className="h-[2px] w-full max-w-6xl bg-linear-to-r 
            from-transparent 
            via-[#fff] 
            to-transparent
            opacity-60
          " />
      </div>
    </div>
  );
}
