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
        <li>{id} {description} - {title}</li>
    </div>
  )
}
export default ProductItem