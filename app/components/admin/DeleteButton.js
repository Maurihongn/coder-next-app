"use client";
import { MaterialSymbolsDeleteForever } from "../UI/Icons/MaterialSymbolsDeleteForever";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="rounded bg-red-500 hover:bg-red-800 p-2 text-white flex items-center justify-center"
      onClick={onClick}
    >
      <MaterialSymbolsDeleteForever width={32} height={32} />
    </button>
  );
};

export default DeleteButton;
