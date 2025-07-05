import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  console.log(logo);
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} alt="A plate with food on it." priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul className={classes.navItems}>
            <li>
             <NavLink href="/meals">
              Browse Meals
             </NavLink>
            </li>
            <li>
             <NavLink href="/community">
              Foodies Community
             </NavLink>
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
