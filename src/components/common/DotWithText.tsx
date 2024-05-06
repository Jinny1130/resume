/* xs size dot */

interface OwnProps {
    sideText: String,
    textSize: String
}

const DotWithText:React.FC<OwnProps> = ( { sideText, textSize } ) => {
    return (
        <div className={`w-full py-1 text-${textSize}`}>
            <p className="flex items-baseline">
                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>{ sideText }
            </p>
        </div>
    )
}

export default DotWithText