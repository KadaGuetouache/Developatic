import { Typography, Layout, Menu, theme } from "antd";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
const { Sider } = Layout;
import { router } from "@inertiajs/react";

const sideNavItems = [
    {
        label: "Users List",
        key: "show",
    },
    {
        label: "Add New User",
        key: "add",
    },
];

const AdminLayout = ({ children, user }) => {
    const { Header, Content, Footer } = Layout;
    const { Text } = Typography;

    const handleSideMenu = (e) => {
        if (e.key === "add") {
            router.get("/admin/show");
        } else if (e.key === "show") {
            router.get("/admin");
        }
    };

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
                <div className="demo-logo text-gray-300 text-lg font-bold uppercase">
                    logo
                </div>
                <div
                    className="relative left-[84%] flex w-[200px] nav items-center"
                    style={{
                        position: "relative",
                        left: "84%",
                    }}
                >
                    <Text className="text-gray-400 text-md mr-5">
                        {user.name}
                    </Text>
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        style={{
                            width: "80px",
                            fontSize: "15px",
                            borderRadius: 10,
                            background: "#C00000",
                            color: "white",
                        }}
                        as="button"
                    >
                        Logout
                    </ResponsiveNavLink>
                </div>
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
                            onClick={handleSideMenu}
                            style={{
                                height: "100%",
                            }}
                            items={sideNavItems}
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
                    // width: "100%",
                    color: "white",
                    textAlign: "center",
                    // position: "absolute",
                    // bottom: 0,
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default AdminLayout;
