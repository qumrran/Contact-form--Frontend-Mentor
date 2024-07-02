import './PopUp.scss';
import check from '../assets/images/icon-success-check.svg';

function PopUp () {
    return (
        <div className="PopUpContainer">
            <h2 className="PopUpHeader"><img src={check}/>Message Sent!</h2>
            <p className="PopUpContent">Thanks for completing the form. We'll be in touch soon!</p>
        </div>
    )
}

export default PopUp;