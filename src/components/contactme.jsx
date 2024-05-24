import './contactme.css';
import phone from '../images/contact/phone.png';
import gmail from '../images/contact/gmail.png';

const contactme = () => {
    return (
        <div id="contact" className='contactme-outer'>
            <h1>Contact Me!</h1>
            <div className='inp-data'>
                <form>
                    <label>Name: 
                        <input type='text' name="name" />
                    </label>
                    <label>Email: 
                        <input type='text' name="email" />
                    </label>
                    <label>Phone No:
                        <input type='text' name="pno" />
                    </label>
                    <label>Description
                        <input type='text' name="desc"/>
                    </label>
                    <input className='sub' type='submit' value="submit" />
                </form>
                <label>
                    <img src={phone} alt='phone'></img>5622542792
                </label>
                <label>
                    <img src={gmail} alt='gmail'></img>gokarakondahemanthsai@gmail.com
                </label>
            </div>
        </div>
    );
}
 
export default contactme;