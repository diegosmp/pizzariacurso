export default function Input({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-zinc-200 py-2 px-4 rounded-md"
    />
  )
}
