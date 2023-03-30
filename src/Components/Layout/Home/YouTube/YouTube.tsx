import './YouTube.css'

function YouTube(): JSX.Element {
  const isSunMon = true
  const brands = [
    { id: 1, model: 'Nike' },
    { id: 2, model: 'Adidas' },
    { id: 3, model: 'Vans' },
    { id: 4, model: 'Rebook' },
  ]

  return (
    <div className="YouTube">
      <div>
        {isSunMon && <h3 className="Box">Now On Sale</h3>}
        <iframe
          title="YouTube video player"
          width="650"
          height="400"
          src="https://www.youtube.com/embed/864B4rzoPog?autoplay=1&mute=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <ul>
          {brands.map((brand) => (
            <li key={brand.id}>{brand.model}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default YouTube
