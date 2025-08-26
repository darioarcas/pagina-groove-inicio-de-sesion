import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUserCoursesListener } from "../../../actions/auth";

const Dashboard = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth?.uid) {
      const unsubscribe = dispatch(startUserCoursesListener(auth.uid));

      // Cleanup si el componente se desmonta
      return () => {
        if (typeof unsubscribe === "function") {
          unsubscribe();
        }
      };
    }
  }, [auth?.uid, dispatch]);

  const cursos = auth.cursosComprados || [];

  return (
    <>
      <h2>Hola {auth?.name}</h2>
      {cursos.length === 0 ? (
        <p>Aún no obtuviste ningún curso.</p>
      ) : (
        <ul>
          <h4>Tus cursos:</h4>
          {cursos.map((curso) => (
            <li key={curso.id}>
              <h3>{curso.nombre}</h3>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Dashboard;
