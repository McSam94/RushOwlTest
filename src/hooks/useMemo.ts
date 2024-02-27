import { useRef, DependencyList } from "react";

function useMemo<T>(factory: () => T, dependencies: DependencyList): T {
  const ref = useRef<{ value: T; dependencies: DependencyList }>();

  if (!ref.current) {
    ref.current = {
      value: factory(),
      dependencies: [...dependencies],
    };
  }

  const isEqual = ref.current.dependencies.every(
    (dependency, index) => dependency === dependencies[index]
  );

  if (!isEqual) {
    ref.current.value = factory();
    ref.current.dependencies = [...dependencies];
  }

  return ref.current.value;
}

export default useMemo;
