function TestPage (props) {
  const { title, linkTo, data } = props;

  return (
    <div>
      <h1>{title}</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default TestPage;
