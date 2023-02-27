// Write your code here.

import {Component} from 'react'
import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onClickToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {eachFaq} = this.props
    const {questionText, answerText} = eachFaq
    const {isActive} = this.state

    const iconImage = isActive ? minusIcon : plusIcon

    const altIcon = isActive ? 'plus' : 'minus'
    return (
      <li className="faq-list">
        <div className="question-container">
          <h1 className="question-text text">{questionText}</h1>
          <button
            type="button"
            className="icon-button"
            onClick={this.onClickToggle}
          >
            <img src={iconImage} alt={altIcon} className="Icon" />
          </button>
        </div>
        {isActive ? <hr /> : ''}
        <p className="answer-text text">{isActive && answerText}</p>
      </li>
    )
  }
}

export default FaqItem
