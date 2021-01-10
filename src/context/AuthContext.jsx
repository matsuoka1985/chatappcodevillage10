import {createContext,useState,useEffect} from 'react';
import {auth} from '../config/firebase';

export const AuthContext=createContext(null);

const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            console.log('onAuthStateChanged関数が実行されました',authUser);
            setUser(authUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthProvider;

//childrenの解説
// const Button =({children})=>{
//     return <button>{children}</button>;
// };

// const App=()=>{
//     return (
//         <form>
//             <input/>
//Buttonコンポーネントは<Button/>だけでなく下のようにも書くことができる。この場合文字列ログインがchildrenになる。
//             <Button>ログイン</Button>
//         </form>
//     );
// };
//つまりAuthProviderのchildrenは
//<AuthProvider>
//  <h1>foo</h1>
//</AuthProvider>
//
//<h1>foo</h1>になる。



//useEffectの解説
// const App=()=>{
//     useEffect(()=>{
//         console.log('邪魔');
//     },[]);
//     return <h1>こんにちは</h1>;
// };

// 本来は上から順にプログラムが実行されるがuseEffectを使った場合、returnの<h1>こんにちは</h1>が描写された後にuseEffect内のコールバック関数が実行される。