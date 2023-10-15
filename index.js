/**
 * @format
 */
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export default Main = () => {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    );
}
AppRegistry.registerComponent(appName, () => Main);
