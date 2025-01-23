function TextInput({ type = "text",label,placeholder,onChangeHandler }) {
  return (
    <label>
     {label}
      <input type= {type}
      className="border border-gray-400 px-2 py-4 rounded-lg w-full"
      placeholder={placeholder}
      onChange={onChangeHandler} />
    </label>
  );
}

export default TextInput;