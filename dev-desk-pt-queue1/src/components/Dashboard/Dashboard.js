//needs to have separate views for the user dashboard and the helper dashboard. You could hash it out as one single component here, or you can delete this file and do a StudentDash.js component and a HelperDashboard.js component
import React from 'react';
import propTypes from 'prop-types';
import Helper from '../Helper';
import TicketQueue from '../TicketQueue'


import Header from '../Header';
import Footer from '../Footer';

const Dashboard = props => {
    return (
        <>
            <Header /> 
            <TicketQueue />
        </>
        
    )
}
    /** Determines which type of user is logged in and displays data based on that */
    // handleView(user){
        // switch(user){
    //         case 'Helper':
    //             return(
    //                 <>
    //                     <Header/ >
    //                     <Helper/ >
    //                     <Footer/ >
    //                 </>
    //             )
    //         break;
    //         case 'User': 
    //             return (
    //                 <>
    //                 </>
    //             )
    //         break;
    //     }
    // }

//     render() {
//         return (
//             this.handleView('Helper')
//         );
//     }
// }

// Dashboard.propTypes = {
//     User: propTypes.string
// };

export default Dashboard;
