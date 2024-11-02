import './index.css'

const BrowserItem = props => {
  const {listItem, deleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItem

  const deleteItem = () => {
    deleteListItem(id)
  }

  return (
    <li className="list-ele">
      <p className="time-ele">{timeAccessed}</p>
      <div className="logo-domain-card">
        <div className="logo-card">
          <img src={logoUrl} className="logo-ele" alt="domain logo" />
          <div className="title-domain-card">
            <p>
              {title} <br className="br-ele" />
            </p>
            <p className="span-ele">{domainUrl}</p>
          </div>
        </div>

        <button
          type="button"
          className="button-ele"
          data-testid="delete"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItem
