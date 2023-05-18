import './index.css'

const TabItem = props => {
  const {details, isActive, onActiveTab} = props
  const {displayText, tabId} = details
  const tabColor = isActive ? 'active-color' : ''

  const onChangeTab = () => {
    onActiveTab(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${tabColor}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
