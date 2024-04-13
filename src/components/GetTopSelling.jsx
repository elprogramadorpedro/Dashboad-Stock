// src/contexts/stockContext.jsx

const [sales, setSales] = useState([]);

// Simulación: Suponer que tienes una manera de registrar ventas
// Esta función podría ser llamada en el componente donde se procesan ventas
const registerSale = (itemId, quantity) => {
  setSales(current => [...current, { itemId, quantity }]);
};

// Función para obtener los ítems más vendidos
const getTopSellingItems = () => {
  const salesCount = sales.reduce((acc, sale) => {
    acc[sale.itemId] = (acc[sale.itemId] || 0) + sale.quantity;
    return acc;
  }, {});

  const sortedItems = items.sort((a, b) => {
    return (salesCount[b.id] || 0) - (salesCount[a.id] || 0);
  });

  return sortedItems.slice(0, 5);  // Top 5 más vendidos
};

// Añadir a StockContext.Provider
return (
  <StockContext.Provider value={{ items, addItem, getItem, updateItem, deleteItem, getTopSellingItems }}>
    {children}
  </StockContext.Provider>
);
