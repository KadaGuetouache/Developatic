import { Link, Head } from "@inertiajs/react";
import WelcomeLayout from "@/Layouts/WelcomeLayout";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Home" />
            <div className=""></div>
        </>
    );
}

Welcome.layout = (page) => <WelcomeLayout children={page} />;
