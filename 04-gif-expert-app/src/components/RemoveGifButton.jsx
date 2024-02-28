export const RemoveGifButton = ({removeCategory}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}} >
      <p>Este titulo no contiene Gifs!</p>
      <button
        onClick={removeCategory} 
        style={{
          background: 'red', color: 'white', height: '22px', width: '23px', fontSize: 12, 
          borderColor: 'transparent', marginLeft: 10, boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.5)',
          cursor: 'pointer' 
        }}>X</button>
    </div>
  )
}