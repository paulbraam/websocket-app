import { useAppSelector } from '../../hooks';

const LogsCounter = () => {
  const totalLogsCount = useAppSelector(state => state.user.totalLogsCount);
  return <h3>{`Total logs count: ${totalLogsCount}`}</h3>;
};

export default LogsCounter;
