import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";

const Home = () => {
    return <div>Home</div>;
};

Home.layout = (page) => <AdminLayout children={page} />;

export default Home;
