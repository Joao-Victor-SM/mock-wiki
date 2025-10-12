interface props {
  text: string;
}
export default function TextWarning({ text }: props) {
  return <p className="bg-yellow-100 border border-yellow-400 p-2">{text}</p>;
}
