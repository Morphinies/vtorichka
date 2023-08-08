import * as React from "react";
import s from "./footer.module.css";

const Footer = (): JSX.Element => {
    return (
        <footer className={s.footer}>
            <p className={s.footerText}>made by morphinies</p>
        </footer>
    );
};

export default Footer;
