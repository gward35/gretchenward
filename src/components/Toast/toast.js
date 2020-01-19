import React, { useEffect, useRef } from 'react';

const Toast = ({ children, remove }) => {
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    const duration = 4000;
    const id = setTimeout(() => removeRef.current(), duration)

    return () => clearTimeout(id)
  }, []);

  return (
    <div className="toast">
      <div className="toast-text">
        {children}
      </div>
      <button onClick={remove} className="toast-close">x</button>
    </div>
  )
}

export default Toast;