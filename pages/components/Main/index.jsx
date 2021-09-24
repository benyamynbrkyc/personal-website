import 'animate.css';

import ContactButton from './ContactButton';
import Spacer from '../UI/Spacer';

function Main() {
  return (
    <div className='animate__animated animate__fadeInUp animate__delay-1s'>
      <h1>Contact</h1>
      <Spacer />
      <ContactButton></ContactButton>
    </div>
  );
}

export default Main;
