import { FaFacebookF, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold">
              HandyMate
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Integrations
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Privacy
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50">Developers</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Public API
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Documentation
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex text-lg items-center p-1"
              >
                <FaFacebookF />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex text-lg items-center p-1"
              >
                <FaSquareXTwitter />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex text-lg items-center p-1"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2023 HandyMate by Tanim.
      </div>
    </footer>
  );
};

export default Footer;
