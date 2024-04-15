import './substrate.css'

export default function Substrate({children, styles, addClass}) {

  const addCss = addClass ? addClass : '';
  return (
    <>
      <div className={`substrate ${addCss}`} style={styles}>
        {children}
      </div>
    </>
  );
}