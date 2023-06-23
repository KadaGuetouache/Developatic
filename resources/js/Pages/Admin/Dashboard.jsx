import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Space, Table } from "antd";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

const { Column } = Table;

const Dashboard = ({ auth, users }) => {
    return (
        <AdminLayout user={auth.user}>
            <Table dataSource={users} pagination={{ pageSize: 15 }}>
                <Column title="ID" dataIndex="id" key="id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column
                    title="Date Of Birth"
                    dataIndex="date_of_birth"
                    key="date_of_birth"
                />
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <ResponsiveNavLink
                                method="delete"
                                href={route(`admin.delete`, record.id)}
                                style={{
                                    width: "80px",
                                    fontSize: "15px",
                                    borderRadius: 10,
                                    background: "#C00000",
                                    color: "white",
                                }}
                                as="button"
                            >
                                Delete
                            </ResponsiveNavLink>
                        </Space>
                    )}
                />
            </Table>
        </AdminLayout>
    );
};

export default Dashboard;
