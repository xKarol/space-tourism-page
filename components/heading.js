export default function Heading({ number, text, className }) {
  return (
    <h1 className={`main-section__heading ${className}`}>
      {number ? (
        <>
          <b>{number.toString().padStart(2, "0")}</b> {text}
        </>
      ) : (
        <>{text}</>
      )}
    </h1>
  );
}
