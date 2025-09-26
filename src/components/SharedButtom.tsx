interface Props {
    counter: number;
    handleClickIncrement: () => void;
}
const SharedButtom = ({counter, handleClickIncrement}: Props) => {

  return (
    <button onClick={handleClickIncrement}>valor compartido {counter}</button>
  )
}
export default SharedButtom