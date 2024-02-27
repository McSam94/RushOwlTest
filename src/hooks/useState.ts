import { useEffect, useRef, useState as useStateFromReact } from "react";

type Dispatch<A> = (value: A) => void;

function useState<S>(initialState: S | (() => S)): [S, Dispatch<S>] {
  const [state, setState] = useStateFromReact<S>(initialState);
  const stateRef = useRef<S>(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const dispatch: Dispatch<S> = (value: S) => {
    stateRef.current = value;
    setState(value);
  };

  return [state, dispatch];
}

export default useState;
