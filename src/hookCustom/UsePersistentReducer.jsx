import { useEffect } from "react";

const UsePersistentReducer = (valueState) => {
  useEffect(() => {
    localStorage.setItem(
      `${import.meta.env.VITE_REACT_APP_NAME_LOCALSTORAGE}`,
      JSON.stringify(`${valueState}`)
    );
  }, [valueState]);

  return <div>UsePersistentReducer</div>;
};

export default UsePersistentReducer;
