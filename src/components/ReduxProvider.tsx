"use client"
// components/ReduxProvider.tsx
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../redux/store"; // Adjust the path as per your project structure

// This is a client-side component
export default function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
