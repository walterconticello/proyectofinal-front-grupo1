import { Fragment, useState, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoApp from "../../../assets/logo-canchas.png";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import CartModal from "../../cart/CartModal";
import { AuthContext } from "../../../context/AuthContext";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Store", href: "/store", current: false },
  // Agregar otras rutas aqui
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Disclosure as="nav" className="navbarContainer">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-lime-500 hover:bg-lime-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500 transition">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={logoApp}
                    alt="LogoReservaGol"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        activeclassname ="text-white navBtn" // Apply active class
                        className={classNames(
                          location.pathname === item.href // Check if the current path matches the item's href
                            ? "text-white navBtn"
                            : "text-gray-300 hover:text-white hover:bg-lime-500 navBtn",
                          "rounded-md px-3 py-2 text-sm font-medium navBtn"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {authenticated ? (
                  <>
                    <button
                      type="button"
                      onClick={handleOpenModal}
                      className="relative rounded-full carrito p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-500 transition"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Agrega tus productos!</span>
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="carrito"
                        size="xl"
                      />
                    </button>
                    {showModal && <CartModal onClose={handleCloseModal} />}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full text-sm focus:outline-none">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <FontAwesomeIcon
                            icon={faUser}
                            className="h-8 w-8 rounded-full userIcon"
                            size="lg"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                              to="/perfil"
                                className={classNames(
                                  active ? "bg-lime-100 botonCierre" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Mi Perfil
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={logout}
                                className={classNames(
                                  active ? "bg-lime-100 botonCierre" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Cerrar Sesion
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="text-white hover:text-white hover:bg-lime-500 navBtn rounded-md px-3 py-2 text-sm font-medium navBtn transition"
                  >
                    Iniciar Sesion
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  activeclassname ="text-white navBtn" // Apply active class
                  className={classNames(
                    location.pathname === item.href
                      ? "navBtn text-white transition"
                      : "text-gray-400 hover:text-white hover:bg-lime-500 transition",
                    "block rounded-md px-3 py-2 text-base font-medium transition"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
