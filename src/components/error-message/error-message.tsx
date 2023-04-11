import { useAppSelector } from '../../hooks';
import { errorSelector } from '../../store/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(errorSelector);

  return (error) ? <div className='error-message'> {error} </div> : null;
}

export default ErrorMessage;
