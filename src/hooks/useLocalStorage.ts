import { useEffect, useState } from "react";

const parseValue = (value: string | null) => {
  if (value === null) {
    return null;
  }

  try {
    return JSON.parse(value);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return value;
  }
};

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, (newValue: T) => void] => {
  const value = localStorage.getItem(key);

  const [parsedValue, setParsedValue] = useState<T>(parseValue(value));

  const setLocalStorage = (newValue: T) => {
    setParsedValue(newValue);

    if (typeof newValue === "string") {
      localStorage.setItem(key, newValue);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  useEffect(() => {
    const storageListener = (event: StorageEvent) => {
      if (event.key === key) {
        setParsedValue(parseValue(event.newValue));
      }
    };

    window.addEventListener("storage", storageListener);

    return () => removeEventListener("storage", storageListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [parsedValue === null ? defaultValue : parsedValue, setLocalStorage];
};
