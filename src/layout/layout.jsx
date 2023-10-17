import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { createStyles } from "@mantine/core";
// import { Sidebar } from "./SideMenu";

const useStyles = createStyles((theme) => ({
    main: {
        paddingTop: "70px",
    }
}));

const Layout = ({ children }) => {
    const { classes } = useStyles();

    return (
        <>
            <Navigation />
            <main className={classes.main}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;