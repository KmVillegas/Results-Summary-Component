import data from '../data.json/'
import Scores from './Scores'

export default function MainContent() {
    const scoreList = data.map(d => <Scores key={d.category} {...d} />)
    return (
        <main className="MainContent">
            <div className="Results">
                <p className='Results--title'>Your Result</p>

                <div className='Results--Score'>
                    <div className='Results--ScoreContainer'>
                        <p>76</p>
                        <span>of 100</span>
                    </div>
                </div>
                <p className='Results--Comment'> Great</p>
                <p className='Results--Evaluation'>You scored higher than 65% of the people who have taken these tests.</p>
            </div>


            <div className="Summary">
                <h1>Summary</h1>
                <div className='Score--Container'>
                    {scoreList}
                </div>
                <button>Continue</button>
            </div>
        </main>
    )
}