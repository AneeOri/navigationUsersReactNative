import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // if we are in the app, will show a notification or not
    shouldPlaySound: true,
    shouldSetBadge:true,
    shouldShowAlert: true,
  }),
});

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator/>
    </Provider>
  );
}

