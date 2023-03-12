import MainLayout from "@/Layouts/Main";
import { Link } from "@inertiajs/react";
import Tippy from "@tippyjs/react";

const Welcome = (props) => {
    return (
        <MainLayout auth={props.auth.user}>
            <h1>Welcome Page</h1>
            <div className='d-flex gap-3 align-items-center'>
                <Tippy content='My Button' placement='bottom'>
                    <button className='btn btn-primary'>My button</button>
                </Tippy>
                <Link href={route("about")}>About</Link>
            </div>
        </MainLayout>
    );
};

export default Welcome;
