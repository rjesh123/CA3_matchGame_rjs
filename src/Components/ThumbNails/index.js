import './index.css'

const ThumbNails = props => {
  const {details, onActiveThumbNail} = props
  const {thumbnailUrl, id} = details

  const onThumbNail = () => {
    onActiveThumbNail(id)
  }

  return (
    <li className="thumbnail-item">
      <button type="button" className="btn-img" onClick={onThumbNail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbNails
