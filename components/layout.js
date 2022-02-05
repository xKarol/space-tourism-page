export default function Layout({ children, className }) {
  return <main className={`layout ${className}`}>{children}</main>;
}
