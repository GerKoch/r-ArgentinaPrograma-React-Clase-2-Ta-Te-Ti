export const Square = ({ children, index, isSelected, updateBoard }) => {
    const changueClass = `square ${isSelected ? 'is-selected' : ''}`;
  
    const handleClick = () => {
      updateBoard(index);
    };
  
    return (
      <div className={changueClass} onClick={handleClick}>
        {children}
      </div>
    )
  };