import './button.css'

export default function Button({btnTxt}) {
  return (
    <>
      <button className="btn">
        <span className="btn__txt">{btnTxt}</span>
      </button>
    </>
  );
}