import * as React from "react";
import s from "./footer.module.css";

const Footer = (): JSX.Element => {
    return (
        <footer className={s.footer}>
            <p className={s.footerText}>все права защищены © 2023</p>
        </footer>
    );
};

export default Footer;
