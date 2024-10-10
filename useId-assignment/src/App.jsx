import React from 'react'
import Form from './components/Form'

const App = () => {
  return (
    <div>
      <Form/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatem natus corporis enim suscipit non delectus eaque similique dolorem, praesentium officiis voluptatum fugit pariatur? Quo magnam explicabo quaerat molestias aliquam.</p>
      <h1>The below input fields have different id than upper one</h1>
      <Form/>
    </div>
  )
}

export default App