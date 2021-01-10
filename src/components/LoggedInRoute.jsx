import {useContext, Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const LoggedInRoute=({component:Component,...otherProps})=>{
    const user=useContext(AuthContext);

    // 簡単な書き方
    // if(!user){
    //     return <Redirect to='/login'/>;
    // }
    // return <Route {...otherProps} component={Component}/>;

    return (
        <Route
        {...otherProps}
        //exact={otherProps.exact}
        //path={otherProps.path}
        render={(props)=>
        user?<Component {...props}/>:<Redirect to='/login'/>
    }
    />
    );
};

export default LoggedInRoute;