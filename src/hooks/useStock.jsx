import { useContext } from "react";
import { StockContext } from "../contexts/stockContext";

export default function useStock() {
  return useContext(StockContext)
}