import { useState, useRef, useEffect } from "react";

const DropdownUsuario = ({ auth, handleLogout2 }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-react" ref={menuRef} style={{ position: "relative", listStyle: "none" }}>
      <button
        className="text-white bg-transparent border-0"
        onClick={() => setOpen(!open)}
      >
        {auth.name} ⌄
      </button>

      {open && (
        <ul
          className="dropdown-menu-react"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "8px",
            padding: "10px",
            background: "#222",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 9999,
          }}
        >
          <li style={{ listStyle: "none" }}>
            <button onClick={handleLogout2} className="btn btn-sm text-white">
              Cerrar sesión
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownUsuario;
