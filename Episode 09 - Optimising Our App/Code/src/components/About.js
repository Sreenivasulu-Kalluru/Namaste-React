import { Component } from 'react';
// import User from './User';
import UserClass from './UserClass';

class About extends Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor');
  }

  componentDidMount() {
    // console.log('Parent Component Did Mount');
  }

  render() {
    // console.log('Parent Render');
    return (
      <div className="about-page">
        {/* <h1>About Class Component</h1>
        <h2>This is About Page</h2> */}
        <UserClass name={'First'} location={'Badvel class'} />
        {/* <UserClass name={'Second'} location={'Badvel class'} /> */}
        {/* <UserClass name={'Third'} location={'Badvel class'} /> */}
      </div>
    );
  }
}

// * RENDER CYCLE OF CLASS BASED COMPONENTS WHEN THE CLASS HAS TWO CHLIDREN

/* 
*  - Parent Constructor()              -- Render Phase
*  - Parent Render()

*    - First Child Constructor()
*    - First Child Render()
*                                      -- Render Phase
*    - Second Child Constructor()
*    - Second Child Render()

*     <DOM UPDATED - IN SINGLE BATCH> -> Optimizes the Performance of App  -- Commit Phase
*    - First Child ComponentDidMount()
*    - Second Child ComponentDidMount()

*  - Parent ComponentDidMount()=
*/

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is About Page</h2>
//       <UserClass name={'Vasu (class)'} location={'Badvel class'} />
//     </div>
//   );
// };

export default About;
