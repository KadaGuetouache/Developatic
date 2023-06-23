import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { DatePicker, Button, Form, Input } from "antd";
import { useForm } from "@inertiajs/react";

const AddUser = ({ user }) => {
    const { post, data, setData, errors, processing } = useForm({
        name: "",
        email: "",
        date_of_birth: "",
        password: "",
    });

    const onFinish = () => {
        route(post({ data: JSON.stringify(data) }));
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <AdminLayout user={user}>
            <h2 className="text-4xl text-center font-bold mb-20">
                Add New User
            </h2>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                    margin: "0 150px",
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Date of Birth"
                    name=""
                    rules={[
                        {
                            required: true,
                            message: "Please input your date of birth!",
                        },
                    ]}
                >
                    <DatePicker
                        value={data.date_of_birth}
                        onChange={(_, dateString) => {
                            const date = dateString.replaceAll("-", "/");
                            return setData("date_of_birth", date);
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button
                        type="default"
                        htmlType="submit"
                        size="large"
                        className="bg-blue-500 text-white hover:text-white"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </AdminLayout>
    );
};

export default AddUser;
