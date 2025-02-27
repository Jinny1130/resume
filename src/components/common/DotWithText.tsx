/* xs size dot */

interface OwnProps {
  sideText: string;
  textSize: string;
}

const DotWithText: React.FC<OwnProps> = ({ sideText, textSize }) => {
  return (
    <div className={`dot-width-text w-full py-1`}>
      <p className="flex items-baseline">
        <i className={`block w-1 h-1 rounded-full bg-emerald-400 mr-1`} />
        <span className="w-[calc(100%-10px)]">{sideText}</span>
      </p>
    </div>
  );
};

export default DotWithText;
