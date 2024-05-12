// import React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import blogApp from './blogApp.jpeg';
// import Careem from './Careem.jpeg';
// import Facebook from './Facebook.jpeg';
// import Fiverr from './Fiverr.jpeg';
// import Foodpanda from './Foodpanda.jpeg';
// import Pomodoro from './Pomodoro.jpeg';
// import portfolio from './portfolio.jpeg';
// import Todolist from './Todolist.jpeg';
// import UMS from './UMS.jpeg';
// import VotingApp from './VotingApp.jpeg';
// import WebDevelp from './WebDevelp.jpeg';

// const itemData = [
//   {
//     img: blogApp,
//     title: 'Personal Blogging App',
//   },
//   {
//     img: Careem,
//     title: 'Careem Clone',
//   },
//   {
//     img: Facebook,
//     title: 'Facebook Clone',
//   },
//   {
//     img: Fiverr,
//     title: 'Fiverr Clone',
//   },
//   {
//     img: Foodpanda,
//     title: 'Foodpanda CLone',
//   },
//   {
//     img: Pomodoro,
//     title: 'Pomodoro Timer',
//   },
//   {
//     img: portfolio,
//     title: 'Portfolio',
//   },
//   {
//     img: Todolist,
//     title: 'To-do List ',
//   },
//   {
//     img: UMS,
//     title: 'University Management System',
//   },
//   {
//     img: VotingApp,
//     title: 'Voting App',
//   },
//   {
//     img: WebDevelp,
//     title: 'Web Development Info Page',
//   },
// ];

// export default function Projects() {
//   return (
//     <div>
//       <ImageList sx={{ width: 1250, height: 450 }}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               alt={item.title}
//               loading="lazy"
//             />
//             <ImageListItemBar
//               title={item.title}
//               subtitle={<span>{item.author}</span>}
//               position="below"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }


import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import blogApp from './blogApp.jpeg';
import Careem from './Careem.jpeg';
import Facebook from './Facebook.jpeg';
import Fiverr from './Fiverr.jpeg';
import Foodpanda from './Foodpanda.jpeg';
import Pomodoro from './Pomodoro.jpeg';
import portfolio from './portfolio.jpeg';
import Todolist from './Todolist.jpeg';
import UMS from './UMS.jpeg';
import VotingApp from './VotingApp.jpeg';
import WebDevelp from './WebDevelp.jpeg';
import LandingPage from './LandingPage.jpeg';
import { useHref } from 'react-router-dom';

const itemData = [
  {
    img: blogApp,
    title: 'Personal Blogging App',
  },
  {
    img: Careem,
    title: 'Careem Clone',
  },
  {
    img: Facebook,
    title: 'Facebook Clone',
  },
  {
    img: Fiverr,
    title: 'Fiverr Clone',
  },
  {
    img: Foodpanda,
    title: 'Foodpanda CLone',
  },
  {
    img: Pomodoro,
    title: 'Pomodoro Timer',
  },
  {
    img: portfolio,
    title: 'Portfolio',
  },
  {
    img: Todolist,
    title: 'To-do List ',
  },
  {
    img: UMS,
    title: 'University Management System',
  },
  {
    img: VotingApp,
    title: 'Voting App',
  },
  {
    img: WebDevelp,
    title: 'Web Development Info Page',
  },
  {
    img: LandingPage,
    title: 'Landing Page',
  },
];

export default function Projects() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const cols = matches ? 2 : 4; // Change the number of columns based on screen size

  return (
    <div>
        <h1 style={{display:'flex', justifyContent:'center', fontSize:'40px'}}>PROJECTS</h1><br/>
      <ImageList sx={{ width: '100%', height: 450 }} cols={cols}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.author}</span>} // Add author if available
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
