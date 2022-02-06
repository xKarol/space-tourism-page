export default function Heading({ number, text }) {
  return (
    <h1 className="main-section__heading --absolute">
      <b>{number.toString().padStart(2, "0")}</b> {text}
    </h1>
  );
}
