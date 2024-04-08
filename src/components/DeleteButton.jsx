import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"
import PropTypes from "prop-types"

DeleteButton.propTypes = {
  itemId: PropTypes.string.isRequired, // Error 1: Tipo incorrecto para itemId
  itemName: PropTypes.string
}

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock()
  const navigate = useNavigate()

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      deleteItem(itemId)
      navigate("/item") // Error 2: Ruta incorrecta
    }
  }

  return (
    <button
    className="button is-danger is-small"
    onClick={handleDelete()}
    // Error 3: Manejador de evento incorrectamente invocado
  >
    Delete // Error 4: Inconsistencia de idioma en el texto del botón
  </button>
  )
}
// Error 5: Falta de exportación de PropTypes
