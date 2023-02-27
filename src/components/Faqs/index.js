// Write your code here.

import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faq-card-container">
        <h1 className="heading"> FAQs</h1>
        <ul className="faq-container">
          {faqsList.map(eachFaq => (
            <FaqItem eachFaq={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
