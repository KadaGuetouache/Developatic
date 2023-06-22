import React from "react";
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Sider } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            label: `subnav ${key}`,
        };
    }
);

const AppLayout = ({ children }) => {
    const { Header, Content, Footer } = Layout;

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items1}
                />
            </Header>
            <Content
                style={{
                    padding: "0 50px",
                }}
            >
                <Layout
                    style={{
                        padding: "24px 0",
                        background: colorBgContainer,
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{
                                height: "100%",
                            }}
                            items={items2}
                        />
                    </Sider>
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

export default AppLayout;
