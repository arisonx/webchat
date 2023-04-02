import { useEffect } from 'react';
import { useTimeout as useReactUseTimeout } from 'react-use';

export function useTimeout(callback: () => void, delay: number) {
  const [isReady, cancel] = useReactUseTimeout(delay);
  useEffect(() => {
    if (isReady()) {
      callback();
    }
  }, [callback, cancel, isReady]);
}
