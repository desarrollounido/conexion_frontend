import { useEffect, useState } from "react";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { getUsuario } from "../services/usuario";
const UsuariosPage = () => {

    const [usuarios, setUsuarios] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const columns = [
  { label: "Nombre", key: "nombre_usuario" },
  { label: "Correo", key: "email_usuario" }
];

  const data = [
    { nombre: "Juan", correo: "juan@gmail.com" },
    { nombre: "Ana", correo: "ana@gmail.com" }
  ];

  useEffect(() => { 
     const traerUsuarios = async () => {
        try {
            const response = await getUsuario();
            console.log(response);
            setUsuarios(response.data.data);
        } catch (error) {
            console.error("Error fetching usuario:", error);
        }
        };
    traerUsuarios();
  }, []);

  return (
    <div>

      <h1>Usuarios</h1>

      <Button
        text="Crear Usuario"
        onClick={() => setOpenModal(true)}
      />

      <Table columns={columns} data={usuarios} />

      <Modal
        isOpen={openModal}
        title="Crear Usuario"
        onClose={() => setOpenModal(false)}
      >

        <form>

          <input type="text" placeholder="Nombre" />
          <br /><br />

          <input type="email" placeholder="Correo" />
          <br /><br />

          <Button text="Guardar" type="submit"/>

        </form>

      </Modal>

    </div>
  );
};

export default UsuariosPage;