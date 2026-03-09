import { useState } from "react";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";

const UsuariosPage = () => {

  const [openModal, setOpenModal] = useState(false);

  const columns = [
    { label: "Nombre", key: "nombre" },
    { label: "Correo", key: "correo" }
  ];

  const data = [
    { nombre: "Juan", correo: "juan@gmail.com" },
    { nombre: "Ana", correo: "ana@gmail.com" }
  ];

  return (
    <div>

      <h1>Usuarios</h1>

      <Button
        text="Crear Usuario"
        onClick={() => setOpenModal(true)}
      />

      <Table columns={columns} data={data} />

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