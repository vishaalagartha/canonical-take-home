import './Card.css'

const Card = (props) => {
  const { title: { rendered: title }, featured_media: image, author, modified, link } = props
  const date = new Date(modified)
  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  return (
    <div className="col-4">
      <div className="p-card u-no-padding card">
        <div className="p-card__inner"></div>
        <img alt="#" className="p-card-image card-image" src={image} />
        <div className="p-card__inner">
          <h3 className="card-header">{title}</h3>
        </div>
        <div className="p-card__inner card-author">
          By {author} on {day} {month} {year}
          <hr />
          <a href={link}>Article</a>
        </div>
      </div>
    </div>
  )
}

export default Card