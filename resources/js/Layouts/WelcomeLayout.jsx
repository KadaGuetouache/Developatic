import React from "react";
import { Layout, Menu, theme } from "antd";
import { router } from "@inertiajs/react";

const items = [
    {
        label: "Login",
        key: "login",
    },
    {
        label: "Register",
        key: "register",
    },
];

const WelcomeLayout = ({ children }) => {
    const { Header, Content, Footer } = Layout;

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleMenu = (event) => {
        if (event.key === "login") {
            router.get("/login");
        } else {
            router.get("/register");
        }
    };

    return (
        <Layout>
            <Header
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    onClick={handleMenu}
                    items={items}
                    style={{ width: "170px" }}
                />
            </Header>
            <Content>
                <Layout>
                    <Content
                        style={{
                            padding: "0 24px",
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    background: "#001529",
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                    position: "absolute",
                    bottom: 0,
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default WelcomeLayout;
