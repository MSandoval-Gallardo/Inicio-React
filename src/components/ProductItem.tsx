//interfaces de props
interface Props {

    title: string;
    description: string;
    id: number;
}

const ProductItem = ({title, description, id}: Props) => {
    // console.log(props)
  return (
    <div>
        <li>{description} - {title}</li>
    </div>
  )
}
export default ProductItem