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
        margin:'0 auto',
    },
});

const Signup=()=>{
    
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [visible,setVisible]=useState('password');
    const classes=useStyles();
    const user=useContext(AuthContext);


    const handleSubmit=(e)=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((result)=>{
                result.user.updateProfile({displayName:username})
                .then(()=>{
                    console.log('ユーザー作成成功',result);
            });
            })
            .catch((error)=>{
                console.log('ユーザー作成失敗',error);
            });
    };
    if(user){
        return <Redirect to='/'/>
    };

    return(
        <form className={classes.form} onSubmit={handleSubmit}>
            <h1 className={classes.title}>ユーザー登録ページ</h1>
            <TextField value={username} onChange={(e)=>setUsername(e.target.value)}variant='standard' label='ユーザーネーム'/>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)} variant='filled' label='メールアドレス'/>
            <TextField type= {visible} value={password} onChange={(e)=>setPassword(e.target.value)} variant='outlined' label='パスワード'/>
            <Link to='/login'>アカウントを既にお持ちの方</Link>
            <Button type='submit' variant='contained' color='primary'>
                登録
            </Button>
            <Button onClick={()=>setVisible(visible==='password'? 'text':'password')}  variant='contained' color='secondary'>
                👁パスワードを表示する👁
            </Button>
        </form>

    ) ;
};
export default Signup;