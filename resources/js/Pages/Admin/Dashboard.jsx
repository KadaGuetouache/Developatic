import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";

const Dashboard = ({ auth }) => {
    return <div>This is the admin section</div>;
};

Dashboard.layout = (page) => <AdminLayout children={page} />;

export default Dashboard;
