import { useAppDispatch } from '../../hooks';
import { clearLogs } from '../../store/actionCreators';
import styles from './ClearLogsButton.module.css';

const ClearLogsButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(clearLogs());

  return (
    <button className={styles.ClearLogsButton} onClick={handleClick}>
      Clear logs
    </button>
  );
};

export default ClearLogsButton;
