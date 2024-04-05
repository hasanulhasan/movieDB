import Image from 'next/image'
import Link from 'next/link'
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Sun from "../assets/icons/sun.svg";
import Cart from "../assets/shopping-cart.svg";

export default function Nav() {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src={Logo} width="139" height="26" alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={Sun} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src={Cart}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
