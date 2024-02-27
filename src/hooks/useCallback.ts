import { DependencyList, useEffect, useRef } from "react";

function useCallback(callback: Function, dependencies: DependencyList) {
  const ref = useRef<Function>();

  useEffect(() => {
    ref.current = callback;
  }, [callback, ...dependencies]);

  return ref.current;
}

export default useCallback;
