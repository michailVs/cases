
const CaseItem = ({csi, setOpen, saleItem}) => {
  return (
    <div>
        {csi.map(item => 
            <div key={item.id}>
                <img src={item.src} alt={item.title} />
                <h2>{item.title}</h2>
                <button onClick={setOpen}>Оставить предмет</button>
                <button onClick={() => saleItem(item)}>Продать предмет за {item.price} руб.</button>
            </div>
            )
        }
    </div>
  )
}

export default CaseItem