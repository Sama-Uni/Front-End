
import {useState} from "react";
import  {useRouter}  from 'next/router';


const Login = () => {
    const router = useRouter();

    const [formValue, setFormValue] = useState({userName: "", password: ""});
    let [login , setLogin]=useState(false);
    const [user ,setUser]=useState({userName:""})
    const formSubmitHandler = async (e) =>{
        e.preventDefault();
        console.log(formValue)
        // try {
        //
        //     const response = await fetch("http://localhost:8090/unipoll/v1/login", {
        //         method: "GET",
        //         headers: {
        //             'Authorization': `Basic ${ btoa(`${formValue.userName}:${formValue.password}`)}`,
        //             "Content-Type": "application/json"
        //         },
        //     });
        //
        //
        //     if (response.ok) {
        //         setLogin(false);
        //         console.log("OK");
        //         localStorage.setItem('jwtToken',response.headers.get('Authorization'));
        //         const jwtToken=localStorage.getItem('jwtToken');
        //         console.log(jwtToken);
        //         console.log((JSON.parse(atob(jwtToken.split('.')[1]))).data);
        //         await router.push('/home');
        //     } else {
        //         setLogin(true);
        //         console.log("not ok")
        //     }
        //
        // }catch (e) {
        //     console.error("we are GETTING ERROR", e)
        // }
    }

    return(
        <div className={"h-screen w-screen flex flex-row bg-[#31363f]"} dir={'rtl'}>
            <div className={"flex flex-col h-full w-full items-center bg-gradient-to-r from-[#222831] to-gray-700 justify-between p-5"}>
                <div className={'flex flex-col text-center gap-5'}>
                    <p className={'text-white text-5xl'}>SAMA</p>
                    <p className={"text-base text-gray-300"}>سامانه مدیریت استادیار</p>
                </div>

                <form style={{display: "flex", alignItems: "center", justifyContent: "center"} }
                      onSubmit={formSubmitHandler}
                      className={"border-gray-700 flex flex-col align-items-center justify-between "}>
                    <div className={'flex flex-col w-80 mb-12'}>
                        <p className={'text-xl pb-2 text-start pr-5 text-white'}> نام کاربری</p>
                        <input
                            name={"userName"}
                            onChange={(event) => {
                                setFormValue({...formValue, userName: event.target.value})
                            }}
                            className=' h-14 block bg-blue1 w-full border border-slate-300 rounded-xl
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 '
                            type="text"/>
                    </div>
                    <div className={'flex flex-col w-80'}>
                        <p className={'text-xl pb-2 text-start pr-5 text-white'}>رمز ورود</p>
                        <input
                            name={"password"}
                            onChange={(event) => {
                                setFormValue({...formValue, password: event.target.value})
                            }}
                            className=' h-14 block bg-blue1 w-full border border-slate-300 rounded-xl
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 '
                            type="password"/>
                    </div>
                    <button className='font-bold drop-shadow-md text-[#222831] text-center mt-20 rounded-xl bg-[#76ABAE] px-16 py-2 pb-3 shadow-sm shadow-[#EEEEEE]'
                            type={"submit"}>
                        ورود
                    </button>
                    <div className={'flex flex-row text-sm gap-1 mt-5 text-gray-300'}>
                        <p>
                            حساب کاربری ندارید؟
                        </p>
                        <button className={'text-white hover:text-[#76ABAE]'}>
                            ثبت نام
                        </button>
                    </div>
                    {login && <p className={'text-white text-[0.75rem] mt-2'}>
                        .رمز ورود یا نام کاربری اشتباه است
                    </p>}

                </form>
                <div className={"flex flex-row gap-28 text-white text-lg"}>
                    <p>
                        ارتباط با پشتیبانی
                    </p>
                    <p>
                        شرایط و قوانین
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Login;