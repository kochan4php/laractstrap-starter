import Head from "@/Components/Head";
import Input from "@/Components/Input";
import { useForm } from "@inertiajs/react";

const Login = (props) => {
    const { data, post, processing, setData, errors } = useForm({
        username: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("login.store"));
    };

    return (
        <>
            <Head title='Login' />
            <div className='container'>
                <div
                    className='row justify-content-center align-items-center'
                    style={{ minHeight: "100vh" }}
                >
                    <div className='col-lg-6'>
                        <div className='card'>
                            <div className='card-header pb-0'>
                                <h3
                                    className='card-title text-center'
                                    style={{ fontFamily: "Lexend Deca" }}
                                >
                                    Please Sign In
                                </h3>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='username'
                                            className='form-label'
                                        >
                                            Username / Email
                                        </label>
                                        <Input
                                            type='username'
                                            id='username'
                                            placeholder='Enter your username or email'
                                            value={data.username}
                                            onChange={(e) =>
                                                setData(
                                                    "username",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='password'
                                            className='form-label'
                                        >
                                            Password
                                        </label>
                                        <Input
                                            type='password'
                                            id='password'
                                            value={data.password}
                                            placeholder='Enter your password'
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className='mb-3 form-check'>
                                        <Input
                                            type='checkbox'
                                            className='form-check-input'
                                            value={data.remember}
                                            id='remember'
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.value
                                                        ? true
                                                        : false
                                                )
                                            }
                                        />
                                        <label
                                            className='form-check-label'
                                            htmlFor='remember'
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <button
                                        type='submit'
                                        className='btn btn-primary w-100'
                                        disabled={processing}
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
