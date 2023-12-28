const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 font-bold mb-2">
      {text}
    </label>
  );
};

export default Label;
