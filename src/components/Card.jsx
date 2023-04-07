import elipsis from '../assets/icon-ellipsis.svg'

function Card({data, type, select}){

  const {current, previous} = data[select]
  const nameClassImage = `${type.toLowerCase()}`
  const time = select.replace("i", "y").split("ly")

  return (
    <div className={`card ${nameClassImage}`}>
      <div className="card__content">
        <div className="title">
          <h3>{type} </h3> 
          <img src={elipsis} alt="Ellipsis Image"/>
        </div>
        <div className="information">
          <h2> {current}hrs </h2>
          <p> Last {time} - {previous}hrs </p>
        </div>
      </div>
    </div>
  )
}

export default Card