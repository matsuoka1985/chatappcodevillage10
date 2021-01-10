import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Room from './pages/Room';

import AuthProvider from './context/AuthContext';
import LoggedInRoute from './components/LoggedInRoute';

const App=()=>{
return (
    <AuthProvider>
        <BrowserRouter>
            <Switch>
                <LoggedInRoute exact path='/'component={Room}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
            </Switch>
        </BrowserRouter>
    </AuthProvider>
);
}
export default App;