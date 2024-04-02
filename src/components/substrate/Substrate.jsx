import './substrate.css'

export default function Substrate({children, styles, addClass}) {

  return (
    <>
      <div className={`substrate ${addClass}`} style={styles}>
        {children}
      </div>
    </>
  );
}