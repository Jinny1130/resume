interface OwnProps {
  title: String;
  size: String;
}

const Title: React.FC<OwnProps> = ({ title, size }) => {
  return (
    <div
      className={`text-emerald-500 font-semibold ${
        size === 'S' ? 'text-lg sm:text-xl' : 'text-4xl'
      }`}
    >
      {title}.
    </div>
  );
};

export default Title;
