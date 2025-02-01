export default function Btn({ children, type = "" }) {
  const types = {
    primary: "btn btnPrimary",
    error: "btn btnError",
    danger: "btn btnDanger",
    info: "btn btnInfo",
  };
  return <button className={types[type]}>{children}</button>;
}
