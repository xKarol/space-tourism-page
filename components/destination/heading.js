export default function Heading({ number, text }) {
  return (
    <h1 className="main-section__heading --other">
      <b>{number.toString().padStart(2, "0")}</b> {text}
    </h1>
  );
}
