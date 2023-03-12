import Head from "@/Components/Head";
import Input from "@/Components/Input";
import { useForm } from "@inertiajs/react";

const Login = (props) => {
    const { data, post, processing, setData, errors } = useForm({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("register.store"));
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
                                    Register Account
                                </h3>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='name'
                                            className='form-label'
                                        >
                                            Name
                                        </label>
                                        <Input
                                            type='name'
                                            id='name'
                                            placeholder='Enter your Name'
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='username'
                                            className='form-label'
                                        >
                                            Username
                                        </label>
                                        <Input
                                            type='username'
                                            id='username'
                                            placeholder='Enter your username'
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
                                            htmlFor='email'
                                            className='form-label'
                                        >
                                            Email
                                        </label>
                                        <Input
                                            type='email'
                                            id='email'
                                            placeholder='Enter your email'
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
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
                                    <button
                                        type='submit'
                                        className='btn btn-primary w-100'
                                        disabled={processing}
                                    >
                                        Register
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
