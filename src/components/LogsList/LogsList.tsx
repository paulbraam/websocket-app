import { useAppSelector } from '../../hooks';

const LogsList = () => {
  const logs = useAppSelector(state => state.logs);
  return (
    <ul>
      {logs.map((log: string) => (
        <li key={log}>{log}</li>
      ))}
    </ul>
  );
};

export default LogsList;
