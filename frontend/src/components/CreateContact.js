import {Link} from 'react-router-dom'
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize'

const CreateContact = ({ onCreateContact }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        //encode form elements as query string ourselves
        //hash true gives back an object
        const values = serializeForm(e.target, {hash: true});
        if (onCreateContact) {
            onCreateContact(values);
        }
    }

    return (
        <div>
            <Link className="close-create-contact" to='/'>
                close
            </Link>
            <form onSubmit={handleSubmit}className='create-contact-form'>
                <ImageInput 
                className='create-contact-avatar-input' 
                name='avatarURL' 
                maxHeight={64} 
                />
                <div className='create-contact-details'>
                    <input type='text' name='name' placeholder='Name'></input>
                    <input type='text' name='handle' placeholder='Handle'></input>
                    <button >Add Contact</button>
                </div>
            </form>
        </div>
    );
};

export default CreateContact;