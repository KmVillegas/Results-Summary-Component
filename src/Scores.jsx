export default function Scores(props) {
    return (
        <div className="Score--items" style={{
            backgroundColor: props.bgcolor,
            color: props.color
        }}>
            <img src={props.icon} />
            <span className="Score--Category">{props.category}</span>
            <span className="Score--Score"><span className="Score--Points">{props.score}</span> / 100</span>
        </div>
    )
}