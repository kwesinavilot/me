import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { createStyles } from "@mantine/core";
// import { Sidebar } from "./SideMenu";

const useStyles = createStyles((theme) => ({
    main: {
        paddingTop: "70px",
        background: "white",
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