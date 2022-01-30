import React from 'react';
import { Provider as StateProvider } from 'react-redux';
import store from './store';
import LogsList from './components/LogsList/LogsList';
import LogsCounter from './components/LogsCounter/LogsCounter';
import ClearLogsButton from './components/ClearLogsButton/ClearLogsButton';

const App: React.FC = () => {
  return (
    <StateProvider store={store}>
      <ClearLogsButton />
      <LogsCounter />
      <LogsList />
    </StateProvider>
  );
};

export default App;
