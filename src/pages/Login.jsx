import {useState,useContext} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {TextField,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {auth} from '../config/firebase';
import {AuthContext} from '../context/AuthContext';

const useStyles=makeStyles({
    title:{
        color:'red',
    },
    form:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',
        height:'400px',
        width:'350px',
        margin:'0 auto'
    }
});

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const user=useContext(AuthContext);
    const classes=useStyles();
    const [visible,setVisible]=useState('password');
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((result)=>{
                console.log('ログイン成功',result);
                
            })
            .catch((error)=>{
                console.log('ログイン失敗',error);
            });
    };
    if(user){
        return<Redirect to="/"/>
    }

    return(
        <form className={classes.form} onSubmit={handleSubmit}>
            <h1 className={classes.title}>ログインページ</h1>
            <TextField variant="filled" label='メールアドレス' value={email} onChange={e=>setEmail(e.target.value)}/>
            <TextField type={visible} variant='outlined' label='パスワード' value={password} onChange={e=>setPassword(e.target.value)}/>
            <Link to='/signup'>アカウントをお持ちでない方</Link>
            <Button variant='contained' color='secondary' type='submit'>
                ログイン
            </Button>
            <Button onClick={()=>setVisible(visible==='password' ? 'text' :'password')} variant='contained' color='primary'>
                👁パスワードを表示する👁
            </Button>
        </form>
    );
};
export default Login;